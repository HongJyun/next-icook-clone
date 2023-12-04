import { CategoryListTitle } from "@/components/category-list-title";
import HeroSection from "./hero-section";
import { RecipePostCard } from "@/components/recipe-post-card";
import { Post, RecipePost } from "@/types";
import { PostCard } from "@/components/post-card";
import { CampaignPostCard } from "@/components/campaign-post-card";
import { getHomeData } from "@/api";

export default async function Home({}) {
  const data = await getHomeData();
  const { hero, stories, campaign } = data;

  return (
    <main className="container">
      <HeroSection hero={hero}></HeroSection>
      <div className="inline-block lg:pr-[36px] w-full lg:w-3/4">
        {stories.map((story) => (
          <section
            key={story.title}
            className="section-divider py-[16px] lg:mb-[40px]"
          >
            <CategoryListTitle
              className="mb-[16px]"
              title={story.title}
              href={story.link}
            ></CategoryListTitle>
            {story.type === "list_story" ? (
              <div className="grid gap-[24px]">
                {(story.content as Post[]).map((post) => (
                  <PostCard
                    className="[&_.image]:lg:w-[80px] [&_.image]:lg:h-[80px] [&_.image]:mr-[12px] [&_.figcaption]:pl-0"
                    key={post.id}
                    post={post}
                  ></PostCard>
                ))}
              </div>
            ) : (
              <div className="flex gap-[12px] overflow-x-auto">
                {(story.content as RecipePost[]).map((recipe) => (
                  <RecipePostCard
                    key={recipe.id}
                    recipe={recipe}
                    className="w-1/4"
                  ></RecipePostCard>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
      <aside className="section-divider py-[16px] inline-block align-top w-full lg:w-1/4 ">
        {campaign && (
          <div className="lg:border rounded-[4px] lg:p-[16px]">
            <CategoryListTitle
              className="mb-[16px]"
              title={campaign.title}
              href={campaign.link}
            ></CategoryListTitle>
            <div className="flex gap-[12px]">
              {campaign.content.map((activity) => (
                <CampaignPostCard
                  key={activity.id}
                  campaign={activity}
                ></CampaignPostCard>
              ))}
            </div>
          </div>
        )}
      </aside>
    </main>
  );
}
