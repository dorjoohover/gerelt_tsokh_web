import { link } from "@/global/string";
import { HStack, Heading, Highlight, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

type Types = {
  title: string;

  value?: string;
  detail?: string;
  current?: number;
  special?: string;
  name?: string;
};
export const LinkTitle: FC<Types> = ({
  title,
  value,
  detail,
  current,
  special,
  name,
}) => {
  return (
    <HStack w={"full"} justifyContent={"space-between"} mt={8}>
      <Heading variant={"title"} maxW={{lg: 400, md: 250}} color={"prime.default"}>
        {title}
      </Heading>
      <VStack alignItems={"end"} gap={0}>
        <Text variant={"normal"} >{link}</Text>
        <HStack color={"text"}>
          {special ? (
            <Heading variant={"normal"}>{`${special.substring(0, 1)}${special
              .substring(1)
              .toLowerCase()} > `}</Heading>
          ) : (
            <Heading variant={"normal"}>{`${title.substring(0, 1)}${title
              .substring(1)
              .toLowerCase()} > `}</Heading>
          )}
          <Text
            textDecor={current == 1 ? "underline" : "none"}
            variant={"normal"}
          >{`${value} `}</Text>
          {detail && <Text variant={"normal"}>{`> `}</Text>}
          {detail && (
            <Text
              variant={"normal"}
              textDecor={current == 2 ? "underline" : "none"}
            >{`${
              detail
                ? detail.length > 30
                  ? `${detail.substring(0, 37)}...`
                  : detail
                : ""
            } `}</Text>
          )}
          {name && <Text variant={"normal"}>{`> `}</Text>}
          {name && (
            <Text
              variant={"normal"}
              textDecor={current == 3 ? "underline" : "none"}
            >{`${
              name
                ? name.length > 30
                  ? `${name.substring(0, 37)}...`
                  : name
                : ""
            } `}</Text>
          )}
        </HStack>
      </VStack>
    </HStack>
  );
};
