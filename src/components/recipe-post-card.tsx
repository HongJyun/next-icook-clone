import { cn } from "@/lib/utils";
import { RecipePost } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const RecipePostCard = ({
  className = "",
  recipe,
}: {
  className?: string;
  recipe: RecipePost;
}) => {
  return (
    <Link className={cn("flex flex-col", className)} href={recipe.link}>
      <picture className="mb-[12px] h-[130px]">
        <Image
          width={180}
          height={130}
          className="mb-[12px] w-full h-full object-cover"
          src={recipe.image}
          alt={recipe.name}
        ></Image>
      </picture>
      <h3 className="text-[1.8rem] leading-[1.4] whitespace-nowrap text-ellipsis overflow-hidden">
        {recipe.name}
      </h3>
      <span className="text-[1.4rem] text-neutral-secondary whitespace-nowrap text-ellipsis overflow-hidden">
        {recipe.author}
      </span>
    </Link>
  );
};
