"use client";
import { VStackContainer } from "@/components/container";
import { TextLine, VideoLine, VoiceLine } from "@/components/lines/info";
import { Line } from "@/components/line";
import { LinkTitle } from "@/components/link";
import { additionInfoData } from "@/data/addition_info.data";
import { InfoTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { additionInfo } from "@/global/string";
import { additionInfoTags } from "@/values/tags";
import { Info } from "@/model/info.model";
import { Grid, GridItem, HStack, SlideFade } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function InfoPage() {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<InfoTypes>(InfoTypes.text);
  const [data, setData] = useState<Info[]>([]);
  const [value, setValue] = useState("");

  const getData = async () => {
    try {
      let filtered = additionInfoData.filter((d) => d.type == type);
      setData(filtered.filter((d, i) => i >= page * 5 && i < (page + 1) * 5));
    } catch (error) {}
  };
  useEffect(() => {
    if (params.get("name") != "") {
      let name: any = params.get("name") as keyof typeof InfoTypes;
      setType(name ?? InfoTypes.text);
      setValue(filterName(name, additionInfoTags));
    }
  }, []);
  useEffect(() => {
    getData();
    setValue(filterName(type, additionInfoTags));
  }, [type, page]);

  return (
    <VStackContainer>
      <HStack w={"full"} display={{ lg: "flex", base: "none" }}>
        <LinkTitle title={additionInfo} value={value} current={1} />
      </HStack>
      <Line
        child={
          data[0]?.type == InfoTypes.video ? (
            <Grid
              w={"full"}
              gridTemplateColumns={{
                md: "repeat(2, 1fr)",
              }}
              gap={{ md: 10, base: 6 }}
            >
              {data?.map((d, i) => {
                return (
                  <GridItem key={i}>
                    <SlideFade
                      in={true}
                      offsetX={"50px"}
                      transition={{ enter: { delay: i * 0.3, duration: 0.3 } }}
                    >
                      <VideoLine data={d} key={i} />
                    </SlideFade>
                  </GridItem>
                );
              })}
            </Grid>
          ) : (
            data?.map((d, i) => {
              switch (d.type) {
                case InfoTypes.text:
                  return (
                    <SlideFade
                      in={true}
                      offsetX={"50px"}
                      transition={{ enter: { delay: i * 0.3, duration: 0.3 } }}
                    >
                      <TextLine data={d} key={i} />
                    </SlideFade>
                  );
                case InfoTypes.voice:
                  return (
                    <SlideFade
                      in={true}
                      offsetX={"50px"}
                      transition={{ enter: { delay: i * 0.3, duration: 0.3 } }}
                    >
                      <VoiceLine data={d} key={i} />
                    </SlideFade>
                  );

                case InfoTypes.voice:
                  return (
                    <SlideFade
                      in={true}
                      offsetX={"50px"}
                      transition={{ enter: { delay: i * 0.3, duration: 0.3 } }}
                    >
                      <VoiceLine data={d} key={i} />
                    </SlideFade>
                  );

                default:
                  return (
                    <SlideFade
                      in={true}
                      offsetX={"50px"}
                      transition={{ enter: { delay: i * 0.3, duration: 0.3 } }}
                    >
                      <TextLine data={d} key={i} />
                    </SlideFade>
                  );
              }
            }) ?? <></>
          )
        }
        filter={additionInfoTags}
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
        changeSub={() => {}}
      />
    </VStackContainer>
  );
}
