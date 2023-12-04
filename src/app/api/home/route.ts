import { CampaignPost, Post, RecipePost, Story, Tag } from "@/types";
import data from "./data.json";

export interface Hero {
  type: string;
  major: Post;
  minor: Post[];
}
export interface HomeData {
  tag: Tag;
  hero: Hero;
  stories: Story<RecipePost | Post>[];
  campaign: Story<CampaignPost>;
}

export function GET() {
  return Response.json({
    tag: data.tag,
    hero: data.hero,
    stories: data.stories,
    campaign: data.campaign,
  } as HomeData);
}
