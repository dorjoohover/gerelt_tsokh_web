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
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import CustomAccordian from "../accordian";

import { FC, useState } from "react";
import { MedicalTitle } from "@/global/functions";
import { api } from "@/values/values";
type AccordianWidgetType = {
  fun: PerformanceFunction;
  length: number;
  onClick: (value: string) => void;
};

const AccordianWidget: FC<AccordianWidgetType> = ({ fun, length, onClick }) => {
  return (
    <VStack w={"full"} alignItems={"start"} gap={4}>
      {fun.title && <Heading fontSize={"16px"}>{fun.title}</Heading>}
      <UnorderedList>
        {fun?.detail?.map((detail, i) => {
          return (
            <ListItem py={4} pl={10} color={"text"} key={i}>
              <VStack alignItems={"start"} w="full">
                <Box
                  cursor={"pointer"}
                  onClick={() => {
                    if (detail.img != "" && detail.img != undefined) {
                      onClick(detail.img);
                    }
                  }}
                >
                  <Text color={"blue"}>{detail.title}</Text>
                </Box>
                {detail.text && <Text>{detail.text}</Text>}
              </VStack>
            </ListItem>
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

      <VStack w={"full"} alignItems={"start"}>
        <Box
          mb={{ md: 0, base: 4 }}
          noOfLines={{ md: 3, base: 4 }}
          dangerouslySetInnerHTML={{
            __html: data?.text?.replaceAll('"', "") ?? "",
          }}
        ></Box>
      </VStack>

      <CustomAccordian
        data={[
          ...data.details.map((e) => {
            return {
              title: MedicalTitle(e.type!),
              child: (
                <VStack w={"full"} alignItems={"start"} gap={8}>
                  {e.details?.map((detail, i) => {
                    return (
                      <AccordianWidget
                        onClick={(value: string) => {
                          viewImg(value);
                        }}
                        key={i}
                        fun={detail}
                        length={e.details!.length}
                      />
                    );
                  })}
                </VStack>
              ),
            };
          }),
          {
            title: "Нөхцөл ба Шийдэл",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={4}>
                <UnorderedList>
                  {data.condition?.map((detail, i) => {
                    return (
                      <ListItem py={4} pl={10} color={"text"} key={i}>
                        <VStack alignItems={"start"} w="full">
                          <Text>{detail}</Text>
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

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={4} mt={10}>
            <Image src={`${api}${img}`} w={"full"} alt="img" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default PerformanceDetailWidget;
