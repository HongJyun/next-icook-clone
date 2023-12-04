import { getSearchResult } from "@/api";
import { CategoryListTitle } from "@/components/category-list-title";
import { RecipeListItem } from "@/components/recipe-list-item";
import { RecipeListItemMini } from "@/components/recipe-list-item-mini";
import { Chip } from "@/components/ui/Chip";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page({
  searchParams,
}: Readonly<{
  params: { slug: string };
  searchParams: { [key: string]: string };
}>) {
  if (!Object.keys(searchParams).length) {
    redirect("/");
  }

  const { recipes, tag, trendingToday } = await getSearchResult(searchParams);

  return (
    <main className="container">
      <section className="inline-block lg:pr-[36px] w-full lg:w-2/3">
        <header className="p-[20px] bg-brand-light">
          <h1 className="text-neutral-main">
            <span className="mr-[8px] text-[2.8rem] font-bold">
              {searchParams.q}
            </span>
            <span className="text-[2rem]">{recipes?.total} 道食譜</span>
          </h1>
          <div className="mt-[8px] flex flex-wrap gap-x-[6px] gap-y-[8px]">
            {tag.content.map((item) => (
              <Chip
                key={item.keyword}
                component={Link}
                href={item.link}
                className="bg-brand-base"
              >
                {item.keyword}
              </Chip>
            ))}
          </div>
        </header>
        <section className="bg-white divide-y divide-brand-light">
          {recipes?.content.map((recipe) => (
            <RecipeListItem key={recipe.id} recipe={recipe}></RecipeListItem>
          ))}
        </section>
      </section>
      <aside className="mt-[16px] lg:mt-0 inline-block align-top w-full lg:w-1/3">
        <div className="py-[16px] bg-white divide-y divide-brand-light">
          <h3 className="mb-[16px] px-[12px] [&_h2]:text-[1.6rem]">
            「{searchParams.q}」小知識
          </h3>
          {trendingToday.content.map((recipes) => (
            <RecipeListItemMini
              key={recipes.id}
              recipe={recipes}
            ></RecipeListItemMini>
          ))}
        </div>
        <div className="mt-[16px]  py-[16px] bg-white divide-y divide-brand-light">
          <CategoryListTitle
            className="mb-[16px] px-[12px] [&_h2]:text-[1.6rem]"
            title="今日話題"
            href="/recipes/"
          ></CategoryListTitle>
          {trendingToday.content.map((recipes) => (
            <RecipeListItemMini
              key={recipes.id}
              recipe={recipes}
            ></RecipeListItemMini>
          ))}
        </div>
      </aside>
    </main>
  );
}
