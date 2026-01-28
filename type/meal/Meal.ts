import { Food } from "../food/Food";

export type Meal = {
  id: string;

  name: string;

  foods: Food[];
};
