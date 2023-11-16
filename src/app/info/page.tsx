"use client";
import { VStackContainer } from "@/components/container";
import { Line } from "@/components/line";
import { LinkTitle } from "@/components/link";
import { additionInfoData } from "@/global/data";
import { InfoTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { additionInfo } from "@/global/string";
import { additionInfoTags } from "@/global/values";
import { Info } from "@/model/info.model";
import { HStack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function InfoPage() {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<InfoTypes>(InfoTypes.text);
  const [data, setData] = useState<Info[]>([]);
  const [value, setValue] = useState('')

  const getData = async () => {
    try {
      let filtered = additionInfoData.filter((d) => d.type == type);
      setData(
        filtered.filter((d, i) => i >= page * 5 && i < (page + 1) * 5)
      );
    } catch (error) {}
  };
  useEffect(() => {
    if (params.get("name") != "") {
        
      let name: any = params.get("name") as keyof typeof InfoTypes;
      setType(name ?? InfoTypes.text);
      setValue(filterName(name, additionInfoTags))
    }
  }, []);
  useEffect(() => {
    getData();
    setValue(filterName(type, additionInfoTags))
  }, [type, page]);

  return (
    <VStackContainer>
      <HStack w={"full"} display={{lg:'flex', base: 'none'}}>
        <LinkTitle
          title={additionInfo}
          value={value}
        />
      </HStack>
      <Line
        data={data}
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
}
