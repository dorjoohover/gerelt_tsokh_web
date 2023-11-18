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
      {/* <OrderedList ml={6}>
        {data.questions?.map((question, index) => {
          return (
            <ListItem fontSize={20} py={4} color={"text"} pl={10} key={index}>
              {question.text}
            </ListItem>
          );
        })}
      </OrderedList> */}
      <CustomAccordian
        data={[
          
          {
            title:
              data.employerWarning != undefined
                ? "Ажилтанд өгөх бяцхан санамжууд"
                : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={4}>
                <UnorderedList>
                  {data.employerWarning?.map((detail, i) => {
                    return (
                      <ListItem py={4} pl={10} color={"text"} key={i}>
                        <VStack alignItems={"start"}>
                          <Text color={"blue"}>{detail.title}</Text>
                          {detail.text && <Text>{detail.text}</Text>}
                        </VStack>
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </VStack>
            ),
          },
          {
            title:
              data.employerWarning != undefined
                ? "Ажил олгогчид өгөх бяцхан санамжууд"
                : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={4}>
                <UnorderedList>
                  {data.employerWarning?.map((detail, i) => {
                    return (
                      <ListItem py={4} pl={10} color={"text"} key={i}>
                        <VStack alignItems={"start"}>
                          <Text color={"blue"}>{detail.title}</Text>
                          {detail.text && <Text>{detail.text}</Text>}
                        </VStack>
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </VStack>
            ),
          },
          {
            title:
              data.setup != undefined
                ? "Гол тохируулгууд "
                : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.setup?.map((fun, index) => {
                  return (
                    <VStack key={index} w={"full"} alignItems={"start"} gap={4}>
                      <Text>{fun.title}</Text>
                      <UnorderedList>
                        {fun.details.map((detail, i) => {
                          return (
                            <ListItem py={4} pl={10} color={"text"} key={i}>
                              <VStack alignItems={"start"}>
                                <Text color={"blue"}>{detail.title}</Text>
                                {detail.text && <Text>{detail.text}</Text>}
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
            title: data.space != undefined ? "Амрах хувийн орон зай" : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.space?.map((fun, index) => {
                  return (
                    <VStack key={index} w={"full"} alignItems={"start"} gap={4}>
                      <Text >{fun.title}</Text>
                      {fun.text &&  <Text>{fun.text}</Text>}

                    </VStack>
                  );
                })}
              </VStack>
            ),
          },
          {
            title: data.trigger != undefined ? "Сэдрээгч хүчин зүйлсийг илрүүлж багасгах" : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.trigger?.map((fun, index) => {
                  return (
                    <VStack key={index} w={"full"} alignItems={"start"} gap={4}>
                      <Text >{fun.title}</Text>
                     {fun.text &&  <Text>{fun.text}</Text>}

                    </VStack>
                  );
                })}
              </VStack>
            ),
          },
          
          {
            title: data.functions != undefined ? "Боломжит тохируулгууд \nАжил үүргийн функцээр" : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.functions?.map((fun, index) => {
                  return (
                    <VStack key={index} w={"full"} alignItems={"start"} gap={4}>
                      <Text>{fun.title}</Text>
                      <UnorderedList>
                        {fun.details.map((detail, i) => {
                          return (
                            <ListItem py={4} pl={10} color={"text"} key={i}>
                              <VStack alignItems={"start"}>
                                <Text color={"blue"}>{detail.title}</Text>
                                {detail.text && <Text>{detail.text}</Text>}
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
            title:
              data.key != undefined
                ? "Түлхүү хэрэглэгддэг тохируулгууд:"
                : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.key?.map((fun, index) => {
                  return (
                    <VStack key={index} w={"full"} alignItems={"start"} gap={4}>
                      <Text>{fun.title}</Text>
                      <UnorderedList>
                        {fun.details.map((detail, i) => {
                          return (
                            <ListItem py={4} pl={10} color={"text"} key={i}>
                              <VStack alignItems={"start"}>
                                <Text color={"blue"}>{detail.title}</Text>
                                {detail.text && <Text>{detail.text}</Text>}
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
            title: data.condition != undefined ? "Нөхцөл ба Шийдэл" : '',
            child: (
              <VStack  w={"full"} alignItems={"start"} gap={4}>
                      <Text>{data.condition?.title}</Text>
                      <UnorderedList>
                        {data.condition?.details?.map((detail, i) => {
                          return (
                            <ListItem py={4} pl={10} color={"text"} key={i}>
                              <VStack alignItems={"start"}>
                                {/* <Text color={"blue"}>{detail.title}</Text> */}
                                {detail.text && <Text>{detail.text}</Text>}
                              </VStack>
                            </ListItem>
                          );
                        })}
                      </UnorderedList>
                    </VStack>
            )
          },
        ]}
      />
    </VStack>
  );
};

export default PerformanceDetailWidget;
