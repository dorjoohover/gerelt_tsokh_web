"use client";

import { useState } from "react";
import AdminForm from "./Form";
import { Box, HStack, Input, Text, useToast } from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { WorkTypes } from "@/global/enum";
import { getCookie } from "cookies-next";
import { Messages, api } from "@/values/values";
import axios from "axios";
import { CustomDetailType } from "./Performance";
import { useRouter } from "next/navigation";
import { uploader } from "./Info";
const workType: FilterType[] = [
  {
    value: WorkTypes.research,
    name: "Судалгаа",
  },
  {
    value: WorkTypes.project,
    name: "Төсөл",
  },
  {
    value: WorkTypes.advice,
    name: "Сургалт ба зөвлөгөө үйлчилгээ",
  },
  {
    value: WorkTypes.donation,
    name: "Тэтгэлэг ба хандив",
  },
];
export default function AdminWork({ route }: { route: { type: string } }) {
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
      warning(Messages.requiredFile);
      return;
    }
    submit(type);
  };
  const submit = async (type: string) => {
    try {
      let img: string | undefined = undefined;

      img = await uploader(data.img!, token!);
      if (!img) {
        warning(Messages.occured);
        return;
      }
      const body = {
        title: data.title,
        img: img,
        text: data.text,
        types: type,
      };

      await axios
        .post(`${api}work/create`, body, {
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

            img: undefined,
          });
        });
    } catch (error) {
      console.log(error);
      warning(Messages.occured);
    }
  };

  return (
    <AdminForm
      value={data.title}
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Хийгдсэн ажлууд > ${filterName(route.type, workType)}`}
      text="Гарчиг"
      ph={""}
      editorText={data.text}
      onSubmit={checker}
    >
      <Box w={"full"}>
        <HStack my={4}>
          <Text>Зураг:</Text>{" "}
          <Input
            accept="image/*"
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
