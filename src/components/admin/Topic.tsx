"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { ArticleTypes } from "@/global/enum";
import { tokhiruulgaTags } from "@/values/tags";

export default function AdminTopic({ route }: { route: { type: string } }) {
  const [data, setData] = useState({
    title: "",
    text: "",
  });
  const submit = async () => {
    try {
    } catch (error) {}
  };

  return (
    <AdminForm
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Халуун сэдэв > ${filterName(route.type, tokhiruulgaTags[4].sub!)}`}
      text="Гарчиг"
      onSubmit={submit}
    >
      
    </AdminForm>
  );
}
