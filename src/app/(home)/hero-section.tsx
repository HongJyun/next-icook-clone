"use client";
import { PostCard } from "@/components/post-card";
import { Hero } from "../api/home/route";
import { useWindowSize } from "react-use";
import { SCREEN_SIZES } from "@/theme";
import { useEffect } from "react";

export default function HeroSection({ hero }: Readonly<{ hero: Hero }>) {
  useEffect(() => {
    console.log("hero", document.querySelector("body"));
    document.querySelector("body")?.classList.add("!bg-white");
    return () => document.querySelector("body")?.classList.remove("!bg-white");
  }, []);
  const { width } = useWindowSize();
  return (
    <section
      id="hero"
      className="section-divider lg:mb-[40px] grid md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] gap-[12px] md:gap-[4px]"
    >
      <PostCard
        className="-mx-8 sm:mx-0 aspect-[1.3] md:aspect-auto"
        post={hero.major}
        isGridType={true}
      ></PostCard>
      <div className="grid gap-[4px] ">
        {hero.minor.map((post) => (
          <PostCard
            key={post.id}
            className="md:aspect-[2]"
            post={post}
            isGridType={width > SCREEN_SIZES.md}
          ></PostCard>
        ))}
      </div>
    </section>
  );
}
