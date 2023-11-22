"use client";
import { VStackContainer } from "@/components/container";
import { Line } from "@/components/line";

import { LineWidget, LineWidgetDetail } from "@/components/lines/article";
import { LinkTitle } from "@/components/link";
import PerformanceDetailWidget from "@/components/performance/detail";
import { performanceData } from "@/data/performance.data";
import { PerformanceTypes } from "@/global/enum";

import { filterName } from "@/global/functions";
import { more, performance, tokhiruulga, tokhiruulgaMn } from "@/global/string";
import { tokhiruulgaTags } from "@/values/tags";
import { PerformanceModel } from "@/model/performance.model";

import { Button, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PerformancePage = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<PerformanceTypes>(PerformanceTypes.ab);
  const [data, setData] = useState<PerformanceModel[]>([]);
  const [value, setValue] = useState("");
  const [dataCount, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<PerformanceModel | null>(null);
  const router = useRouter();
  const getData = async (t: PerformanceTypes) => {
    try {
      let filtered = performanceData.filter((d) => d.type == t);
      setCount(filtered.length);
      setData(filtered.filter((d, i) => i >= page * 10 && i < (page + 1) * 10));
    } catch (error) {}
  };

  const getDataById = (id: string) => {
    try {
      let filtered = performanceData.filter((d) => d._id == id);
      if (filtered.length > 0) {
        setSelected(filtered[0]);
      } else {
        setSelected(null);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof PerformanceTypes;
      setType(name ?? PerformanceTypes.ab);
      setValue(filterName(name, tokhiruulgaTags[3].sub!));
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
      let name: any = params.get("name") as keyof typeof PerformanceTypes;
      // router.
      setType(name ?? PerformanceTypes.ab);
      setValue(filterName(name, tokhiruulgaTags[3].sub!));
      setPage(0);
      getData(name);
      setSelected(null);
    }
  }, [params]);

  return (
    <VStackContainer>
      <HStack w={"full"} display={{ lg: "flex", base: "none" }}>
        <LinkTitle
          title={performance}
          special={tokhiruulga}
          value={performance}
          name={selected ? selected.title : ""}
          current={selected == null ? 2 : 3}
          detail={value}
        />
      </HStack>
      <Line
        child={
          selected != null ? (
            <PerformanceDetailWidget data={selected} />
          ) : (
            <VStack w={"full"} alignItems={"start"} gap={{ lg: 78, base: 10 }}>
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

                    <Text
                      mb={{ md: 0, base: 4 }}
                      noOfLines={{ md: 3, base: 4 }}
                    >
                      {d.text}
                    </Text>
                    <Button
                      onClick={() => {
                        getDataById(d._id);
                        router.push(`/performance?id=${d._id}`);
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
        filter={tokhiruulgaTags[3].sub!}
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
  );
};
export default PerformancePage;
