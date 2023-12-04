"use client";
import { VStackContainer } from "@/components/container";
import { TextLine, VoiceLine } from "@/components/lines/info";
import { Line } from "@/components/line";
import { LinkTitle } from "@/components/link";
import { additionInfoData } from "@/data/addition_info.data";
import { InfoTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { additionInfo } from "@/global/string";
import { additionInfoTags } from "@/values/tags";
import { Info } from "@/model/info.model";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  SlideFade,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { api } from "@/values/values";

export default function InfoPage() {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<InfoTypes>(InfoTypes.text);
  const [data, setData] = useState<Info[]>([]);
  const [value, setValue] = useState("");
  const [dataCount, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<Info | null>(null);
  const getData = async (t: InfoTypes) => {
    try {
      let res = await axios.post(`${api}info/type/${t}`, {
        page: page,
        limit: 5,
      });

      setData(res.data.data);
      setCount(res.data.count);
    } catch (error) {}
  };
  useEffect(() => {
    if (params.get("name") != "") {
      let name: any = params.get("name") as keyof typeof InfoTypes;
      setType(name ?? InfoTypes.text);
      setValue(filterName(name, additionInfoTags));
    } else {
      getData(params.get("name") as InfoTypes);
    }
  }, []);
  useEffect(() => {
    getData(type);
    setValue(filterName(type, additionInfoTags));
  }, [type, page]);
  const audioRef = useRef();
  const [audio, setAudio] = useState<string | undefined>();
  const [title, setTitle] = useState<string | undefined>();
  const play = (t: string, value: string) => {
    setAudio(value);
    setTitle(t);
  };
  return (
    <VStackContainer>
      <HStack w={"full"} display={{ lg: "flex", base: "none" }}>
        <LinkTitle title={additionInfo} value={value} current={1} />
      </HStack>

      <Line
        child={
          data?.map((d, i) => {
            if (type.toLowerCase() == InfoTypes.voice)
              return <VoiceLine data={d} key={i} play={play} />;
            if (type.toLowerCase() == InfoTypes.text)
              return <TextLine data={d} key={i} />;
          }) ?? <></>
        }
        filter={additionInfoTags}
        limit={5}
        page={page}
        type={type}
        value={value}
        length={dataCount}
        changePage={(value) => setPage(value)}
        changeType={(value) => {
          setType(value);
          setPage(0);
          setAudio(undefined);
          setTitle(undefined);
        }}
        changeSub={() => {}}
      />
      {audio != undefined && (
        <VStack
          w={"full"}
          pos={"fixed"}
          bottom={0}
          left={0}
          right={0}
          bg={"white"}
          py={6}
        >
          <Heading variant={"miniTitle"} color={"text"} mb={4}>
            {title}
          </Heading>
          <audio controls autoPlay src={`${api}${audio}`} className="audio" />
        </VStack>
      )}
    </VStackContainer>
  );
}
