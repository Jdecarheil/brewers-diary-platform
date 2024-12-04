import { QueryClient } from '@tanstack/react-query';
import { LoaderFunctionArgs } from 'react-router-dom';

export const Recipes = () => {
  return <p> recipes</p>;
};

export const loadRecipes = (queryClient: QueryClient) => {
  async ({ request }: LoaderFunctionArgs) => {
    return 'fff';
  };
};

// export const discussionsLoader =
//   (queryClient: QueryClient) =>
//   async ({ request }: LoaderFunctionArgs) => {
//     const url = new URL(request.url);

//     const page = Number(url.searchParams.get('page') || 1);

//     const query = getDiscussionsQueryOptions({ page });

//     return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
//   };
