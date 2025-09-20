import { MetaOg } from "@/components/meta/home";
import { ArticleTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { articleTags } from "@/values/tags";
import { ArticlePage } from ".";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Хийсэн ажлууд",
  description: "Манай хийсэн ажлуудыг үзэх",
  openGraph: {
    title: "Хийсэн ажлууд",
    description: "Манай хийсэн ажлуудыг үзэх",
    url: "https://tokhiruulga.mn/work?name=advice",
    siteName: "Tokhiruulga.mn",
    images: [
      {
        url: "http://tokhiruulga.mn/assets/bg.png",
        width: 1200,
        height: 630,
        alt: "Tokhiruulga.mn - Хийсэн ажлууд",
      },
    ],
    locale: "mn_MN",
    type: "website",
  },
};
const Page = () => {
  return (
    <div>
      {" "}
      {/* <MetaOg title={"Нийтлэл"} description={"Нийтлэл"} url="/article" /> */}
      <ArticlePage />
    </div>
  );
};
export default Page;
