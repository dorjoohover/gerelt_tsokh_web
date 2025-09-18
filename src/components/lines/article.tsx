"use client";
import { noImage } from "@/global/assets";
import { dateFormater } from "@/global/functions";
import { detail, more } from "@/global/string";

import { api } from "@/values/values";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { FC } from "react";
import RichContent from "../html";

type LineWidgetType = {
  img: string;
  title: string;
  text: string;
  id: string;
  type: string;
  semiTitle?: string;
};
type LineWidgetDetailType = {
  img?: string;
  title: string;
  text: string;
  id?: string;
  semiTitle?: string;
  type?: string;
  date?: string;
};
export const LineWidget: FC<LineWidgetType> = ({
  img,
  type,
  title,
  semiTitle,
  text,
  id,
}) => {
  return (
    <HStack
      w={"full"}
      gap={6}
      alignItems={"start"}
      flexDir={{ md: "row", base: "column" }}
    >
      <Box flex={1}>
        <Image
          src={img != undefined && img != "" ? `${api}${img}` : noImage}
          alt={id}
          height={"auto"}
          maxH={200}
          objectFit={"cover"}
          w={"full"}
        />
      </Box>

      <VStack
        w={"full"}
        alignItems={{ base: "start" }}
        gap={{ md: 4 }}
        flex={2}
      >
        <Heading
          fontSize={{
            md: "22px",
            base: "16px",
          }}
          variant={"title"}
          color={"text"}
        >
          {title}
        </Heading>
        {/* {semiTitle && (
          <Heading fontSize={"20px"} fontStyle={"italic"} color={"text"}>
            {semiTitle}
          </Heading>
        )} */}

        <Box
          mb={{ md: 0, base: 4 }}
          maxW={{ md: "35vw", base: "auto" }}
          noOfLines={{ md: 3, base: 4 }}
        >
          <RichContent text={text} />
        </Box>
        <Link href={`/${type}?id=${id}`}>
          <Text textDecor={"underline"}>{more}</Text>
        </Link>
      </VStack>
    </HStack>
  );
};
export const LineWidgetDetail: FC<LineWidgetDetailType> = ({
  img,
  title,
  id,
  text,
  semiTitle,
  type,
  date,
}) => {
  const toast = useToast();
  const token = getCookie("token");
  const deleteItem = async () => {
    try {
      await axios
        .delete(`${api}${type}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((d) => {
          toast({
            title: "Устгалаа.",
          });
        });
    } catch (error) {}
  };
  return (
    <VStack alignItems={"start"} w={"full"} gap={5}>
      <Heading variant={"title"}>{title}</Heading>
      {semiTitle && (
        <Text fontStyle={"italic"} color={"text"}>
          {semiTitle}
        </Text>
      )}
      {img && img != "" && (
        <Image
          src={`${api}${img}`}
          w={"full"}
          maxH={400}
          objectFit={"cover"}
          alt={id ?? ""}
        />
      )}
      <VStack w={"full"} alignItems={"start"}>
        <Box mb={{ md: 0, base: 4 }}>
          <RichContent text={text} />
        </Box>
      </VStack>
      <HStack w={"full"}>
        <Text variant={"normal"} fontWeight={"bold"}>
          Оруулсан огноо:{" "}
          <span className="font-normal">{dateFormater(date ?? "")}</span>
        </Text>
      </HStack>
      {token && id != "" && <Button onClick={deleteItem}>Устгах</Button>}
    </VStack>
  );
};
