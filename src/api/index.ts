import { GET, HomeData } from "@/app/api/home/route";
import { SearchResultData } from "@/app/api/search/route";
import { RecipeDetail } from "@/types";

export const baseUrl = process.env.API_BASE_URL;
export const getHomeData = async (): Promise<HomeData> => {
  const res = GET();
  return res.json();
};

export const getSearchResult = async (searchParams: {
  [key: string]: string;
}): Promise<SearchResultData> => {
  const res = await fetch(
    `${baseUrl}/api/search?${new URLSearchParams(searchParams)}`
  );
  return res.json();
};

export const getRecipeDetail = async (
  recipeId: string
): Promise<RecipeDetail> => {
  const res = await fetch(`${baseUrl}/api/recipe?recipeId=${recipeId}`);
  return res.json();
};
