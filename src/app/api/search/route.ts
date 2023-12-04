import { Question, RecipePost, RecipePostListItem, Story, Tag } from "@/types";
import data from "./data.json";

export interface SearchResultData {
  tag: Tag;
  recipes: {
    total: number;
    page: number;
    pageSize: number;
    content: RecipePostListItem[];
  };
  faq: {
    name: string;
    description: string;
    questions: Question[];
  };
  trendingToday: Story<RecipePost>;
}

export function GET() {
  return Response.json(data as SearchResultData);
}
