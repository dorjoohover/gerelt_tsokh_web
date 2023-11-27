"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { ArticleTypes } from "@/global/enum";
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
  const [data, setData] = useState({
    title: "",
    text: "",
    img: "",
  });
  const submit = async () => {
    try {
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
              setData((prev) => ({ ...prev, img: e.target.value }))
            }
          />
        </HStack>
      </Box>
    </AdminForm>
  );
}
