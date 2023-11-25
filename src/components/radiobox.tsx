"use client";
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useState } from "react";
type OptionType = {
  text: string;
  value: string;
};
export type InputTypes = {
  question: string;
  number: number;
  options?: OptionType[];
};

const RadioBox: FC<InputTypes> = ({ question, number, options }) => {
  const [value, setValue] = useState<string | undefined>();
  return (
    <VStack w={"full"} gap={6} alignItems={"start"}>
      <Text
        mb={2}
        variant={"smallTitle"}
        color={"text"}
      >{`${number}. ${question}`}</Text>

      <RadioGroup onChange={setValue} value={value}>
        <VStack alignItems={"start"}>
          {options?.map((option, i) => {
            return (
              <Radio
                borderColor={"prime.default"}
                borderRadius={9}
                size={"lg"}
                bg={option.value == value ? "prime.default" : "white"}
                // color={"prime.default"}
                // _checked={{ bg: "prime.default",color:'white'  }}
                // ringOffsetColor={"prime.default"}
                // colorScheme={"prime.default"}
                value={option.value}
                key={i}
              >
                {option.text}
              </Radio>
            );
          })}
        </VStack>
      </RadioGroup>
    </VStack>
  );
};

export default RadioBox;
