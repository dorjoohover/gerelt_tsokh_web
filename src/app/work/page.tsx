"use client";
import { VStackContainer } from "@/components/container";
import { Line } from "@/components/line";

import { LineWidget, LineWidgetDetail } from "@/components/lines/article";
import { LinkTitle } from "@/components/link";
import { workData } from "@/data/work.data";
import { WorkTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { work } from "@/global/string";

import { workTags } from "@/global/values";
import { Work } from "@/model/work.model";
import { HStack } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const WorkPage = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<WorkTypes>(WorkTypes.research);
  const [data, setData] = useState<Work[]>([]);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<Work | null>(null);
  const getData = async () => {
    try {
      let filtered = workData.filter((d) => d.type == type);
      setData(filtered.filter((d, i) => i >= page * 10 && i < (page + 1) * 10));
    } catch (error) {}
  };
  useEffect(() => {
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof WorkTypes;
      setType(name ?? WorkTypes.research);
      setValue(filterName(name, workTags));
    }
  }, []);
  useEffect(() => {
    getData();
    setValue(filterName(type, workTags));
  }, [type, page]);
  useEffect(() => {
    if (params.get("id")) {
      let filtered = workData.filter((d) => d._id == params.get("id"));
      if (filtered.length > 0) {
        setSelected(filtered[0]);
      } else {
        setSelected(null);
      }
    }
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof WorkTypes;
      setType(name ?? WorkTypes.research);
      setValue(filterName(name, workTags));
    }
  }, [params]);

  return (
    <VStackContainer>
      <HStack w={"full"} display={{ lg: "flex", base: "none" }}>
        <LinkTitle
          title={work}
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
              img={selected.img}
              id={selected._id}
            />
          ) : (
            data?.map((d, i) => {
              switch (d.type) {
                case WorkTypes.research:
                  return (
                    <LineWidget
                      img={d.img!}
                      id={d._id}
                      text={d.text}
                      title={d.title}
                      key={i}
                      type="work"
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
                      type="work"
                    />
                  );
              }
            }) ?? <></>
          )
        }
        filter={workTags}
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
export default WorkPage;
