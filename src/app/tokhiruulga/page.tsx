"use client";
import CustomCheckBox from "@/components/checkbox";
import { VStackContainer } from "@/components/container";
import { Line } from "@/components/line";
import { LineWidget, LineWidgetDetail } from "@/components/lines/article";
import { LinkTitle } from "@/components/link";
import GratitudeWidget from "@/components/tokhiruulga/gratitude";
import OverviewWidget from "@/components/tokhiruulga/overview";
import { performanceData } from "@/data/performance.data";
import { imgFoundation } from "@/global/assets";
import { FormTypes, TokhiruulgaTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
import { feedback, more, send, tokhiruulga } from "@/global/string";
import {
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
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";
import { LegalModel } from "@/model/legal.model";
import { legalData } from "@/data/legal.data";
import { TopicModel } from "@/model/topic.model";
import { topicData } from "@/data/topic.data";

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
  const getData = async () => {
    try {
      switch (type) {
        case TokhiruulgaTypes.performance:
          let filtered = performanceData.filter(
            (d) => d.type == tokhiruulgaTags[3].sub![sub!].value
          );
          setLimit(10);

          setData(
            filtered.filter((d, i) => i >= page * 10 && i < (page + 1) * 10)
          );
          setDataCount(filtered.length ?? 0);
          break;
        case TokhiruulgaTypes.legal:
          let res = await fetch(
            `${api}legal/type/${params.get("type")?.toUpperCase()}`,
            {
              method: "POST",
            }
          ).then((d) => d.json());
          setData(res);

          setLimit(1);

          setDataCount(0);
          break;
        case TokhiruulgaTypes.topic:
          let filteredTopic = topicData.filter(
            (d) => d.type == tokhiruulgaTags[4].sub![sub!].value
          );

          setLimit(filteredTopic.length == 0 ? 10 : filteredTopic.length);
          setData(
            filteredTopic.filter(
              (d, i) => i >= page * 10 && i < (page + 1) * 10
            )
          );
          setDataCount(filteredTopic.length ?? 0);
          break;
      }
    } catch (error) {}
  };
  useEffect(() => {
    if (params.get("name")) {
      let name: any = params.get("name") as keyof typeof TokhiruulgaTypes;
      setType(name ?? TokhiruulgaTypes.gratitude);
      setValue(filterName(name, tokhiruulgaTags));
    }
    getData()
  }, []);
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
    }
  }, [params]);
  const feedbackSend = () => {};
  const contactSend = () => {};
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
        return <Text>{noticeValue}</Text>;
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

                  <Text mb={{ md: 0, base: 4 }} noOfLines={{ md: 3, base: 4 }}>
                    {v.text}
                  </Text>
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

                  <Text mb={{ md: 0, base: 4 }} noOfLines={{ md: 3, base: 4 }}>
                    {v.text}
                  </Text>
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
                    <CustomCheckBox
                      number={feed.number}
                      question={feed.question}
                      key={i}
                      options={feed.options}
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
  );
};
export default TokhiruulgaPage;
