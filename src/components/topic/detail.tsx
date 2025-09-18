import {
  PerformanceModel,
  PerformanceQuestion,
} from "@/model/performance.model";
import {
  Box,
  Button,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
  useToast,
} from "@chakra-ui/react";
import CustomAccordian from "../accordian";
import { TopicModel } from "@/model/topic.model";
import { getCookie } from "cookies-next";
import axios from "axios";
import { api } from "@/values/values";
import RichContent from "../html";

const TopicDetailWidget = ({ data }: { data: TopicModel }) => {
  const toast = useToast();
  const token = getCookie("token");
  const deleteTopic = async () => {
    try {
      await axios
        .delete(`${api}topic/${data._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((d) => {
          toast({
            title: "Устгалаа.",
          });
        });
    } catch (error) {}
  };
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

      <Box>
        <RichContent text={data.text} />
      </Box>
      {token && token != "" && data._id != "" && (
        <Button onClick={deleteTopic}>Устгах</Button>
      )}
    </VStack>
  );
};

export default TopicDetailWidget;
