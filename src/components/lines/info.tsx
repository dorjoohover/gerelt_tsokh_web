import { Info } from "@/model/info.model";
import { Button, HStack, Icon, Text, VStack } from "@chakra-ui/react";
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
        <Text variant={"title"} color={"text"}>
          {data.title}
        </Text>
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
          <Text variant={"title"} color={"text"}>
            {data.title}
          </Text>
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
