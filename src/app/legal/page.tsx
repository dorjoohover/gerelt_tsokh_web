"use client";
import { VStackContainer } from "@/components/container";
import { Line } from "@/components/line";

import { LineWidget, LineWidgetDetail } from "@/components/lines/article";
import { LinkTitle } from "@/components/link";

import { filterName } from "@/global/functions";
import {
  legalInfo,
  more,
  performance,
  tokhiruulga,
  tokhiruulgaMn,
} from "@/global/string";
import { tokhiruulgaTags } from "@/values/tags";

import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { legalData } from "@/data/legal.data";
import { LegalTypes } from "@/global/enum";
import { LegalModel } from "@/model/legal.model";
import LegalDetailWidget from "@/components/legal/detail";

const LegalPage = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<LegalTypes>(LegalTypes.law);
  const [data, setData] = useState<LegalModel[]>([]);
  const [value, setValue] = useState("");
  const [dataCount, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<LegalModel | null>(null);
  const getData = async (t: LegalTypes) => {
    try {
      let filtered = legalData.filter((d) => d.type == t);
      setCount(filtered.length);
      setData(filtered.filter((d, i) => i >= page * 10 && i < (page + 1) * 10));
    } catch (error) {}
  };
  const getDataById = (id: string) => {
    try {
      let filtered = legalData.filter((d) => d._id == id);
      if (filtered.length > 0) {
        setSelected(filtered[0]);
      } else {
        setSelected(null);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof LegalTypes;
      setType(name ?? LegalTypes.law);
      setValue(filterName(name, tokhiruulgaTags[5].sub!));
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
      let name: any = params.get("name") as keyof typeof LegalTypes;
      setType(name ?? LegalTypes.law);
      setValue(filterName(name, tokhiruulgaTags[5].sub!));
      setPage(0);
      getData(name);
      setSelected(null);
    }
  }, [params]);
  const router = useRouter();
  return (
    <VStackContainer>
      <HStack w={"full"} display={{ lg: "flex", base: "none" }}>
        <LinkTitle
          title={legalInfo}
          special={tokhiruulga}
          value={legalInfo}
          name={selected ? selected.title : ""}
          current={selected == null ? 2 : 3}
          detail={value}
        />
      </HStack>
      <Line
        child={
          selected != null ? (
            <LegalDetailWidget data={selected} />
          ) : (
            <VStack w={"full"} alignItems={"start"} gap={4}>
              {data?.map((d, i) => {
                return (
                  <VStack w={"full"} alignItems={"start"} key={i}>
                    <Button
                      onClick={() => {
                        getDataById(d._id);
                        router.push(`/legal?id=${d._id}`);
                      }}
                      _hover={{ bg: "none" }}
                      bg={"none"}
                      p={0}
                    >
                      <Text textDecor={"underline"} textAlign={'start'}> {d.title}</Text>
                    </Button>
                  </VStack>
                );
              })}
            </VStack>
          )
        }
        filter={tokhiruulgaTags[5].sub!}
        limit={dataCount}
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
export default LegalPage;
