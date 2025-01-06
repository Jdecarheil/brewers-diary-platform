import { z } from 'zod';

export const RecipeResponseSchema = {
  author: z.string({}).optional(),
  boil_duration: z.number({}),
  date_added: z.string(),
  downloads: z.number(),
  fermentable_volume: z.number(),
  grist_ratio: z.number(),
  image_id: z.string(),
  kettle_size: z.number(),
  mash_temp: z.number(),
  name: z.string(),
  notes: z.string(),
  public: z.string(),
  additives: z.object({}).optional(),
  fermentables: z.object({}).optional(),
  yeasts: z.object({}).optional(),
  hops: z.object({}).optional(),
};
