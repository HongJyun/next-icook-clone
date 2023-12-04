import { cn } from "@/lib/utils";
import { RecipePost } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const RecipeListItemMini = ({
  className = "",
  recipe,
}: Readonly<{
  className?: string;
  recipe: RecipePost;
}>) => {
  return (
    <Link
      className={cn("flex px-[12px] py-[16px] hover:bg-brand-light", className)}
      href={recipe.link}
    >
      <picture className="relative mr-[20px] flex-shrink-0 w-[96px] aspect-[4/3]">
        <Image
          width={96}
          height={72}
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
      </div>
    </Link>
  );
};
