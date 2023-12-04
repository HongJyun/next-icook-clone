import { cn } from "@/lib/utils";
import { RecipePostListItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const RecipeListItem = ({
  className = "",
  recipe,
}: Readonly<{
  className?: string;
  recipe: RecipePostListItem;
}>) => {
  return (
    <Link
      className={cn("flex px-[12px] py-[16px] hover:bg-brand-light", className)}
      href={recipe.link}
    >
      <picture className="relative mr-[20px] flex-shrink-0 w-[200px] aspect-[4/3]">
        <Image
          width={200}
          height={130}
          className="w-full h-full object-cover"
          src={recipe.image}
          alt={recipe.name}
        ></Image>
      </picture>
      <div className="flex flex-col text-neutral-main">
        <h2 className="mb-[2px] text-[2rem] leading-[1.4] whitespace-nowrap text-ellipsis overflow-hidden">
          {recipe.name}
        </h2>
        <span className="mb-[8px] text-[1.4rem] text-neutral-description whitespace-nowrap text-ellipsis overflow-hidden">
          {recipe.author}
        </span>
        <blockquote className="mb-[8px] line-clamp-2 text-[14px] text-neutral-description text-ellipsis">
          {recipe.description}
        </blockquote>
        <p className="mb-[8px] text-[1.4rem] text-neutral-description whitespace-nowrap text-ellipsis overflow-hidden">
          {recipe.ingredients}
        </p>
        <ul className="flex gap-[12px] text-neutral-description">
          <li>♡ {recipe.likes} 讚</li>
        </ul>
      </div>
    </Link>
  );
};
