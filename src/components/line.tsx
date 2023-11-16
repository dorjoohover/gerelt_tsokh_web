
import { InfoTypes } from "@/global/enum";
import { additionInfoTags } from "@/global/values";
import { Info } from "@/model/info.model";
import { Button, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { FaPlay } from "react-icons/fa";
type Types = {
  page: number;
  data?: Info[];
  type: InfoTypes;
  length: number;
  changePage: (value: number) => void;
  changeType: (value: InfoTypes) => void;
};
type InfoType = {
  data: Info;
};

const TextLine: FC<InfoType> = ({ data }) => {
  return (
    <VStack w={"full"}>
      <HStack w={"full"} justifyContent={"space-between"} mb={8}>
        <Text variant={"title"} color={"text"}>
          {data.title}
        </Text>
        <Text variant={"normal"}>{`${data.date} | ${data.duration}мин`}</Text>
      </HStack>
      <Text>{data.text}</Text>
    </VStack>
  );
};
const VoiceLine: FC<InfoType> = ({ data }) => {
  return (
    <HStack alignItems={"start"} w={"full"}>
      <Icon as={FaPlay} />
      <VStack w={"full"}>
        <HStack w={"full"} justifyContent={"space-between"} mb={8}>
          <Text variant={"title"} color={"text"}>
            {data.title}
          </Text>
          <Text variant={"normal"}>{`${data.date} | ${data.duration}мин`}</Text>
        </HStack>
        <Text>{data.text}</Text>
      </VStack>
    </HStack>
  );
};
export const Line: FC<Types> = ({
  page,
  type,
  data,
  length,
  changePage,
  changeType,
}) => {
  return (
    <HStack w={"full"} alignItems={"start"}>
      <VStack w={{ md: "300px" }} gap={0} alignItems={"start"} mr={94}>
        {additionInfoTags.map((tags, i) => {
          return (
            <Button
              key={i}
              p={0}
              h={"auto"}
              bg={"transparent"}
              textTransform={"none"}
              onClick={() => {
                let value: any = tags.value as keyof typeof InfoTypes;
                changeType(value);
              }}
            >
              <Text
                fontWeight={tags.value == type ? "bold" : 400}
                borderTop={i != 0 ? "1px solid aqua" : ""}
                borderColor={"prime.default"}
                py={4}
              >
                {tags.name}
              </Text>
            </Button>
          );
        })}
      </VStack>
      <VStack
        w={"full"}
        pl={10}
        borderLeft={"1px solid aqua"}
        borderColor={"prime.default"}
        gap={78}
      >
        {data?.map((d, i) => {
          switch (d.type) {
            case InfoTypes.text:
              return <TextLine data={d} key={i} />;
            case InfoTypes.voice:
              return <VoiceLine data={d} key={i} />;
            default:
              return <TextLine data={d} key={i} />;
          }
        })}
        <HStack justifyContent={"center"} w={"full"} gap={0}>
          {Array.from(Array(Math.ceil(length / 5)).keys()).map((i) => {
            return (
              <Text
                key={i}
                cursor={"pointer"}
                px={4}
                fontWeight={i == page ? "bold" : 400}
                borderLeft={i != 0 ? "1px solid black" : ""}
                borderColor={"text"}
                onClick={() => changePage(i)}
              >
                {i + 1}
              </Text>
            );
          })}
        </HStack>
      </VStack>
    </HStack>
  );
};
