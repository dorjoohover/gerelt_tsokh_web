"use client";
import {
  Box,
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import CustomAccordian from "../accordian";
import { LegalModel } from "@/model/legal.model";
import axios from "axios";
import { api } from "@/values/values";
import { getCookie } from "cookies-next";

const LegalDetailWidget = ({ data }: { data: LegalModel }) => {
  const toast = useToast();
  const token = getCookie("token");
  const deleteLegal = async () => {
    try {
      await axios
        .delete(`${api}legal/${data._id}`, {
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
    <VStack alignItems={"start"} w={"full"} gap={4}>
      <Text variant={"smallTitle"} color={"text"}>
        {data.title.toUpperCase()}
      </Text>
      {data.date && (
        <HStack w={"full"} justifyContent={"space-between"}>
          <Text>{data.date}</Text>
          <Text>{data.location ?? " "}</Text>
        </HStack>
      )}

      {data.text && (
        <Box
          dangerouslySetInnerHTML={{
            __html: data?.text.replaceAll('"', "") ?? "",
          }}
        />
      )}

      {/* {data.details.map((detail, index) => {
        return (
          <VStack w={"full"} alignItems={"start"} key={index}>
            <Heading fontSize={"20px"} variant={"smallTitle"} color={"text"}>
              {detail.title}
            </Heading>
            <Text>{detail.text}</Text>
          </VStack>
        );
      })}
      {data.chief && (
        <HStack w={"full"} justifyContent={"end"}>
          <Text>{data.chief}</Text>
        </HStack>
      )} */}
      {token && token != "" && data._id != "" && (
        <Button onClick={deleteLegal}>Устгах</Button>
      )}
    </VStack>
  );
};

export default LegalDetailWidget;
