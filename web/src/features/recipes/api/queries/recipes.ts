import { Recipe } from '@/types/recipe';
import { request as GQLRequest, gql } from 'graphql-request';

export const loadRecipes = async (recipeId?: string) => {
  const headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };

  function getQuery(recipeId: string | undefined) {
    if (recipeId) {
      return getRecipesGQL('($recipe_id: Int) {recipes(where: { recipe_id: { _eq: $recipe_id } })');
    }

    return getRecipesGQL('{recipes');
  }

  const val = await GQLRequest<{ recipes: Array<Recipe> }>(
    import.meta.env.VITE_NHOST_URL_GRAPHQL,
    getQuery(recipeId),
    { recipe_id: recipeId },
    headers
  );
  return val;
};

export const getRecipesGQL = (query: string) => gql`
    query ${query} {
      additives {
        addition
        brand
        duration
        ebc_max
        ebc_min
        id
        name
        recipe_id
        weight
      }
      author
      boil_duration
      date_added
      downloads
      fermentable_volume
      grist_ratio
      fermentables {
        brand
        category
        comments
        crush
        ebc_max
        ebc_min
        extract_dry
        id
        max_ppg
        moisture
        name
        recipe_id
        type
        weight
      }
      image_id
      kettle_size
      mash_temp
      name
      notes
      is_public
      recipe_id
      reviews
      style
      uid
      yeasts {
        attenuation
        brand
        id
        name
        recipe_id
        state
        type
        weight
      }
    }
  }
`;
