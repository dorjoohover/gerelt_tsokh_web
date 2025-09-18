"use client";

import { VStackContainer } from "@/components/container";
import { Line } from "@/components/line";
import { LineWidget, LineWidgetDetail } from "@/components/lines/article";
import { LinkTitle } from "@/components/link";
import GratitudeWidget from "@/components/tokhiruulga/gratitude";
import OverviewWidget from "@/components/tokhiruulga/overview";

import { imgAdvice, imgFoundation } from "@/global/assets";
import { FormTypes, TokhiruulgaTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import {
  advice,
  api,
  contactValues,
  feedbackValues,
  gratitudeValues,
  noticeValue,
  noticeValues,
  overviewValues,
} from "@/values/values";
import { tokhiruulgaTags } from "@/values/tags";
import { PerformanceModel } from "@/model/performance.model";

import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";
import { LegalModel } from "@/model/legal.model";
import { legalData } from "@/data/legal.data";
import { TopicModel } from "@/model/topic.model";
import { topicData } from "@/data/topic.data";
import axios from "axios";
import { feedback, more, send, tokhiruulga } from "@/global/string";
import RadioBox from "@/components/radiobox";
import { FaPlay } from "react-icons/fa";
import { MetaOg } from "@/components/meta/home";
import RichContent from "@/components/html";

type FeedbackType = {
  number: number;
  value: string;
  text: string;
  question: string;
};
type ContactType = {
  firstname: string;
  email: string;
  lastname: string;
  title: string;
  text: string;
};
const TokhiruulgaPage = () => {
  const params = useSearchParams();
  const [page, setPage] = useState(0);
  const [type, setType] = useState<TokhiruulgaTypes>(
    TokhiruulgaTypes.gratitude
  );
  const [data, setData] = useState<any[]>([]);

  const [value, setValue] = useState("");
  const [sub, setSub] = useState<number | null>(0);
  const [selected, setSelected] = useState<any | null>(null);
  const [dataCount, setDataCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [ct, setCt] = useState<ContactType>({
    email: "",
    firstname: "",
    lastname: "",
    text: "",
    title: "",
  });
  const [fb, setFb] = useState<FeedbackType[]>([
    {
      number: 0,
      question: "",
      text: "emp",
      value: "",
    },
    {
      number: 1,
      question: "",
      text: "",
      value: "",
    },
    {
      number: 2,
      question: "",
      text: "",
      value: "",
    },
    {
      number: 3,
      question: "",
      text: "",
      value: "",
    },
    {
      number: 4,
      question: "",
      text: "",
      value: "",
    },
    {
      number: 5,
      question: "",
      text: "",
      value: "",
    },
    {
      number: 6,
      question: "",
      text: "",
      value: "",
    },
    {
      number: 7,
      question: "",
      text: "",
      value: "",
    },
  ]);
  const getData = async () => {
    try {
      switch (type) {
        case TokhiruulgaTypes.performance:
          let performanceRes = await axios.post(
            `${api}medical/type/${params.get("type")?.toUpperCase()}`,
            {
              limit: 10,
              page: page,
            }
          );
          setData(performanceRes.data.data);
          setLimit(10);

          setDataCount(performanceRes.data.count);

          break;
        case TokhiruulgaTypes.legal:
          await axios
            .post(`${api}legal/type/${params.get("type")?.toUpperCase()}`, {
              page: page,
              limit: 20,
            })
            .then((d) => {
              setData(d.data.data);

              setLimit(20);

              setDataCount(d.data.count);
            });
          break;
        case TokhiruulgaTypes.topic:
          await axios
            .post(`${api}topic/type/${params.get("type")?.toUpperCase()}`, {
              limit: 10,
              page: page,
            })
            .then((d) => {
              setLimit(10);
              setData(d.data.data);
              setDataCount(d.data.count);
            });

          break;
      }
    } catch (error) {}
  };
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    getData();
    setValue(filterName(type, tokhiruulgaTags));
  }, [type, page]);
  useEffect(() => {
    getData();
  }, [sub]);
  useEffect(() => {
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof TokhiruulgaTypes;
      setType(name ?? TokhiruulgaTypes.gratitude);
      setValue(filterName(name, tokhiruulgaTags));
      setPage(0);
    }
    getData();
  }, [params]);
  const feedbackSend = async () => {
    try {
      if (fb.find((f) => f.text == "") == undefined) {
        await axios.post(`${api}feedback/create`, fb.slice(1)).then((d) => {
          toast({
            duration: 3000,
            position: "top",
            title: "Амжилттай илгээлээ.",
            status: "success",
          });
          location.reload();
        });
      } else {
        toast({
          duration: 3000,
          position: "top",
          title: "Талбарыг бүрэн бөглөнө үү.",
          status: "warning",
        });
      }
    } catch (error) {}
  };
  const contactSend = async () => {
    try {
      if (
        ct.email != "" &&
        ct.firstname != "" &&
        ct.lastname != "" &&
        ct.text != "" &&
        ct.title != "" &&
        ct.email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        await axios
          .post(`${api}contact/create`, {
            firstname: ct.firstname,
            lastname: ct.lastname,
            email: ct.email,
            title: ct.title,
            text: ct.text,
          })
          .then((d) => {
            toast({
              position: "top",
              duration: 3000,
              title: "Амжилттай илгээлээ.",
              status: "success",
            });
            location.reload();
          });
      } else {
        toast({
          duration: 3000,
          title: "Талбарыг бүрэн бөглөнө үү.",
          status: "warning",
        });
      }
    } catch (error) {}
  };
  const changePage = (): ReactNode => {
    switch (type) {
      case TokhiruulgaTypes.gratitude:
        return (
          <GratitudeWidget
            img={gratitudeValues.img}
            text={gratitudeValues.text}
            text1={gratitudeValues.text1}
          />
        );
      case TokhiruulgaTypes.overview:
        return (
          <OverviewWidget
            img={overviewValues.img}
            text={overviewValues.text}
            purpose={overviewValues.purpose}
            question={overviewValues.question}
            uri={overviewValues.uri}
          />
        );
      case TokhiruulgaTypes.notice:
        return (
          <Heading fontSize={"20px"} color={"text"} lineHeight={1.5}>
            {noticeValue}
          </Heading>
        );
      case TokhiruulgaTypes.performance:
        return (
          <VStack w={"full"} alignItems={"start"} gap={{ lg: 78, base: 10 }}>
            {data?.map((d, i) => {
              let v = d as PerformanceModel;
              return (
                <VStack w={"full"} alignItems={"start"} key={i}>
                  <Heading
                    fontSize={{
                      md: "22px",
                      base: "16px",
                    }}
                    variant={"title"}
                    color={"text"}
                  >
                    {v.title}
                  </Heading>

                  <Box mb={{ md: 0, base: 4 }} noOfLines={{ md: 3, base: 4 }}>
                    {" "}
                    <RichContent text={d.text} />
                  </Box>
                  <Link href={`/${type}?id=${v._id}`}>
                    <Text textDecor={"underline"}>{more}</Text>
                  </Link>
                </VStack>
              );
            })}
          </VStack>
        );
      case TokhiruulgaTypes.topic:
        return (
          <VStack w={"full"} alignItems={"start"} gap={{ lg: 78, base: 10 }}>
            {data?.map((d, i) => {
              let v = d as TopicModel;
              return (
                <VStack w={"full"} alignItems={"start"} key={i}>
                  <Heading
                    fontSize={{
                      md: "22px",
                      base: "16px",
                    }}
                    variant={"title"}
                    color={"text"}
                  >
                    {v.title}
                  </Heading>

                  <Box
                    mb={{ md: 0, base: 4 }}
                    noOfLines={{ md: 3, base: 4 }}
                    dangerouslySetInnerHTML={{
                      __html: d?.text?.replaceAll('"', "") ?? "",
                    }}
                  ></Box>
                  <Link href={`/${type}?id=${v._id}`}>
                    <Text textDecor={"underline"}>{more}</Text>
                  </Link>
                </VStack>
              );
            })}
          </VStack>
        );
      case TokhiruulgaTypes.legal:
        return (
          <VStack w={"full"} alignItems={"start"} gap={4}>
            {data?.map((d, i) => {
              let v = d as LegalModel;
              return (
                <VStack w={"full"} alignItems={"start"} key={i}>
                  <Link href={`/${type}?id=${v._id}`}>
                    <Text textDecor={"underline"}>{v.title}</Text>
                  </Link>
                </VStack>
              );
            })}
          </VStack>
        );
      case TokhiruulgaTypes.advice:
        return (
          <Box pos={"relative"} w={"full"}>
            <Link href={advice} target="_blank">
              <Image src={imgAdvice} alt={""} w={"full"} />
              <Box
                pos={"absolute"}
                zIndex={5}
                top={"50%"}
                left={"50%"}
                transform={"translate(-50%, -50%)"}
                display={"flex"}
                bg={"red"}
                borderRadius={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                w={16}
                h={16}
              >
                <Icon as={FaPlay} boxSize={25} color={"white"} />
              </Box>
            </Link>
          </Box>
        );
      case TokhiruulgaTypes.feedback:
        return (
          <VStack w={"full"} gap={10} alignItems={"start"}>
            <Text>
              Хүртээмжтэй хөдөлмөр эхлэлт болон ажлын байрны тохируулгатай
              холбоотойгоор ямар мэдээлэл хайж энэхүү цахим хуудсанд маань
              хандаж байгаагаа хуваалцана уу. Мөн цаашид үүгээр дамжуулан ямар
              зөвлөгөө, мэдээлэл, үйлчилгээ түгээдэг болбол хэрэгтэй байх талаар
              бидэнтэй саналаа хуваалцана уу. Баярлалаа.
            </Text>
            {feedbackValues.map((feed, i) => {
              switch (feed.type) {
                case FormTypes.checkbox:
                  return (
                    <RadioBox
                      number={feed.number}
                      question={feed.question}
                      key={i}
                      options={feed.options}
                      onChange={(e) => {
                        const last = fb.slice(i + 2);
                        setFb((prev) => [
                          ...prev.slice(0, i + 1),
                          {
                            number: feed.number,
                            question: feed.question,
                            text: feed.options![e].text,
                            value: feed.options![e].value,
                          },
                          ...last,
                        ]);
                      }}
                    />
                  );
                case FormTypes.textarea:
                  return (
                    <VStack w={"full"} key={i} alignItems={"start"}>
                      <Text
                        mb={2}
                        variant={"smallTitle"}
                        color={"text"}
                      >{`${feed.number}. ${feed.question}`}</Text>
                      <Textarea
                        onChange={(e) => {
                          if (i != 6) {
                            setFb((prev) => [
                              ...prev.slice(0, i + 1),
                              {
                                number: feed.number,
                                question: feed.question,
                                text: e.target.value,
                                value: "",
                              },
                              ...fb.slice(i + 2),
                            ]);
                          } else {
                            setFb((prev) => [
                              ...prev.slice(0, i + 1),
                              {
                                number: feed.number,
                                question: feed.question,
                                text: e.target.value,
                                value: "",
                              },
                            ]);
                          }
                        }}
                        borderColor={"prime.default"}
                        borderRadius={2.25}
                        maxLength={feed.limit}
                        placeholder={feed.label}
                      />
                    </VStack>
                  );
              }
            })}
            <Button
              fontWeight={"bold"}
              fontSize={16}
              px={8}
              bg={"prime.default"}
              onClick={feedbackSend}
            >
              {send}
            </Button>
          </VStack>
        );
      case TokhiruulgaTypes.contact:
        return (
          <VStack w={"full"} gap={10} alignItems={"start"}>
            <Heading
              fontSize={"20px"}
              mb={2}
              variant={"smallTitle"}
              color={"text"}
            >
              {feedback}
            </Heading>
            <Grid
              w={"full"}
              gridTemplateColumns={{
                md: "repeat(2, 1fr)",
              }}
              gap={{ sm: 9, base: 6 }}
            >
              {contactValues.map((contact, i) => {
                switch (contact.type) {
                  case FormTypes.input:
                    return (
                      <GridItem
                        key={i}
                        gridColumnStart={{
                          sm: contact.flex ? "span 1" : "span 2",
                          base: "span 2",
                        }}
                      >
                        <Input
                          onChange={(e) => {
                            setCt((prev) => ({
                              ...prev,
                              [contact.code]: e.target.value,
                            }));
                          }}
                          maxLength={contact.limit}
                          placeholder={contact.label}
                          borderColor={"prime.default"}
                          borderRadius={9}
                          px={4}
                          py={3}
                        />
                      </GridItem>
                    );
                  case FormTypes.textarea:
                    return (
                      <GridItem
                        key={i}
                        gridColumnStart={{
                          sm: contact.flex ? "span 1" : "span 2",
                          base: "span 2",
                        }}
                      >
                        <Textarea
                          onChange={(e) => {
                            setCt((prev) => ({
                              ...prev,
                              [contact.code]: e.target.value,
                            }));
                          }}
                          borderColor={"prime.default"}
                          borderRadius={9}
                          px={4}
                          py={3}
                          maxLength={contact.limit}
                          placeholder={contact.label}
                        />
                      </GridItem>
                    );
                }
              })}
            </Grid>
            <Button
              fontWeight={"bold"}
              fontSize={16}
              px={8}
              bg={"prime.default"}
              onClick={contactSend}
            >
              {send}
            </Button>
          </VStack>
        );
      default:
        return <VStack></VStack>;
    }
  };

  return (
    <div>
      <MetaOg
        title={
          selected?.title ??
          filterName(params.get("name") ?? "", tokhiruulgaTags) ??
          "ТОХИРУУЛГА.МН"
        }
        bg={selected?.img ? `${api}${selected?.img}` : undefined}
        description={selected?.text ?? "ТОХИРУУЛГА.МН"}
      />
      <VStackContainer>
        <HStack w={"full"} display={{ lg: "flex", base: "none" }}>
          <LinkTitle
            title={value}
            special={tokhiruulga}
            value={value}
            detail={selected ? selected.title : ""}
            current={selected == null ? 1 : 2}
          />
        </HStack>
        <Line
          child={changePage()}
          filter={tokhiruulgaTags}
          limit={limit}
          page={page}
          type={type}
          value={value}
          length={selected || data?.length < 1 ? 1 : dataCount}
          changePage={(value) => setPage(value)}
          changeType={(value, s) => {
            setType(value);
            setPage(0);
            if (s) {
              setSub(0);
            }
            setSelected(null);
          }}
          sub={sub}
          changeSub={(e) => {
            setSub(e);
          }}
        />
      </VStackContainer>
    </div>
  );
};
export default TokhiruulgaPage;
