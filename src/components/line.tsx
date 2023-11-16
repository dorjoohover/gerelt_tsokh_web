import { InfoTypes } from "@/global/enum";
import { additionInfoTags } from "@/global/values";
import { Info } from "@/model/info.model";
import { Button, HStack, Icon, Select, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { FaPlay } from "react-icons/fa";
type Types = {
  page: number;
  data?: Info[];
  type: InfoTypes;
  length: number;
  value: string;
  changePage: (value: number) => void;
  changeType: (value: InfoTypes) => void;
};
type InfoType = {
  data: Info;
};

const TextLine: FC<InfoType> = ({ data }) => {
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
const VoiceLine: FC<InfoType> = ({ data }) => {
  return (
    <HStack alignItems={"start"} w={"full"}>
      <Button p={3} borderRadius={100} h={'auto'} bg={"transparent"} display={'flex'} justifyContent={'center'} alignItems={'center'} border={"1px solid gray"} mr={2}>
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
export const Line: FC<Types> = ({
  page,
  type,
  data,
  length,
  value,
  changePage,
  changeType,
}) => {
  return (
    <HStack w={"full"} alignItems={"start"}>
      <VStack
        w={{ lg: "300px" }}
        display={{ lg: "flex", base: "none" }}
        gap={0}
        alignItems={"start"}
        mr={94}
      >
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
        pl={{ lg: 10, base: 0 }}
        borderLeft={{ lg: "1px solid aqua", base: "" }}
        borderColor={"prime.default"}
        gap={{ md: 78, base: 10 }}
        pt={{ lg: 0, base: 8 }}
      >
        <Select
          defaultValue={value}
          onChange={(e) => {
            let v: any = e.target.value as keyof typeof InfoTypes;
            changeType(v);
          }}
        >
          {additionInfoTags.map((tags, i) => {
            return (
              <option value={tags.value} key={i}>
                {tags.name}
              </option>
            );
          })}
        </Select>
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
