import {
  PerformanceModel,
  PerformanceQuestion,
  PerformanceFunction,
} from "@/model/performance.model";
import {
  Box,
  Heading,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import CustomAccordian from "../accordian";
import { imgArticle1, imgDoneWork10 } from "@/global/assets";
import { FC, useState } from "react";
import Link from "next/link";
type AccordianWidgetType = {
  fun: PerformanceFunction;
  length: number;
  onClick: (value: string) => void;
};

const AccordianWidget: FC<AccordianWidgetType> = ({ fun, length, onClick }) => {
  return (
    <VStack w={"full"} alignItems={"start"} gap={4}>
      <Heading fontSize={"16px"}>{fun.title}</Heading>
      <UnorderedList>
        {fun.details.map((detail, i) => {
          return (
            <Link key={i} href={""} onClick={(e) => e.preventDefault()}>
              <ListItem py={4} pl={10} color={"text"}>
                <VStack alignItems={"start"} w="full">
                  <Box
                    cursor={"pointer"}
                    onClick={() => {
                      if (detail.img != undefined && detail.img != "") {
                        onClick(detail.img);
                      }
                    }}
                  >
                    <Text color={"blue"}>{detail.title}</Text>
                  </Box>
                  {detail.text && <Text>{detail.text}</Text>}
                </VStack>
              </ListItem>
            </Link>
          );
        })}
      </UnorderedList>
    </VStack>
  );
};

const PerformanceDetailWidget = ({ data }: { data: PerformanceModel }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [img, setImg] = useState("");
  const viewImg = (value: string) => {
    {
      setImg(value);
      if (value != "") {
        onOpen();
      }
    }
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
                      <Link key={i} href={""} onClick={(e) => e.preventDefault()}>
                        <ListItem py={4} pl={10} color={"text"}>
                          <VStack alignItems={"start"} w="full">
                            <Box
                              className="title"
                              onClick={() => {
                                if (
                                  detail.img != undefined &&
                                  detail.img != ""
                                ) {
                                  viewImg(detail.img);
                                }
                              }}
                            >
                              <Text color={"blue"}>{detail.title}</Text>
                            </Box>
                            {detail.text && <Text>{detail.text}</Text>}
                          </VStack>
                        </ListItem>
                      </Link>
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
              <VStack w={"full"} alignItems={"start"} gap={4} id="detail">
                <UnorderedList>
                  {data.employerWarning?.map((detail, i) => {
                    return (
                      <Link key={i} href={""} onClick={(e) => e.preventDefault()}>
                        <ListItem py={4} pl={10} color={"text"}>
                          <VStack alignItems={"start"} w="full">
                            <Box
                              className="title"
                              onClick={() => {
                                if (
                                  detail.img != undefined &&
                                  detail.img != ""
                                ) {
                                  viewImg(detail.img);
                                }
                              }}
                            >
                              {/* <Link key={i}> */}
                              <Text color={"blue"}>{detail.title}</Text>
                              {/* </Link> */}
                            </Box>
                            {detail.text && <Text>{detail.text}</Text>}
                          </VStack>
                        </ListItem>
                      </Link>
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
                    <AccordianWidget
                      onClick={(value: string) => {
                        viewImg(value);
                      }}
                      key={index}
                      fun={fun}
                      length={data.setup!.length}
                    />
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
                    <Link key={index} href="#detail">
                      <VStack
                        key={index}
                        w={"full"}
                        alignItems={"start"}
                        gap={4}
                      >
                        <Heading fontSize={"16px"}>{fun.title}</Heading>
                        {fun.text && <Text>{fun.text}</Text>}
                      </VStack>
                    </Link>
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
                    <Link key={index} href={"#detail"}>
                      <VStack
                        key={index}
                        w={"full"}
                        alignItems={"start"}
                        gap={4}
                      >
                        <Heading fontSize={"16px"}>{fun.title}</Heading>
                        {fun.text && <Text>{fun.text}</Text>}
                      </VStack>
                    </Link>
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
                    <AccordianWidget
                      onClick={(value: string) => {
                        viewImg(value);
                      }}
                      fun={fun}
                      key={index}
                      length={data.possible!.length}
                    />
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
                    <AccordianWidget
                      onClick={(value: string) => {
                        viewImg(value);
                      }}
                      fun={fun}
                      key={index}
                      length={data.functions!.length}
                    />
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
                    <AccordianWidget
                      onClick={(value: string) => {
                        viewImg(value);
                      }}
                      fun={fun}
                      key={index}
                      length={data.key!.length}
                    />
                  );
                })}
              </VStack>
            ),
          },
          {
            title: data.condition != undefined ? "Нөхцөл ба Шийдэл" : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={4}>
                <Heading fontSize={"16px"}>{data.condition?.title}</Heading>
                <UnorderedList>
                  {data.condition?.details?.map((detail, i) => {
                    return (
                      <Link key={i} href={""} onClick={(e) => e.preventDefault()}>
                        <ListItem py={4} pl={10} color={"text"}>
                          <VStack alignItems={"start"} w="full">
                            {/* <Box className='title'><Text color={"blue"} >{detail.title}</Text></Box> */}
                            {detail.text && <Text>{detail.text}</Text>}
                          </VStack>
                        </ListItem>
                      </Link>
                    );
                  })}
                </UnorderedList>
              </VStack>
            ),
          },
        ]}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={4} mt={10}>
            <Image src={img} w={"full"} alt="img" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default PerformanceDetailWidget;
