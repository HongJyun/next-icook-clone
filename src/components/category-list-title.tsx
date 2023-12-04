import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const CategoryListTitle = ({
  className = "",
  title,
  href,
}: {
  className?: string;
  title: string;
  href: string;
}) => {
  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      <h2 className="text-[1.8rem] md:text-[2.2rem] text-neutral-main">
        {title}
      </h2>
      <Link
        className="flex text-neutral-main hover:underline hover:text-neutral-secondary"
        href={href}
      >
        更多
        <Image
          className="transform -rotate-90"
          src="/assets/icons/down-arrow.svg"
          alt="down-arrow"
          width={12}
          height={12}
        ></Image>
      </Link>
    </div>
  );
};
