import {
  HStack,

  Text,

  VStack,
} from "@chakra-ui/react";
import CustomAccordian from "../accordian";
import { LegalModel } from "@/model/legal.model";

const LegalDetailWidget = ({ data }: { data: LegalModel }) => {
  return (
    <VStack alignItems={"start"} w={"full"} gap={4}>
      <Text variant={"smallTitle"}  color={"text"}>
        {data.title.toUpperCase()}
      </Text>
      {data.date && (
        <HStack w={"full"} justifyContent={"space-between"}>
          <Text>{data.date}</Text>
          <Text>{data.location ?? " "}</Text>
        </HStack>
      )}

      {data.text && <Text>{data.text}</Text>}

      {data.details.map((detail, index) => {
        return (
          <VStack w={"full"} alignItems={"start"} key={index}>
            <Text variant={"smallTitle"} color={"text"}>
              {detail.title}
            </Text>
            <Text>{detail.text}</Text>
          </VStack>
        );
      })}
      {data.chief && (
        <HStack w={"full"} justifyContent={"end"}>
          <Text>{data.chief}</Text>
        </HStack>
      )}
    </VStack>
  );
};

export default LegalDetailWidget;
