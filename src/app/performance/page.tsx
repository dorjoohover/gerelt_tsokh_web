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
import { tokhiruulgaTags } from "@/global/values";
import { PerformanceModel } from "@/model/performance.model";

import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PerformancePage = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<PerformanceTypes>(PerformanceTypes.ab);
  const [data, setData] = useState<PerformanceModel[]>([]);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<PerformanceModel | null>(null);
  const getData = async () => {
    try {
      let filtered = performanceData.filter((d) => d.type == type);
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
    getData();
    setValue(filterName(type, tokhiruulgaTags[3].sub!));
  }, [type, page]);
  useEffect(() => {
    if (params.get("id") != undefined) {
      getDataById(params.get("id")!);
    }
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof PerformanceTypes;
      setType(name ?? PerformanceTypes.ab);
      setValue(filterName(name, tokhiruulgaTags[3].sub!));
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
                    <Text variant={"title"} color={"text"}>
                      {d.title}
                    </Text>

                    <Text
                      mb={{ md: 0, base: 4 }}
                      noOfLines={{ md: 3, base: 4 }}
                    >
                      {d.text}
                    </Text>
                    <Button
                      onClick={() => getDataById(d._id)}
                      _hover={{ bg: "none" }}
                      bg={'none'}
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
        limit={5}
        page={page}
        type={type}
        value={value}
        length={selected ? 1 : 10}
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
export default PerformancePage;
