import { MetaOg } from "@/components/meta/home";
import { ArticleTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { articleTags } from "@/values/tags";
import { ArticlePage } from ".";

const Page = () => {
  return (
    <div>
      {" "}
      <MetaOg title={"Нийтлэл"} description={"Нийтлэл"} url="/article" />
      <ArticlePage />
    </div>
  );
};
export default Page;
