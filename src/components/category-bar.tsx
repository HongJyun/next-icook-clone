"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { Chip } from "./ui/Chip";

export const CategoryBar = () => {
  useWindowSize();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const y = ref.current?.getBoundingClientRect().top || 0;
  const height = ref.current?.getBoundingClientRect().height || 0;

  const categories = [
    { id: 734, href: "/search?q=English", name: "English" },
    { id: 735, href: "/search?q=日本語", name: "日本語" },
    { id: 241, href: "/search?q=火鍋", name: "火鍋" },
    { id: 8, href: "/search?q=湯", name: "湯" },
    { id: 107, href: "/search?q=咖哩", name: "咖哩" },
    { id: 641, href: "/search?q=櫛瓜", name: "櫛瓜" },
    { id: 650, href: "/search?q=杏鮑菇", name: "杏鮑菇" },
    { id: 147, href: "/search?q=早餐", name: "早餐" },
    { id: 612, href: "/search?q=健身", name: "健身" },
    { id: 28, href: "/search?q=素食", name: "素食/蔬食" },
    { id: 57, href: "/search?q=烘焙點心/甜點", name: "烘焙點心/甜點" },
    { id: 462, href: "/search?q=親子", name: "親子" },
  ];

  useEffect(() => {
    document
      .querySelector("body")
      ?.classList.toggle("overflow-hidden", isDropdownOpen);
  }, [isDropdownOpen]);

  return (
    <header ref={ref} className="flex border-b border-b-[#e2e0db] bg-white">
      <div className="relative container flex items-center gap-[16px]">
        <ul className="px-[16px] flex items-center gap-[32px] h-[40px] whitespace-nowrap overflow-x-auto">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                className="text-[1.6rem] font-bold text-neutral-main hover:text-neutral-description transition-colors duration-200"
                href={category.href}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="relative pl-[16px] w-[40px] h-[40px] before:content-[''] before:block before:absolute before:left-0 before:w-[1px] before:h-[16px] before:bg-[#e5e5e5]"
        >
          <Image
            src="/assets/icons/down-arrow.svg"
            alt="down-arrow"
            width={12}
            height={12}
          ></Image>
        </button>
        <div
          className={cn(
            isDropdownOpen ? "block" : "hidden",
            "absolute",
            "top-full",
            "left-1/2",
            "w-full",
            "-translate-x-1/2",
            "bg-white",
            "z-[2]"
          )}
        >
          <div className="container p-[28px]">
            <ul className="px-[16px] flex flex-wrap items-center gap-x-[16px] gap-y-[12px]">
              {categories.map((category) => (
                <li key={category.id}>
                  <Chip
                    component={Link}
                    className="px-[16px] flex items-center border rounded-[16px] min-h-[32px] text-neutral-main hover:bg-[rgba(0,0,0,.04)]"
                    href={category.href}
                  >
                    {category.name}
                  </Chip>
                </li>
              ))}
            </ul>
            <div className="mt-[20px] flex justify-center">
              <Link
                className="flex text-neutral-main hover:underline hover:text-neutral-secondary"
                href="/categories"
              >
                全部分類
                <Image
                  className="transform -rotate-90"
                  src="/assets/icons/down-arrow.svg"
                  alt="down-arrow"
                  width={12}
                  height={12}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsDropdownOpen(false)}
          className={cn(
            isDropdownOpen ? "block" : "hidden",
            "overlay fixed inset-0 z-[1] bg-black bg-opacity-70"
          )}
          style={{ top: y + height }}
        ></div>
      </div>
    </header>
  );
};
