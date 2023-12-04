"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text, useToast } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { ArticleTypes } from "@/global/enum";
import axios from "axios";
import { api } from "@/values/values";
import { getCookie } from "cookies-next";
import { CustomDetailType } from "./Performance";
const articleType: FilterType[] = [
  {
    value: ArticleTypes.article,
    name: "Нийтлэл",
  },
  {
    value: ArticleTypes.info,
    name: "Мэдээ",
  },
];


export default function AdminArticle({ route }: { route: { type: string } }) {
  const [data, setData] = useState<CustomDetailType>({
    title: "",
    text: "",
    img: undefined,
  });
  const token = getCookie("token");
  const toast = useToast();
  const submit = async () => {
    try {
      let img = new FormData();
      if (data.img != undefined) img.set("file", data.img);
      let res = await fetch(`${api}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: img,
      }).then((d) => d.json());

      let body = {
        title: data.title,
        img: res.file ?? "",

        text: data.text,
        types: route.type.toUpperCase(),
      };
      await axios
        .post(`${api}article/create`, body, {
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
          setData({ title: "", text: "", img: undefined });
        });
    } catch (error) {}
  };

  return (
    <AdminForm
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Нийтлэл > ${filterName(route.type, articleType)}`}
      text="Гарчиг"
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
