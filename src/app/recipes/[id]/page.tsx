import { getRecipeDetail, getSearchResult } from "@/api";

import { TrendingRecipeTodayList } from "@/components/trending-today-list";
import { RecipeIngredient } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const dynamic = 'force-dynamic'
export default async function Page({
  params,
  searchParams,
}: Readonly<{
  params: { id: string };
  searchParams: { [key: string]: string };
}>) {
  const { trendingToday } = await getSearchResult(searchParams);
  const {
    name,
    image,
    author,
    description,
    servings,
    totalTime,
    recipeIngredient,
    recipeInstructions,
  } = await getRecipeDetail(params.id);

  const groupedIngredients = recipeIngredient?.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {} as { [name: string]: RecipeIngredient[] });

  const { raw_food = [], ...otherIngredients } = groupedIngredients;

  return (
    <main className="container">
      <article className="inline-block lg:pr-[36px] w-full lg:w-2/3">
        <header className="p-[16px] bg-white">
          <h1 className="text-[2.8rem] leading-[36px] text-neutral-main">
            {name}
          </h1>
          <div className="mt-[16px] flex gap-[15px]">
            <Image
              width={400}
              height={300}
              src={image}
              alt={name}
              className="aspect-[4/3]"
            />
            <div className="flex flex-col justify-between w-full">
              <figure className="flex items-center gap-[4px]">
                <Link className="flex-shrink-0" href={author.url}>
                  <Image
                    className="w-[45px] h-[45px] rounded-full"
                    width={45}
                    height={45}
                    src={author.image}
                    alt={author.name}
                  ></Image>
                </Link>
                <figcaption>
                  <Link
                    className="text-[16px] text-neutral-main w-[250px]"
                    href={author.url}
                  >
                    {author.name}
                  </Link>
                  <div className="flex gap-[10px] text-[12px] text-neutral-tertiary">
                    <span>{author.recipes} 食譜</span>
                    <span>{author.followers} 位粉絲</span>
                  </div>
                </figcaption>
              </figure>
              <div className="flex gap-[12px]">
                <button className="px-[15px] h-[40px] w-full border rounded-[4px] text-neutral-secondary bg-white hover:bg-brand-base">
                  讚
                </button>
                <button className="px-[15px] h-[40px] w-full border rounded-[4px] text-neutral-secondary bg-white hover:bg-brand-base">
                  追蹤
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[16px] text-[16px] text-neutral-main leading-[1.5]">
            {description}
          </div>
        </header>
        <section className="mt-[16px] bg-white ">
          <header className="py-[16px] flex divide-x divide-[#e2e0db] border-b border-b-[#e2e0db]">
            <div className="w-full text-center text-neutral-secondary">
              <span className="text-[1.4rem]">份量</span>
              <div className="mt-[4px]">
                <span className="text-[18px] text-neutral-main">
                  {servings}
                </span>
                <span>人份</span>
              </div>
            </div>
            <div className="w-full text-center text-neutral-secondary">
              <span className="mb-[4px] text-[1.4rem]">時間</span>
              <div className="mt-[4px]">
                <span className="text-[18px] text-neutral-main">
                  {totalTime}
                </span>
                <span>分鐘</span>
              </div>
            </div>
          </header>
          <div className="py-[10px] px-[16px]">
            <h2 className="pb-[10px] text-[16px] text-neutral-main font-bold border-b border-b-black">
              食材
            </h2>
            <ul className="p-[10px] grid grid-cols-2 gap-x-[30px] text-neutral-main">
              {raw_food?.map((ingredient) => (
                <li
                  key={ingredient.name}
                  className="py-[10px] flex justify-between"
                >
                  <span>{ingredient.name}</span>
                  <span>{ingredient.amount}</span>
                </li>
              ))}
            </ul>
            {Object.keys(otherIngredients).map((key) => (
              <div key={key} className="py-[10px]">
                <div className="p-[10px] text-[#3c4e3c] bg-[#d8f0d8]">
                  {key}
                </div>
                <ul className="p-[10px] grid grid-cols-2 gap-x-[30px] text-neutral-main border border-[#d8f0d8]">
                  {otherIngredients[key]?.map((ingredient) => (
                    <li
                      key={ingredient.name}
                      className="py-[10px] flex justify-between"
                    >
                      <span>{ingredient.name}</span>
                      <span>{ingredient.amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-[16px] bg-white">
          <ol className="py-[1rem] px-[16px] divide-y">
            {recipeInstructions.map((step, index) => (
              <li key={index} className="py-[16px]">
                <figure className="flex gap-[16px]">
                  <Image
                    className="w-[240px]"
                    src={step.image}
                    width={400}
                    height={300}
                    alt={step.image}
                  />
                  <figcaption>
                    <span className="mb-[8px] text-[3.2rem] text-neutral-secondary font-bold">
                      {index + 1}
                    </span>
                    <p className="text-[1.8rem] text-neutral-main leading-[1.5]">
                      {step.text}
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ol>
        </section>
        <section className="mt-[16px] p-[16px] flex justify-between items-start gap-[16px] w-full bg-white">
          <Link className="flex-shrink-0" href={author.url}>
            <Image
              className="w-[72px] h-[72px] rounded-full"
              width={45}
              height={45}
              src={author.image}
              alt={author.name}
            ></Image>
          </Link>
          <div className="flex-1">
            <span className="block mb-[12px] text-[2rem]">{author.name}</span>
            <div className="mb-[16px] flex gap-[10px] text-[12px] text-neutral-tertiary">
              <span>{author.recipes} 食譜</span>
              <span>{author.followers} 位粉絲</span>
            </div>
            <p>{author.bio}</p>
          </div>
          <button className="px-[16px] h-[32px] rounded-[4px] bg-blue-400 text-white">
            追蹤
          </button>
        </section>
      </article>
      <aside className="mt-[16px] lg:mt-0 inline-block align-top w-full lg:w-1/3">
        <TrendingRecipeTodayList
          trendingRecipeList={trendingToday.content}
          className="mt-[16px] lg:mt-0"
        ></TrendingRecipeTodayList>
      </aside>
    </main>
  );
}
