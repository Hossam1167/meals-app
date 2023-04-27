class Meal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  compleity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenfree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLoctosefree: boolean;

  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: string,
    compleity: string,
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGlutenfree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLoctosefree: boolean
  ) {
    this.id = id;
    this.affordability = affordability;
    this.categoryIds = categoryIds;
    this.compleity = compleity;
    this.duration = duration;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.isGlutenfree = isGlutenfree;
    this.isLoctosefree = isLoctosefree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.steps = steps;
    this.title = title;
  }
}
export default Meal;
