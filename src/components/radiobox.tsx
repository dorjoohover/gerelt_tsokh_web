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
  onChange?: (value: number) => void;
};

const RadioBox: FC<InputTypes> = ({ question, number, options, onChange }) => {
  const [value, setValue] = useState<number | undefined>();
  return (
    <VStack w={"full"} gap={6} alignItems={"start"}>
      <Text
        mb={2}
        variant={"smallTitle"}
        color={"text"}
      >{`${number}. ${question}`}</Text>

      <RadioGroup
        onChange={(e) => {
          setValue(Number(e));

          if(Number(e) != undefined) {
            onChange!(Number(e));
          }
        }}
        // value={options![value].value}
      >
        <VStack alignItems={"start"}>
          {options?.map((option, i) => {
            return (
              <Radio
                borderColor={"prime.default"}
                borderRadius={9}
                size={"lg"}
                bg={i == value ? "prime.default" : "white"}
                // color={"prime.default"}
                // _checked={{ bg: "prime.default",color:'white'  }}
                // ringOffsetColor={"prime.default"}
                // colorScheme={"prime.default"}
                value={i.toString()}
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
