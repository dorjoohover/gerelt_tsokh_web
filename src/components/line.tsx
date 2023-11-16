import { InfoTypes } from "@/global/enum";
import { FilterType } from "@/global/functions";
import { additionInfoTags } from "@/global/values";
import { Info } from "@/model/info.model";
import { Button, HStack, Icon, Select, Text, VStack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { FaPlay } from "react-icons/fa";
type Types = {
  page: number;
  child: ReactNode;
  type: any;
  length: number;
  value: string;
  changePage: (value: number) => void;
  changeType: (value: any) => void;
  filter: FilterType[];
  limit: number;
};

export const Line: FC<Types> = ({
  page,
  type,
  child,
  length,
  value,
  changePage,
  changeType,
  filter,
  limit = 5,
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
        {filter.map((tags, i) => {
          return (
            <Button
              key={i}
              p={0}
              h={"auto"}
              w={"full"}
              bg={"transparent"}
              textTransform={"none"}
              onClick={() => {
                changeType(tags.value);
              }}
              _hover={{
                bg: "none",
              }}
            >
              <Text
                w={"full"}
                fontWeight={tags.value == type ? "bold" : 400}
                borderTop={i != 0 ? "1px solid aqua" : ""}
                borderColor={"prime.default"}
                py={4}
                textAlign={"start"}
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
        gap={{ lg: 78, base: 10 }}
        pt={{ lg: 0, base: 8 }}
      >
        <Select
          display={{ lg: "none", base: "flex" }}
          defaultValue={value}
          onChange={(e) => {
            changeType(e.target.value);
          }}
        >
          {filter.map((tags, i) => {
            return (
              <option value={tags.value} key={i}>
                {tags.name}
              </option>
            );
          })}
        </Select>
        {child}
        <HStack justifyContent={"center"} w={"full"} gap={0}>
          {Math.ceil(length / limit) > 1 &&
            Array.from(Array(Math.ceil(length / limit)).keys()).map((i) => {
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
