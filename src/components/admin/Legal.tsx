"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text, useToast } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { ArticleTypes } from "@/global/enum";
import { tokhiruulgaTags } from "@/values/tags";
import { Messages, api } from "@/values/values";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function AdminLegal({ route }: { route: { type: string } }) {
  const [data, setData] = useState({
    title: "",
    text: "",
  });
  const toast = useToast();
  const token = getCookie("token");
  const router = useRouter();
  const checker = () => {
    if (token == "" || token == undefined) {
      router.push("/admin/login");
      return;
    }
    const type = route.type.toUpperCase();

    submit(type);
  };
  const submit = async (type: string) => {
    try {
      await axios
        .post(
          `${api}legal/create`,
          {
            title: data.title,
            text: data.text,
            types: type,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          toast({
            title: "Нэмэгдлээ.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          setData({
            title: "",
            text: "",
          });
        });
    } catch (error) {
      console.log(error);
      toast({
        title: Messages.occured,
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <AdminForm
      value={data.title}
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Хуулийн мэдээллийн булан > ${filterName(
        route.type,
        tokhiruulgaTags[5].sub!
      )}`}
      text="Гарчиг"
      onSubmit={checker}
      editorText={data.text}
    ></AdminForm>
  );
}
