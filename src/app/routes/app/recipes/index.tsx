import { loadRecipes } from '@/features/recipes/api/queries/recipes';
import { RecipeList } from '@/features/recipes/layouts/recipe-list';
import { ViewRecipe } from '@/features/recipes/layouts/view-recipe';

import { QueryClient, queryOptions, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const getRecipesQuery = (recipeId?: string) => {
  return queryOptions({
    queryKey: ['recipes', recipeId],
    queryFn: async () => loadRecipes(recipeId),
  });
};

export const clientLoader = () => {
  (queryClient: QueryClient) => async () => {
    const query = getRecipesQuery();

    return queryClient.getQueryData(query.queryKey) ?? (await queryClient.fetchQuery(query));
  };
};

const Recipes = () => {
  const { id } = useParams();
  const { data } = useQuery(getRecipesQuery(id));

  if (id) {
    return <ViewRecipe recipe={data?.recipes[0]} />;
  }

  return <RecipeList recipes={data?.recipes} />;
};

export default Recipes;
