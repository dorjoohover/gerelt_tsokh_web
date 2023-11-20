import {
  PerformanceModel,
  PerformanceQuestion,
  PerformanceFunction
} from "@/model/performance.model";
import {
  Box,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import CustomAccordian from "../accordian";
import { imgArticle1, imgDoneWork10 } from "@/global/assets";
import {FC} from 'react'
type AccordianWidgetType = {
  fun: PerformanceFunction,
  length: number
}


const AccordianWidget:FC<AccordianWidgetType> = ({fun, length}) => {
  return <VStack  w={"full"} alignItems={"start"} gap={4}>
  <Text>{fun.title}</Text>
  <UnorderedList>
    {fun.details.map((detail, i) => {
      return (
        <ListItem py={4} pl={10} color={"text"} key={i}>
          <VStack alignItems={"start"} w='full'>
            <Box className="title">
              <Text color={"blue"}>{detail.title}</Text>
              {
          <Box
            pos="absolute"
            top={
              i == 0
                ? "0%"
                : i == length-1
                ? "-50%"
                : "50%"
            }
            left="50%"
            zIndex={20}
            display={"none"}
          >
            <Image
              src={imgDoneWork10}
              maxW={400}
              maxH={250}
              w={"auto"}
            />
          </Box>
        }
            </Box>
            {detail.text && <Text>{detail.text}</Text>}
          </VStack>
        </ListItem>
      );
    })}
  </UnorderedList>
</VStack>
}

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
                        <VStack alignItems={"start"} w='full'>
                          <Box className="title">
                            <Text color={"blue"}>{detail.title}</Text>
                            {
                              <Box
                                pos="absolute"
                                top={
                                  i == 0
                                    ? "0%"
                                    : i == data.employerWarning!.length - 1
                                    ? "-50%"
                                    : "50%"
                                }
                                left="50%"
                                zIndex={20}
                                display={"none"}
                              >
                                <Image
                                  src={imgDoneWork10}
                                  maxW={400}
                                  maxH={250}
                                  w={"auto"}
                                />
                              </Box>
                            }
                          </Box>
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
                        <VStack alignItems={"start"} w='full'>
                          <Box className="title">
                            <Text color={"blue"}>{detail.title}</Text>
                            {
                              <Box
                                pos="absolute"
                                top={
                                  i == 0
                                    ? "0%"
                                    : i == data.employerWarning!.length - 1
                                    ? "-50%"
                                    : "50%"
                                }
                                left="50%"
                                zIndex={20}
                                display={"none"}
                              >
                                <Image
                                  src={imgDoneWork10}
                                  maxW={400}
                                  maxH={250}
                                  w={"auto"}
                                />
                              </Box>
                            }
                            
                          </Box>
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
            title: data.setup != undefined ? "Гол тохируулгууд " : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.setup?.map((fun, index) => {
                  return (
                    <AccordianWidget key={index} fun={fun} length={data.setup!.length }/>
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
                      <Text>{fun.title}</Text>
                      {fun.text && <Text>{fun.text}</Text>}
                    </VStack>
                  );
                })}
              </VStack>
            ),
          },
          {
            title:
              data.trigger != undefined
                ? "Сэдрээгч хүчин зүйлсийг илрүүлж багасгах"
                : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.trigger?.map((fun, index) => {
                  return (
                    <VStack key={index} w={"full"} alignItems={"start"} gap={4}>
                      <Text>{fun.title}</Text>
                      {fun.text && <Text>{fun.text}</Text>}
                    </VStack>
                  );
                })}
              </VStack>
            ),
          },
          {
            title: data.possible != undefined ? "Боломжит тохируулгууд" : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.possible?.map((fun, index) => {
                  return (
                   < AccordianWidget fun={fun} key={index} length={data.possible!.length}/>
                  );
                })}
              </VStack>
            ),
          },
          {
            title: data.functions != undefined ? "Ажил үүргийн функцээр" : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.functions?.map((fun, index) => {
                  return (
                    < AccordianWidget fun={fun} key={index} length={data.functions!.length}/>
                  );
                })}
              </VStack>
            ),
          },
          {
            title:
              data.key != undefined ? "Түлхүү хэрэглэгддэг тохируулгууд:" : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={8}>
                {data.key?.map((fun, index) => {
                  return (
                    < AccordianWidget fun={fun} key={index} length={data.key!.length}/>
                  );
                })}
              </VStack>
            ),
          },
          {
            title: data.condition != undefined ? "Нөхцөл ба Шийдэл" : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={4}>
                <Text>{data.condition?.title}</Text>
                <UnorderedList>
                  {data.condition?.details?.map((detail, i) => {
                    return (
                      <ListItem py={4} pl={10} color={"text"} key={i}>
                        <VStack alignItems={"start"} w='full'>
                          {/* <Box className='title'><Text color={"blue"} >{detail.title}</Text></Box> */}
                          {detail.text && <Text>{detail.text}</Text>}
                        </VStack>
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </VStack>
            ),
          },
        ]}
      />
    </VStack>
  );
};

export default PerformanceDetailWidget;
