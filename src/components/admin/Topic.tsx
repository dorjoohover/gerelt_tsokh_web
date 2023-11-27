"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text, useToast } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { ArticleTypes } from "@/global/enum";
import { tokhiruulgaTags } from "@/values/tags";
import { api } from "@/values/values";
import axios from "axios";
import { getCookie } from "cookies-next";
export default function AdminTopic({ route }: { route: { type: string } }) {
  const [data, setData] = useState({
    title: "",
    text: "",
  });
  const token = getCookie("token");
  const toast = useToast();
  const submit = async () => {
    try {
      await axios
        .post(
          `${api}topic/create`,
          {
            title: data.title,
            text: data.text,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((d) =>
          toast({
            title: "Нэмэгдлээ.",

            status: "success",
            duration: 2000,
            isClosable: true,
          })
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminForm
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Халуун сэдэв > ${filterName(
        route.type,
        tokhiruulgaTags[4].sub!
      )}`}
      text="Гарчиг"
      onSubmit={submit}
    ></AdminForm>
  );
}
