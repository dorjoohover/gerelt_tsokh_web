import {
  PerformanceModel,
  PerformanceQuestion,
} from "@/model/performance.model";
import {
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
      <Text variant={"title"}>{data.title}</Text>

      <Text>{data.text}</Text>
    </VStack>
  );
};

export default TopicDetailWidget;
