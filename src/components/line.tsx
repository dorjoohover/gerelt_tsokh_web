"use client";

import { FilterType } from "@/global/functions";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Select, Text, VStack } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, ReactNode, useState, useEffect } from "react";

type Types = {
  page: number;
  child: ReactNode;
  type: any;
  length: number;
  value: string;
  changePage: (value: number) => void;
  changeType: (value: any, sub?: boolean) => void;
  changeSub: (value: number) => void;
  filter: FilterType[];
  limit: number;
  sub?: any;
};

export const Line: FC<Types> = ({
  page,
  type,
  child,
  length,
  value,
  sub,
  changePage,
  changeType,
  changeSub = () => {},
  filter,

  limit = 5,
}) => {
  const [active, setActive] = useState<boolean>(true);
  const [current, setCurrent] = useState<number | null>();
  const [select, setSelect] = useState(type);
  const router = useRouter();

  const pathname = usePathname();
  const params = useSearchParams();
  useEffect(() => {
    if (params.get("name")) {
      setSelect(params.get("name"));
    }
  }, [params.get("name")]);

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
            <VStack w="full" alignItems={"start"} key={i}>
              <Button
                key={i}
                p={0}
                h={"auto"}
                w={"full"}
                bg={"transparent"}
                textTransform={"none"}
                onClick={(e) => {
                  router.push(`${pathname}?name=${tags.value}`);

                  changeType(tags.value, tags.sub != undefined);
                  if (tags.sub != undefined) {
                    if (current == i) {
                      setActive(false);
                      setCurrent(null);
                    } else {
                      setActive(true);
                      setCurrent(i);
                    }
                  }
                }}
                _hover={{
                  bg: "none",
                }}
              >
                <HStack
                  w={"full"}
                  justifyContent={"space-between"}
                  borderTop={i != 0 ? "1px solid aqua" : ""}
                  borderColor={"prime.default"}
                >
                  <Text
                    w={"full"}
                    fontWeight={tags.value == type ? "bold" : 400}
                    py={4}
                    textAlign={"start"}
                  >
                    {tags.name}
                  </Text>
                  {tags.sub != undefined && (
                    <Box>
                      {!active ? (
                        <ChevronDownIcon color={"prime.default"} />
                      ) : (
                        <ChevronUpIcon color={"prime.default"} />
                      )}
                    </Box>
                  )}
                </HStack>
              </Button>
              {tags.sub && active && tags.value == type && (
                <VStack w="full" alignItems={"start"} pl={16}>
                  {tags.sub.map((e, index) => {
                    return (
                      <Button
                        key={index}
                        p={0}
                        h={"auto"}
                        w={"full"}
                        bg={"transparent"}
                        textTransform={"none"}
                        onClick={() => {
                          changeSub(index);
                        }}
                        _hover={{
                          bg: "none",
                        }}
                      >
                        <HStack w={"full"} justifyContent={"space-between"}>
                          <Text
                            w={"full"}
                            fontWeight={index == sub ? "bold" : 400}
                            borderTop={index != 0 ? "1px solid aqua" : ""}
                            borderColor={"prime.default"}
                            py={4}
                            textAlign={"start"}
                          >
                            {e.name}
                          </Text>
                        </HStack>
                      </Button>
                    );
                  })}
                </VStack>
              )}
            </VStack>
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
          value={select}
          border={"none"}
          borderBottom={"1px solid aqua"}
          borderColor={"prime.default"}
          iconColor="prime.default"
          borderRadius={0}
          color={"prime.default"}
          fontWeight={"bold"}
          fontSize={"16px"}
          textTransform={"uppercase"}
          onChange={(e) => {
            e.stopPropagation();
            setSelect(e.target.value);

            router.push(`${pathname}?name=${e.target.value}`);
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
