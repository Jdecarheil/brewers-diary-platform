// import { Method } from "@/constants/enum"
// import { request } from "@/lib/request"

// const options = {
//     url: 'https://qeizqjbcpmknvfqqawhu.hasura.ap-southeast-1.nhost.run/api/rest/public-recipes',
//     method: Method.GET
// }

// export const getRecipes = async (userId: string) => {

//     const result = await request(options)
//     console.log('result', result)
// }

export const getRecipes = `

query MyQuery {
  recipes {
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
    public
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
