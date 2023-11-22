import { detail, more } from "@/global/string";
import { Info } from "@/model/info.model";
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { FaPlay } from "react-icons/fa";
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
        <Image src={img} alt={id} />
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
        {semiTitle && (
          <Heading fontSize={"20px"} fontStyle={"italic"} color={"text"}>
            {semiTitle}
          </Heading>
        )}

        <Text mb={{ md: 0, base: 4 }} noOfLines={{ md: 3, base: 4 }}>
          {text}
        </Text>
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
}) => {
  return (
    <VStack alignItems={"start"} w={"full"} gap={5}>
      <Heading variant={"title"}>{title}</Heading>
      {semiTitle && (
        <Text fontStyle={"italic"} color={"text"}>
          {semiTitle}
        </Text>
      )}
      <Image src={img} w={"full"} alt={id ?? ""} />
      <VStack w={"full"} alignItems={{ base: "start", md: "center" }}>
        <Text>{text}</Text>
      </VStack>
    </VStack>
  );
};
