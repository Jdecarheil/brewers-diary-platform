// import { NhostClient } from '@nhost/react';
// import { QueryClient } from '@tanstack/react-query';
// import { ColumnDef } from '@tanstack/react-table';
// import { ReactElement, useTransition } from 'react';
// import { LoaderFunctionArgs, useParams } from 'react-router';
// import logo from '@assets/title.avif';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { loadRecipes } from '@/features/recipes/api/queries/recipes';
import { QueryClient } from '@tanstack/react-query';

const getRecipesQuery = () => ({
  queryKey: ['recipeData'],
  queryFn: async () => loadRecipes(),
});

export const clientLoader = () => {
  (queryClient: QueryClient) => async () => {
    const query = getRecipesQuery();

    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };
};

const Recipes = () => {
  // const params = useParams();
  // const { data } = useQuery(getRecipesQuery());

  return (
    <>
      <div className="container m-auto grid grid-cols-3 gap-4">
        <div className="tile">
          <h1 className="tile-marker">dwdf</h1>
        </div>
        <div className="tile">
          <h1 className="tile-marker">dwdf</h1>
        </div>
        <div className="tile">
          <h1 className="tile-marker">dwdf</h1>
        </div>
        <div className="tile">
          <h1 className="tile-marker">dwdf</h1>
        </div>
      </div>
      {/* <Card /> */}
      {/* <div className="h-4/5 w-4/5 bord self-auto ">
          {data.map((value) => {
            return <Card key={value.id} />;
          })}
        </div>

        <div className="h-1/6">{data.length > 10 ? <RecipePagination /> : null}</div> */}
    </>
  );
};

export const RecipePagination = () => {
  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};
export default Recipes;
