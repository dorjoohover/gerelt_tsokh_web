"use client";
import { Checkbox, CheckboxGroup, Text, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
type OptionType = {
  text: string;
  value: string;
};
export type InputTypes = {
  question: string;
  number: number;
  options?: OptionType[];
  onChange?: (e: string | number) => void;
};

const CustomCheckBox: FC<InputTypes> = ({
  question,
  number,
  options,
  onChange,
}) => {
  const [selected, setSelected] = useState<(string | number)[]>([]);
  return (
    <VStack w={"full"} gap={6} alignItems={"start"}>
      <Text
        mb={2}
        variant={"smallTitle"}
        color={"text"}
      >{`${number}. ${question}`}</Text>

      <CheckboxGroup
        colorScheme="red"
        onChange={(e) => {
          setSelected(e);
          onChange(e);
        }}
      >
        <VStack alignItems={"start"}>
          {options?.map((option, i) => {
            return (
              <Checkbox
                borderColor={"prime.default"}
                size={"lg"}
                iconColor={"prime.default"}
                value={option.value}
                isChecked={selected.includes(option.value)}
                key={i}
              >
                {option.text}
              </Checkbox>
            );
          })}
        </VStack>
      </CheckboxGroup>
    </VStack>
  );
};

export default CustomCheckBox;
