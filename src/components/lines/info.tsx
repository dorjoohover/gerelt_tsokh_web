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
type InfoType = {
  data: Info;
};
export const TextLine: FC<InfoType> = ({ data }) => {
  return (
    <VStack w={"full"} alignItems={{ base: "start", md: "center" }}>
      <HStack
        w={"full"}
        justifyContent={"space-between"}
        mb={{ md: 8, base: 4 }}
      >
        <Heading
          fontSize={{
            md: "22px",
            base: "16px",
          }}
          variant={"title"}
          color={"text"}
        >
          {data.title}
        </Heading>
        <Text
          variant={"normal"}
          display={{ md: "inline-block", base: "none" }}
        >{`${data.date} | ${data.duration} мин`}</Text>
      </HStack>
      <Text mb={{ md: 0, base: 4 }}>{data.text}</Text>
      <Text
        variant={"normal"}
        display={{ base: "inline-block", md: "none" }}
      >{`${data.date} | ${data.duration} мин`}</Text>
    </VStack>
  );
};
export const VoiceLine: FC<InfoType> = ({ data }) => {
  return (
    <HStack alignItems={"start"} w={"full"}>
      <Button
        p={3}
        borderRadius={100}
        h={"auto"}
        bg={"transparent"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        border={"1px solid gray"}
        mr={2}
      >
        <Icon as={FaPlay} color={"text"} />
      </Button>
      <VStack w={"full"} alignItems={{ base: "start", md: "center" }}>
        <HStack
          w={"full"}
          justifyContent={"space-between"}
          mb={{ md: 8, base: 4 }}
        >
          <Heading
            fontSize={{
              md: "22px",
              base: "16px",
            }}
            variant={"title"}
            color={"text"}
          >
            {data.title}
          </Heading>
          <Text
            variant={"normal"}
            display={{ md: "inline-block", base: "none" }}
          >{`${data.date} | ${data.duration} мин`}</Text>
        </HStack>
        <Text mb={{ md: 0, base: 4 }}>{data.text}</Text>
        <Text
          variant={"normal"}
          display={{ base: "inline-block", md: "none" }}
        >{`${data.date} | ${data.duration} мин`}</Text>
      </VStack>
    </HStack>
  );
};
export const VideoLine: FC<InfoType> = ({ data }) => {
  return (
    <VStack w={"full"} gap={{ md: 4.5, base: 4 }} alignItems={"start"}>
      <Box pos={"relative"} w={"full"}>
        <Image src={data.thumbnail} alt={""} w={"full"} />
        <Link href={data.uri ?? "www.google.com"} target="_blank">
          <Box
            pos={"absolute"}
            zIndex={5}
            top={"50%"}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
            display={"flex"}
            bg={"red"}
            borderRadius={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
            w={16}
            h={16}
          >
            <Icon as={FaPlay} boxSize={25} color={"white"} />
          </Box>
        </Link>
      </Box>
      <Heading fontSize={"20px"} variant={"smallTitle"} color={"text"}>
        {data.title}
      </Heading>

      <Text>{data.date}</Text>
    </VStack>
  );
};
