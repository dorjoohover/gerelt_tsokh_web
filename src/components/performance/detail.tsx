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

const PerformanceDetailWidget = ({ data }: { data: PerformanceModel }) => {
  return (
    <VStack alignItems={"start"} w={"full"} gap={5}>
      <Text variant={"title"}>{data.title}</Text>

      <VStack w={"full"} alignItems={{ base: "start", md: "center" }}>
        <Text>{data.text}</Text>
      </VStack>
      <OrderedList ml={6}>
        {data.questions?.map((question, index) => {
          return (
            <ListItem fontSize={20} py={4} color={"text"} pl={10} key={index}>
              {question.text}
            </ListItem>
          );
        })}
      </OrderedList>
      <CustomAccordian
        data={[
          {
            title: "Боломжит тохируулгууд",
          },
          {
            title: "Ажил үүргийн функцээр",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.functions.map((fun, index) => {
                  return (
                    <VStack key={index} w={"full"} alignItems={"start"} gap={4}>
                      <Text>{fun.title}</Text>
                      <UnorderedList>
                        {fun.details.map((detail, i) => {
                          return (
                            <ListItem py={4} pl={10} color={'text'} key={i}>
                              <VStack alignItems={"start"}>
                                <Text color={"blue"}>{detail.title}</Text>
                                {detail.text && (
                                  <Text >{detail.text}</Text>
                                )}
                              </VStack>
                            </ListItem>
                          );
                        })}
                      </UnorderedList>
                    </VStack>
                  );
                })}
              </VStack>
            ),
          },
          {
            title: "Нөхцөл ба Шийдэл",
          },
        ]}
      />
    </VStack>
  );
};

export default PerformanceDetailWidget;
