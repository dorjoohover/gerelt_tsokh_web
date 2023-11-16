"use client";
import { VStackContainer } from "@/components/container";
import { Line } from "@/components/line";
import { LineWidget } from "@/components/lines/article";
import { LinkTitle } from "@/components/link";
import { articleData } from "@/global/data";
import { ArticleTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { article } from "@/global/string";
import { articleTags } from "@/global/values";
import { Article } from "@/model/article.model";
import { HStack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ArticlePage = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<ArticleTypes>(ArticleTypes.article);
  const [data, setData] = useState<Article[]>([]);
  const [value, setValue] = useState("");

  const getData = async () => {
    try {
      let filtered = articleData.filter((d) => d.type == type);
      setData(filtered.filter((d, i) => i >= page * 10 && i < (page + 1) * 10));
    } catch (error) {}
  };
  useEffect(() => {
    if (params.get("name") != "") {
      let name: any = params.get("name") as keyof typeof ArticleTypes;
      setType(name ?? ArticleTypes.article);
      setValue(filterName(name, articleTags));
    }
  }, []);
  useEffect(() => {
    getData();
    setValue(filterName(type, articleTags));
  }, [type, page]);

  return (
    <VStackContainer>
      <HStack w={"full"} display={{ lg: "flex", base: "none" }}>
        <LinkTitle title={article} value={value} />
      </HStack>
      <Line
        child={
          data?.map((d, i) => {
            switch (d.type) {
              case ArticleTypes.info:
                return (
                  <LineWidget
                    img={d.img!}
                    id={d._id}
                    text={d.text}
                    title={d.title}
                    key={i}
                  />
                );
              default:
                return (
                  <LineWidget
                    img={d.img!}
                    id={d._id}
                    text={d.text}
                    title={d.title}
                    key={i}
                  />
                );
            }
          }) ?? <></>
        }
        filter={articleTags}
        limit={5}
        page={page}
        type={type}
        value={value}
        length={10}
        changePage={(value) => setPage(value)}
        changeType={(value) => {
          setType(value);
          setPage(0);
        }}
      />
    </VStackContainer>
  );
};
export default ArticlePage;
