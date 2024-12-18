import { loadRecipes } from '@/features/recipes/api/queries/recipes';
import { PrivateRecipe } from '@/features/recipes/layouts/private-recipe';
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

  return <PrivateRecipe />;
};

export default Recipes;
