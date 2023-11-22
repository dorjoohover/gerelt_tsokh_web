import {
  PerformanceModel,
  PerformanceQuestion,
} from "@/model/performance.model";
import {
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import CustomAccordian from "../accordian";
import { TopicModel } from "@/model/topic.model";

const TopicDetailWidget = ({ data }: { data: TopicModel }) => {
  return (
    <VStack alignItems={"start"} w={"full"} gap={5}>
      <Heading
        fontSize={{
          md: "22px",
          base: "16px",
        }}
        variant={"title"}
      >
        {data.title}
      </Heading>

      <Text>{data.text}</Text>
    </VStack>
  );
};

export default TopicDetailWidget;
