import type { Metadata } from "next";
import "@/style/globals.css";
import { NavBar } from "@/components/navbar";
import { CategoryBar } from "@/components/category-bar";
import { SearchBar } from "@/components/search-bar";
import { getHomeData } from "@/api";
import { FooterArea } from "@/components/footer-area";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getHomeData();
  const { tag } = data;

  return (
    <html lang="zh-TW">
      <body className="md:bg-brand-base">
        <NavBar></NavBar>
        <CategoryBar></CategoryBar>
        <SearchBar keywords={tag.content}></SearchBar>
        {children}
        <FooterArea></FooterArea>
      </body>
    </html>
  );
}