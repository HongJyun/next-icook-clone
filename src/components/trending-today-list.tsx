import { RecipePost } from "@/types";
import { CategoryListTitle } from "./category-list-title";
import { RecipeListItemMini } from "./recipe-list-item-mini";
import { cn } from "@/lib/utils";

export const TrendingRecipeTodayList = ({
  trendingRecipeList,
  className,
}: {
  trendingRecipeList: RecipePost[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "py-[16px] bg-white divide-y divide-brand-light",
        className
      )}
    >
      <CategoryListTitle
        className="mb-[16px] px-[12px] [&_h2]:text-[1.6rem]"
        title="今日話題"
        href="/recipes/"
      ></CategoryListTitle>
      {trendingRecipeList.map((recipes) => (
        <RecipeListItemMini
          key={recipes.id}
          recipe={recipes}
        ></RecipeListItemMini>
      ))}
    </div>
  );
};
