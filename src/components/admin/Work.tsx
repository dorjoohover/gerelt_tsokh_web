"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { WorkTypes } from "@/global/enum";
const workType: FilterType[] = [
    {
        value: WorkTypes.research,
        name: 'Судалгаа'
    },
    {
        value: WorkTypes.project,
        name: 'Төсөл'
    },
    {
        value: WorkTypes.advice,
        name: 'Сургалт ба зөвлөгөө үйлчилгээ'
    },
    {
        value: WorkTypes.donation,
        name: 'Тэтгэлэг ба хандив'
    },
]
export default function AdminWork({ route }: { route: { type: string } }) {
  const [data, setData] = useState({
    title: "",
    text: "",

    img: "",
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
      title={`Хийгдсэн ажлууд > ${filterName(route.type, workType)}`}
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
