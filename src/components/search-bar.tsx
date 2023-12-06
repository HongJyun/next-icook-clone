"use client";
import { KeywordContent } from "@/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchBar = ({
  keywords = [],
}: {
  keywords: KeywordContent[];
}) => {
  const router = useRouter();

  const [form, setForm] = useState({
    searchType: "recipes",
    q: "",
    ingredients: "",
  });

  const canSubmit =
    form.searchType === "recipes"
      ? form.q.length || form.ingredients.length
      : form.q.length;
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ingredients = form.ingredients.trim().replaceAll(" ", ",");
    const queryString =
      form.searchType === "recipes"
        ? `?q=${form.q}&ingredients=${ingredients}`
        : `?author=${form.q}`;
    router.push(`/search${queryString}`);
  };
  return (
    <div className="container my-[16px]">
      <div className="flex justify-between w-full">
        <form
          onSubmit={onSubmit}
          className="flex flex-1 text-neutral-main border border-[#e2e0db] divide-x-[1px] divide-[#e2e0db]"
        >
          <div className="relative w-[100px] flex-shrink-0 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:right-[15px] after:border-t-[8px] after:border-x-[6px] after:rounded-[1px] after:border-t-[#706864] after:border-x-transparent after:pointer-events-none">
            <select
              id="search-type"
              name="search-type"
              className="px-[15px] py-[10px] w-full h-full  appearance-none cursor-pointer focus-visible:outline focus-visible:z-0 outline-brand-primary"
              value={form.searchType}
              onChange={(e) => {
                setForm({ searchType: e.target.value, q: "", ingredients: "" });
              }}
            >
              <option value="recipes">找食譜</option>
              <option value="user">找作者</option>
            </select>
          </div>
          <input
            className="px-[15px] py-[10px] flex-1 w-1/4 text-neutral-description focus-visible:outline focus-visible:z-0 outline-brand-primary"
            type="text"
            name="q"
            placeholder={
              form.searchType === "recipes" ? "搜尋食譜名" : "搜尋作者關鍵字"
            }
            value={form.q}
            onChange={(e) => {
              setForm({ ...form, q: e.target.value.trimStart() });
            }}
          />
          {form.searchType === "recipes" && (
            <input
              className="px-[15px] py-[10px] flex-1 w-1/4 text-neutral-description focus-visible:outline focus-visible:z-0 outline-brand-primary"
              type="text"
              name="ingredients"
              placeholder="搜尋食材，以空格分開"
              value={form.ingredients}
              onChange={(e) => {
                setForm({ ...form, ingredients: e.target.value.trimStart() });
              }}
            />
          )}
          <button
            className={cn(
              "flex items-center justify-center flex-shrink-0 w-[50px] h-[44px] bg-brand-primary",
              canSubmit ? "" : "opacity-50 cursor-not-allowed"
            )}
            disabled={!canSubmit}
            type="submit"
          >
            <Image
              src="/assets/icons/search.svg"
              width={20}
              height={20}
              alt="search"
            ></Image>
          </button>
        </form>
        <div className="hidden lg:flex items-stretch gap-[8px] ml-[32px]">
          <Link
            className="bg-white text-neutral-main border rounded-[4px] px-[16px] leading-[3] hover:text-neutral-light hover:border-[#a39b97]"
            href="#"
          >
            食譜收藏
          </Link>
          <Link
            className="bg-white text-neutral-main border rounded-[4px] px-[16px] leading-[3] hover:text-neutral-light hover:border-[#a39b97]"
            href="#"
          >
            寫食譜
          </Link>
        </div>
      </div>
      <div className="mt-[8px] flex whitespace-nowrap">
        熱搜：
        <ul className="flex gap-[8px] flex-wrap">
          {keywords.map((item) => (
            <li key={item.keyword}>
              <Link href={item.link}>{item.keyword}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
