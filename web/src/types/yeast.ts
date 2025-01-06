import { YeastState, YeastType } from '@/constants/enums';

export type Yeast = {
  name: string;
  brand: string;
  weight: number;
  attenuation: number;
  type: YeastType;
  id?: number;
  state: YeastState;
  recipe_id?: number;
  comments: string;
};
