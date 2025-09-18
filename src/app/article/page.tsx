import { MetaOg } from "@/components/meta/home";
import { ArticleTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { articleTags } from "@/values/tags";
import { ArticlePage } from ".";

const Page = () => {
  return (
    <div>
      {" "}
      <MetaOg
        title={
          filterName(
            window.location.href.includes("info")
              ? ArticleTypes.info
              : ArticleTypes.article ?? "",
            articleTags
          ) ?? "Нийтлэл"
        }
        description={"Нийтлэл"}
      />
      <ArticlePage />
    </div>
  );
};
export default Page;
