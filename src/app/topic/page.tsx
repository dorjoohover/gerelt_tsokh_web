"use client";
import { VStackContainer } from "@/components/container";
import { Line } from "@/components/line";

import { LineWidget, LineWidgetDetail } from "@/components/lines/article";
import { LinkTitle } from "@/components/link";
import TopicDetailWidget from "@/components/topic/detail";
import { topicData } from "@/data/topic.data";
import { TopicTypes } from "@/global/enum";

import { filterName } from "@/global/functions";
import { hotTopics, more, tokhiruulga, tokhiruulgaMn } from "@/global/string";
import { TopicModel } from "@/model/topic.model";
import { tokhiruulgaTags } from "@/values/tags";
import { api } from "@/values/values";

import { Box, Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import RichContent from "@/components/html";
import { MetaOg } from "@/components/meta/home";
const TopicPage = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<TopicTypes>(TopicTypes.ab);
  const [data, setData] = useState<TopicModel[]>([]);
  const [value, setValue] = useState("");
  const [dataCount, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<TopicModel | null>(null);
  const getData = async (t: TopicTypes) => {
    try {
      await axios
        .post(`${api}topic/type/${t?.toUpperCase()}`, {
          limit: 10,
          page: page,
        })
        .then((d) => {
          setCount(d.data.count);
          setData(d.data.data);
        });
    } catch (error) {}
  };
  const getDataById = async (id: string) => {
    try {
      await fetch(`${api}topic/${id}`, { cache: "no-store" })
        .then((d) => d.json())
        .then((d) => setSelected(d));
    } catch (error) {}
  };
  useEffect(() => {
    if (params.get("id")) {
      getDataById(params.get("id")!);
    }
  }, []);
  useEffect(() => {
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof TopicTypes;
      setType(name ?? TopicTypes.ab);
      setValue(filterName(name, tokhiruulgaTags[4].sub!));
    }
  }, []);
  useEffect(() => {
    getData(type);
  }, [page]);
  useEffect(() => {
    if (params.get("id") != undefined) {
      getDataById(params.get("id")!);
    }
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof TopicTypes;
      setType(name ?? TopicTypes.ab);
      setValue(filterName(name, tokhiruulgaTags[4].sub!));
      setPage(0);
      getData(name);
      setSelected(null);
    }
  }, [params]);
  const router = useRouter();
  return (
    <div>
      <MetaOg
        title={
          selected?.title ??
          filterName(params.get("name") ?? "", tokhiruulgaTags[4].sub!) ??
          "Халуун сэдвүүд"
        }
        description={selected?.text ?? "Халуун сэдвүүд"}
      />
      <VStackContainer>
        <HStack w={"full"} display={{ lg: "flex", base: "none" }}>
          <LinkTitle
            title={hotTopics}
            special={tokhiruulga}
            value={hotTopics}
            name={selected ? selected.title : ""}
            current={selected == null ? 2 : 3}
            detail={value}
          />
        </HStack>
        <Line
          child={
            selected != null ? (
              <TopicDetailWidget data={selected} />
            ) : (
              <VStack
                w={"full"}
                alignItems={"start"}
                gap={{ lg: 78, base: 10 }}
              >
                {data?.map((d, i) => {
                  return (
                    <VStack w={"full"} alignItems={"start"} key={i}>
                      <Heading
                        fontSize={{
                          md: "22px",
                          base: "16px",
                        }}
                        variant={"title"}
                        color={"text"}
                      >
                        {d.title}
                      </Heading>

                      <Box
                        mb={{ md: 0, base: 4 }}
                        noOfLines={{ md: 3, base: 4 }}
                        dangerouslySetInnerHTML={{
                          __html: d?.text?.replaceAll('"', "") ?? "",
                        }}
                      ></Box>

                      <Button
                        onClick={() => {
                          getDataById(d._id);
                          router.push(`/topic?id=${d._id}`);
                        }}
                        _hover={{ bg: "none" }}
                        bg={"none"}
                        p={0}
                      >
                        <Text textDecor={"underline"}>{more}</Text>
                      </Button>
                    </VStack>
                  );
                })}
              </VStack>
            )
          }
          filter={tokhiruulgaTags[4].sub!}
          limit={10}
          page={page}
          type={type}
          value={value}
          length={selected ? 1 : dataCount}
          changePage={(value) => setPage(value)}
          changeType={(value) => {}}
          changeSub={() => {}}
        />
      </VStackContainer>
    </div>
  );
};
export default TopicPage;
