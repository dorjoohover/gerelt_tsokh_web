import { link } from "@/global/string";
import { HStack, Highlight, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

type Types = {
  title: string;

  value?: string;
};
export const LinkTitle: FC<Types> = ({ title, value }) => {
  return (
    <HStack w={"full"} justifyContent={"space-between"} mt={8}>
      <Text variant={"title"} color={"prime.default"}>
        {title}
      </Text>
      <VStack alignItems={"end"} gap={0}>
        <Text variant={"normal"}>{link}</Text>
        <HStack color={'text'}>
          <Highlight query={value ?? ""} styles={{ textDecor: "underline" }}>
            {`${title.substring(0,1)}${title.substring(1).toLowerCase()} > ${value}`}
          </Highlight>
        </HStack>
      </VStack>
    </HStack>
  );
};
