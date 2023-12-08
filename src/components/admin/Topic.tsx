"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text, useToast } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { ArticleTypes } from "@/global/enum";
import { tokhiruulgaTags } from "@/values/tags";
import { Messages, api } from "@/values/values";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export default function AdminTopic() {
  const [data, setData] = useState({
    title: "",
    text: "",
  });
  const token = getCookie("token");
  const toast = useToast();
  const router = useRouter();
  const checker = () => {
    if (token == "" || token == undefined) {
      router.push("/admin/login");
      return;
    }

    submit();
  };
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
      editorText={data.text}
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Халуун сэдэв `}
      text="Гарчиг"
      onSubmit={checker}
    ></AdminForm>
  );
}
