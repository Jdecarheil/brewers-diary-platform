import { UUID } from 'crypto';
import { request as GQLRequest, gql } from 'graphql-request';

export const loadRecipe = (recipeId: UUID) => {
  const headers = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  const result = GQLRequest(
    import.meta.env.VITE_NHOST_URL_GRAPHQL,
    getRecipeGQL,
    { recipe_id: recipeId },
    headers
  );

  try {
    // const result = LoginResponseSchema.parse(response);
    return result;
  } catch (error) {
    console.log('Error parsing response schema: ', error);
  }
};

export const getRecipeGQL = gql`
  query MyQuery($guid: UUID!) {
    recipes(guid: $guid) {
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
