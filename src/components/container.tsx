import { HStack, ResponsiveValue, VStack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Types = {
  children: ReactNode;
  maxW?: string;
  margin?: ResponsiveValue<number | (string & {}) | "inherit" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | "auto"> | undefined;
  gap?: ResponsiveValue<number| (string & {})> | undefined;
  w?: string;
};
export const HStackContainer: FC<Types> = ({
  maxW,
  w,
  children,
  margin,
  gap,
}) => {
  return (
    <HStack
      w={w ?? "full"}
      maxW={maxW ?? "1240px"}
      margin={margin ?? 'auto'}
      gap={gap ?? {
        lg:  10,
        md: 6,
        base: 6
      }}
      px={{ md: 10, base: 0}}
      flexDir={{
        md: "row",
        base: "column",
      }}
    >
      {children}
    </HStack>
  );
};
export const VStackContainer: FC<Types> = ({ maxW, children, margin, gap }) => {
  return (
    <VStack
      maxW={maxW ?? "1240px"}
      px={{ md: 10, base: 6 }}
      alignItems={"start"}
      margin={margin ?? "auto"}
      gap={gap ?? 8}
    >
      {children}
    </VStack>
  );
};
