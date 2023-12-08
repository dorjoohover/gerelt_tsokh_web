"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text, useToast } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { ArticleTypes } from "@/global/enum";
import axios from "axios";
import { Messages, api } from "@/values/values";
import { getCookie } from "cookies-next";
import { CustomDetailType } from "./Performance";
import { useRouter } from "next/navigation";
import { uploader } from "./Info";
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
  const router = useRouter();
  const warning = (value: string) => {
    toast({
      title: value,
      status: "warning",
      duration: 2000,
      isClosable: true,
    });
    return;
  };
  const checker = () => {
    if (token == "" || token == undefined) {
      router.push("/admin/login");
      return;
    }
    const type = route.type.toUpperCase();
    if (data.img == undefined) {
      warning(Messages.requiredImg);
      return;
    }
    submit(type);
  };
  const submit = async (type: string) => {
    try {
      const img = await uploader(data.img!, token!);
      if (!img) {
        warning(Messages.occured);
        return;
      }
      let body = {
        title: data.title,
        img: img,
        text: data.text,
        types: type,
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
    } catch (error) {
      console.log(error);
      warning(Messages.occured);
    }
  };

  return (
    <AdminForm
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Нийтлэл > ${filterName(route.type, articleType)}`}
      text="Гарчиг"
      onSubmit={checker}
      value={data.title}
      editorText={data.text}
    >
      <Box w={"full"}>
        <HStack my={4}>
          <Text>Зураг:</Text>{" "}
          <Input
            border={"none"}
            type="file"
            width={"auto"}
            accept="image/*"
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
