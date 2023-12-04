"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text, useToast } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { api } from "@/values/values";
import { getCookie } from "cookies-next";
import axios from "axios";
const infoType: FilterType[] = [
  {
    value: "text",
    name: "Текст мэдээлэл",
  },
  {
    value: "voice",
    name: "Дуут мэдээлэл",
  },
];

type CustomDetailType = {
  title: string;
  text?: string;
  // thumbnail?: File;
  voice?: File;
};
export default function AdminInfo({ route }: { route: { type: string } }) {
  const [data, setData] = useState<CustomDetailType>({
    title: "",
    text: "",
    voice: undefined,
    // thumbnail: undefined,
  });
  const token = getCookie("token");
  const toast = useToast();
  const submit = async () => {
    try {
      let voice = "";

      if (data.voice != undefined) {
        let file = new FormData();
        file.set("file", data.voice);
        await fetch(`${api}`, {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: file,
        })
          .then((d) => d.json())
          .then((d) => (voice = d.file));
      }

      let body = {
        title: data.title,
        // thumbnail: thumbnail,
        voice: voice,

        text: data.text,
        types: route.type.toUpperCase(),
      };
      await axios
        .post(`${api}info/create`, body, {
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
            voice: undefined,
          });
        });
    } catch (error) {}
  };

  return (
    <AdminForm
      value={data.title}
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Нэмэлт нэдээллүүд > ${filterName(route.type, infoType)}`}
      text="Гарчиг"
      onSubmit={submit}
    >
      <Box w={"full"}>
        {/* <HStack my={4}>
          <Text>Зураг:</Text>{" "}
          <Input
            border={"none"}
            type="file"
            width={"auto"}
            height={"auto"}
            onChange={(e) =>
              setData((prev) => ({ ...prev, thumbnail: e.target.files?.[0] }))
            }
          />
        </HStack> */}
        {route.type == "voice" && (
          <HStack my={4}>
            <Text>Дуу:</Text>{" "}
            <Input
              type="file"
              height={"auto"}
              border={"none"}
              width={"auto"}
              onChange={(e) =>
                setData((prev) => ({ ...prev, voice: e.target.files?.[0] }))
              }
            />
          </HStack>
        )}
      </Box>
    </AdminForm>
  );
}
