"use client";
import { VStackContainer } from "@/components/container";
import { Line } from "@/components/line";

import { LineWidget, LineWidgetDetail } from "@/components/lines/article";
import { LinkTitle } from "@/components/link";
import { workData } from "@/data/work.data";
import { WorkTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { work } from "@/global/string";

import { workTags } from "@/values/tags";
import { Work } from "@/model/work.model";
import { HStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "@/values/values";

const WorkPage = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<WorkTypes>(WorkTypes.research);
  const [data, setData] = useState<Work[]>([]);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<Work | null>(null);
  const [dataCount, setCount] = useState<number>(0);
  const getData = async (t: WorkTypes) => {
    try {
      let res = await axios.post(`${api}work/type/${t}`, {
        page: page,
        limit: 10,
      });

      setCount(res.data.count);
      setData(res.data.data);
    } catch (error) {}
  };

  const getDataById = async (id: string) => {
    try {
      let res = await fetch(`${api}work/${id}`, { cache: "no-store" }).then(
        (d) => d.json()
      );

      setSelected(res);
    } catch (error) {}
  };
  useEffect(() => {
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof WorkTypes;
      setType(name ?? WorkTypes.research);
      setValue(filterName(name, workTags));
      console.log(name);
      getData(name);
    } else {
      getData(params.get("name") as WorkTypes);
    }
  }, []);
  useEffect(() => {
    getData(type);
  }, [page]);

  useEffect(() => {
    if (params.get("id")) {
      getDataById(params.get("id") as string);
    }
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof WorkTypes;
      setType(name ?? WorkTypes.research);
      setValue(filterName(name, workTags));
      setPage(0);
      getData(name);
      setSelected(null);
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
              type={"work"}
              text={selected.text}
              title={selected.title}
              img={selected.img}
              id={selected._id}
              semiTitle={selected.semiTitle}
              date={selected.postDate ?? selected.createdAt}
            />
          ) : (
            data?.map((d, i) => {
              return (
                <LineWidget
                  img={d.img ?? ""}
                  id={d._id}
                  text={d.text}
                  semiTitle={d.semiTitle}
                  title={d.title}
                  key={i}
                  type="work"
                />
              );
            }) ?? <></>
          )
        }
        filter={workTags}
        limit={5}
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
export default WorkPage;
