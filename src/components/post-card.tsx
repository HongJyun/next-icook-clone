import { cn } from "@/lib/utils";
import { Post } from "@/types";
import Image from "next/image";

export const PostCard = ({
  post,
  isGridType = false,
  className,
}: {
  post: Post;
  isGridType?: boolean;
  className?: string;
}) => {
  const { title, subtitle, image } = post;

  const styles = {
    image: cn(
      "image",
      "w-[72px]",
      "h-[72px]",
      "object-cover",
      isGridType && cn("absolute", "z-[-2]", "w-full", "h-full")
    ),
    figure: cn(
      "figure",
      "flex w-full h-full",
      subtitle ? "items-start" : "justify-between"
    ),
    figcaption: cn(
      "figcaption",
      "flex flex-col w-full pl-2",
      !subtitle?.length && "justify-center",
      isGridType && cn("absolute", "bottom-0", "p-[12px]")
    ),
    subtitle: cn(
      "subtitle",
      "mb-[8px]",
      "text-neutral-secondary",
      "md:text-[1.6rem]",
      isGridType &&
        cn(
          "before:content-['']",
          "before:block",
          "before:absolute",
          "before:transform",
          "before:-translate-x-[12px]",
          "before:translate-y-[2px]",
          "before:w-[6px]",
          "before:h-[16px]",
          "before:bg-[#f04646]",
          "text-white",
          "after:content-['']",
          "after:absolute",
          "after:z-[-1]",
          "after:left-0",
          "after:bottom-0",
          "after:w-full",
          "after:h-[200%]",
          "after:bg-gradient-to-b",
          "after:from-transparent",
          "after:to-[rgba(0,0,0,0.6)]"
        )
    ),
    title: cn(
      "title",
      "text-neutral-main",
      "text-[1.2rem]",
      "md:text-[1.8rem]",
      "leading-[1.4]",
      "whitespace-break-spaces",
      "font-bold",
      isGridType && cn("text-white", "md:text-[2rem]")
    ),
  };

  return (
    <a href={post.link} className={cn("relative overflow-hidden", className)}>
      <figure className={styles.figure}>
        <Image
          width={72}
          height={72}
          alt={title}
          src={image}
          className={styles.image}
          sizes="(max-width: 767px) 144px, (min-width: 768px) 900px"
        />
        <figcaption className={styles.figcaption}>
          {!!subtitle?.length && (
            <span className={styles.subtitle} aria-describedby={title}>
              {subtitle}
            </span>
          )}
          <h2 id={title} className={styles.title}>
            {title}
          </h2>
        </figcaption>
      </figure>
    </a>
  );
};
