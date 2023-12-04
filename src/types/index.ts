export interface KeywordContent {
  keyword: string;
  link: string;
}

export interface Tag {
  title: string;
  type: string;
  content: KeywordContent[];
}

export interface Post {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  position?: number;
}

export interface RecipePost {
  id: number;
  name: string;
  image: string;
  link: string;
  author: string;
}

export interface RecipePostListItem extends RecipePost {
  description: string;
  ingredients: string;
  likes: number;
}

export interface CampaignPost extends Post {
  active: boolean;
  time: string;
}

export interface Question {
  question: string;
  answer: string;
}

export interface Story<T> {
  type: string;
  title: string;
  link: string;
  content: T[];
}

export interface Author {
  name: string;
  url: string;
  recipes: number;
  followers: number;
  bio: string;
  image: string;
}

export interface RecipeIngredient {
  type: string;
  name: string;
  amount: string;
}

export interface RecipeInstruction {
  text: string;
  image: string;
}

export interface RecipeDetail {
  name: string;
  image: string;
  author: Author;
  datePublished: string;
  dateModified: string;
  description: string;
  keywords: string;
  servings: number;
  totalTime: number;
  recipeIngredient: RecipeIngredient[];
  recipeInstructions: RecipeInstruction[];
}
