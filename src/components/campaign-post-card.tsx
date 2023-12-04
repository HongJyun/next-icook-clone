import { cn } from "@/lib/utils";
import { CampaignPost } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const CampaignPostCard = ({
  className = "",
  campaign,
}: {
  className?: string;
  campaign: CampaignPost;
}) => {
  return (
    <Link
      className={cn(
        "flex flex-col border rounded-[4px] lg:border-0",
        className
      )}
      key={campaign.id}
      href={campaign.link}
    >
      <Image
        src={campaign.image}
        alt={campaign.title}
        width={300}
        height={220}
      ></Image>
      <h3>{campaign.title}</h3>
    </Link>
  );
};
