// import { NhostClient } from '@nhost/react';
// import { QueryClient } from '@tanstack/react-query';
// import { ColumnDef } from '@tanstack/react-table';
// import { ReactElement, useTransition } from 'react';
// import { LoaderFunctionArgs, useParams } from 'react-router';
// import logo from '@assets/title.avif';
import { Card } from '@/components/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export const clientLoader = () => {
  // (queryClient: QueryClient, nhostClient: NhostClient) =>
  // async ({ request }: LoaderFunctionArgs) => {
  //   	const res = nhostClient.auth.getSession()

  // const {isLoading, isAuthenticated} = await nhostClient.auth.getAuthenticationStatus()

  // const {data, error} = await nhostClient.graphql.request(getRecipes)
  // if(error){
  // 	console.log(error)
  // 	return
  // }
  // useTransition();
  // queryClient.getQueryData(['recipes'])
  // console.log(data)
  return 'dwd';
};

const Recipes = () => {
  const recipe = [
    { id: '1', test: 1 },
    { id: '2', test: 1 },
    { id: '3', test: 1 },
  ];

  return (
    <>
      <div className="w-full h-full content-center">
        <div className="h-4/5 w-4/5 bord self-auto ">
          {recipe.map((value) => {
            console.log(value);
            return <Card key={value.id} />;
          })}
        </div>

        {/* <div className="h-1/6">{recipeLength > 10 ? <RecipePagination /> : null}</div> */}
      </div>
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
