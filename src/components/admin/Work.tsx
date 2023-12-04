"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text, useToast } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { WorkTypes } from "@/global/enum";
import { getCookie } from "cookies-next";
import { api } from "@/values/values";
import axios from "axios";
import { CustomDetailType } from "./Performance";
const workType: FilterType[] = [
  {
    value: WorkTypes.research,
    name: "Судалгаа",
  },
  {
    value: WorkTypes.project,
    name: "Төсөл",
  },
  {
    value: WorkTypes.advice,
    name: "Сургалт ба зөвлөгөө үйлчилгээ",
  },
  {
    value: WorkTypes.donation,
    name: "Тэтгэлэг ба хандив",
  },
];
export default function AdminWork({ route }: { route: { type: string } }) {
  const [data, setData] = useState<CustomDetailType>({
    title: "",
    text: "",

    img: undefined,
  });
  const token = getCookie("token");
  const toast = useToast();
  const submit = async () => {
    try {
      let img = "";

      if (data.img != undefined) {
        let file = new FormData();
        file.set("file", data.img);
        await fetch(`${api}`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: file,
        })
          .then((d) => d.json())
          .then((d) => (img = d.file));
      }

      let body = {
        title: data.title,

        img: img,

        text: data.text,
        types: route.type.toUpperCase(),
      };
      await axios
        .post(`${api}work/create`, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() =>
          toast({
            title: "Нэмэгдлээ.",

            status: "success",
            duration: 2000,
            isClosable: true,
          })
        )
        .then(() => {
          setData({
            title: "",
            text: "",
            // thumbnail: undefined,
            img: undefined,
          });
        });
    } catch (error) {}
  };

  return (
    <AdminForm
      value={data.title}
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Хийгдсэн ажлууд > ${filterName(route.type, workType)}`}
      text="Гарчиг"
      ph={data.title}
      onSubmit={submit}
    >
      <Box w={"full"}>
        <HStack my={4}>
          <Text>Зураг:</Text>{" "}
          <Input
            border={"none"}
            type="file"
            width={"auto"}
            height={"auto"}
            onChange={(e) =>
              setData((prev) => ({ ...prev, img: e.target.files?.[0] }))
            }
          />
        </HStack>
      </Box>
    </AdminForm>
  );
}
