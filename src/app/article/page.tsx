"use client";
import { VStackContainer } from "@/components/container";
import { Line } from "@/components/line";

import { LineWidget, LineWidgetDetail } from "@/components/lines/article";
import { LinkTitle } from "@/components/link";
import { ArticleTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { article } from "@/global/string";
import { articleTags } from "@/values/tags";
import { Article } from "@/model/article.model";
import { HStack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "@/values/values";

const ArticlePage = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<ArticleTypes>(ArticleTypes.article);
  const [data, setData] = useState<Article[]>([]);
  const [value, setValue] = useState("");
  const [dataCount, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<Article | null>(null);
  const getData = async (t: ArticleTypes) => {
    try {
      let res = await axios.post(`${api}article/type/${t}`, {
        limit: 10,
        page: page,
      });
      setCount(res.data.count);
      setData(res.data.data);
    } catch (error) {}
  };
  const getDataById = async (id: string) => {
    try {
      await fetch(`${api}article/${id}`, { cache: "no-store" })
        .then((d) => d.json())
        .then((d) => setSelected(d));
    } catch (error) {}
  };

  useEffect(() => {
    getData(type);
  }, [page]);

  useEffect(() => {
    getData(type);
    setValue(filterName(type, articleTags));
  }, [type, page]);
  useEffect(() => {
    if (params.get("id")) {
      getDataById(params.get("id")!);
    } else {
      getData(params.get("name") as ArticleTypes);
    }

    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof ArticleTypes;
      setType(name ?? ArticleTypes.article);
      setValue(filterName(name, articleTags));
    }
  }, [params]);

  return (
    <VStackContainer>
      <HStack w={"full"} display={{ lg: "flex", base: "none" }}>
        <LinkTitle
          title={article}
          value={value}
          detail={selected ? selected.title : ""}
          current={selected == null ? 1 : 2}
        />
      </HStack>
      <Line
        child={
          selected != null ? (
            <LineWidgetDetail
              text={selected.text}
              title={selected.title}
              img={selected.img ?? ''}
              id={selected._id}
              date={selected.postDate ?? selected.createdAt}
              type="article"
            />
          ) : (
            data?.map((d, i) => {
              switch (d.type) {
                case ArticleTypes.info:
                  return (
                    <LineWidget
                      img={d.img ?? ''}
                      id={d._id}
                      text={d.text}
                      title={d.title}
                      key={i}
                      type="article"
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
                      type="article"
                    />
                  );
              }
            }) ?? <></>
          )
        }
        filter={articleTags}
        limit={dataCount}
        page={page}
        type={type}
        value={value}
        length={selected ? 1 : dataCount}
        changePage={(value) => setPage(value)}
        changeType={(value) => {
          setType(value);
          setPage(0);
          setSelected(null);
        }}
        changeSub={() => {}}
      />
    </VStackContainer>
  );
};
export default ArticlePage;
