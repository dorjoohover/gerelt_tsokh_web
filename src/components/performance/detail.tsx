import {
  PerformanceModel,
  PerformanceQuestion,
  PerformanceFunction,
} from "@/model/performance.model";
import {
  Box,
  Button,
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
  useToast,
} from "@chakra-ui/react";
import CustomAccordian from "../accordian";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FC, useState } from "react";
import { MedicalTitle } from "@/global/functions";
import { api } from "@/values/values";
import Link from "next/link";
import { getCookie } from "cookies-next";
import axios from "axios";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import { settings } from "@/app/page";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
type AccordianWidgetType = {
  fun: PerformanceFunction;
  length: number;
  onClick: (value: string[]) => void;
};

const AccordianWidget: FC<AccordianWidgetType> = ({ fun, length, onClick }) => {
  return (
    <VStack w={"full"} alignItems={"start"} gap={4}>
      {fun.title && <Heading fontSize={"16px"}>{fun.title}</Heading>}
      <UnorderedList>
        {fun?.detail?.map((detail, i) => {
          return (
            <Link key={i} href={""} onClick={(e) => e.preventDefault()}>
              <ListItem py={4} pl={10} color={"text"}>
                <VStack alignItems={"start"} w="full">
                  <Box
                    cursor={"pointer"}
                    onClick={() => {
                      if (detail.img != undefined && detail.img.length > 0) {
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
  const [img, setImg] = useState<(string | undefined)[]>([]);
  const toast = useToast();
  const token = getCookie("token");
  const router = useRouter();
  const deletePerformance = async () => {
    try {
      await axios
        .delete(`${api}medical/delete/${data._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((d) => {
          toast({
            title: "Устгалаа.",
          });
          router.refresh();
        });
    } catch (error) {}
  };
  const viewImg = (value: string[]) => {
    {
      setImg(value);
      if (value.length > 0) {
        onOpen();
      }
    }
  };
  const [slider, setSlider] = useState<Slider | null>(null);
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
          dangerouslySetInnerHTML={{
            __html: data?.text?.replaceAll('"', "") ?? "",
          }}
        ></Box>
      </VStack>

      <CustomAccordian
        data={[
          {
            title:
              data.setup != undefined && data.setup.length > 0
                ? "Гол тохирлууд"
                : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={4} id="detail">
                {data.setup != undefined &&
                  data.setup.length > 0 &&
                  data.setup?.[0] != null && (
                    <Box
                      mb={{ md: 0, base: 4 }}
                      dangerouslySetInnerHTML={{
                        __html: data?.setup?.[0].replaceAll('"', "") ?? "",
                      }}
                    ></Box>
                  )}
              </VStack>
            ),
          },
          ...data.details.map((e) => {
            return {
              title: MedicalTitle(e.type!),

              child: (
                <VStack w={"full"} alignItems={"start"} gap={8}>
                  {e.details?.map((detail, i) => {
                    return (
                      <AccordianWidget
                        onClick={(value: string[]) => {
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
            title:
              data.condition != undefined && data.condition?.length > 0
                ? "Нөхцөл ба Шийдэл"
                : "",
            child: (
              <VStack w={"full"} alignItems={"start"} gap={4} id="detail">
                <Text>
                  Энд танилцуулж буй кэйсүүд амьдралд бодитой тохиолдсон боловч
                  хүн хүний хувьд их, бага хэмжээгээр ялгаатай нөхцөл байдал
                  үүсдэг учир эдгээрийг зөвхөн cсанаа авах зорилгоор ашиглахыг
                  хүсэж байна.
                </Text>
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
      {token && data._id != "" && (
        <Button onClick={deletePerformance}>Устгах</Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={4} mt={10}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {img?.map((image, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Image src={`${api}${image}`} w={"full"} alt="img" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default PerformanceDetailWidget;
