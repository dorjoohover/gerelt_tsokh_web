"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
const infoType: FilterType[] = [
    {
        value: 'text',
        name: 'Текст мэдээлэл'
    },
    {
        value: 'voice',
        name: 'Дуут мэдээлэл'
    },
]
export default function AdminInfo({ route }: { route: { type: string } }) {
  const [data, setData] = useState({
    title: "",
    text: "",
    voice: "",
    thumbnail: "",
  });
  const submit = async () => {
    try {
        
    } catch (error) {
        
    }
  }

  
  return (
    <AdminForm
    
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Нэмэлт нэдээллүүд > ${filterName(route.type, infoType)}`}
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
              setData((prev) => ({ ...prev, thumbnail: e.target.value }))
            }
          />
        </HStack>
        {route.type == "voice" && (
          <HStack my={4}>
            <Text>Дуу:</Text>{" "}
            <Input
              type="file"
              height={"auto"}
              border={"none"}
              width={"auto"}
              onChange={(e) =>
                setData((prev) => ({ ...prev, voice: e.target.value }))
              }
            />
          </HStack>
        )}
      </Box>
    </AdminForm>
  );
}
