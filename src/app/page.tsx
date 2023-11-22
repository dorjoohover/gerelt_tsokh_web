"use client";
import CustomCard, { AdditionCard, SliderCard } from "@/components/card";
import { HStackContainer, VStackContainer } from "@/components/container";
import {
  imgGereltTsokh,
  imgHeader,
  imgHeader1,
  imgInfo,
  imgLogoWhite,
  imgTokhiruulga,
} from "@/global/assets";
import {
  additionInfo,
  gereltTokh,
  more,
  partners,
  purpose,
  purposeText,
  slogan,
  specialInfo,
  tokhiruulga,
  tokhiruulgaMn,
  watchOtherArticle,
} from "@/global/string";
import { additionInfoValues, partnerValues } from "@/values/values";
import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Image,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import Slider from "react-slick";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  return (
    <Box maxW={"auto"}>
      <Box
        position={"relative"}
        height={{
          md: "600px",
          base: "90vh",
        }}
        width={"full"}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider
          {...settings}
          ref={(slider) => {
            setSlider(slider);
          }}
          beforeChange={() => {
            setCurrent(current == 0 ? 1 : 0);
          }}
        >
          <SliderCard
            body={
              <VStack
                w={{
                  md: "40%",
                  base: "100%",
                }}
                gap={8}
                py={{
                  md: 0,
                  base: 16,
                }}
                h={{
                  md: "100%",
                  base: "calc(90vh - 200px)",
                }}
                justifyContent={"center"}
                alignItems={"start"}
              >
                <Heading variant={"display"} mt={6}>
                  {tokhiruulga}
                </Heading>
                <Text variant={"smallTitle"}>{purpose}</Text>
                <Text color={"white"}>{purposeText}</Text>
                <Box
                  h={{
                    md: 120,
                    base: 0,
                  }}
                />
              </VStack>
            }
            footer={<Box />}
            bg={imgHeader}
            current={current}
          />

          <SliderCard
            body={
              <VStack
                w={{
                  md: "40%",
                }}
                gap={8}
                h={{
                  md: "100%",
                  base: "calc(90vh - 200px)",
                }}
                justifyContent={"center"}
                alignItems={"start"}
              >
                <Image src={imgLogoWhite} w={252} />
                <Text variant={"smallTitle"} as={"i"}>
                  {slogan}
                </Text>

                <Box
                  h={{
                    md: 150,
                    base: 0,
                  }}
                />
              </VStack>
            }
            footer={<Box />}
            bg={imgHeader1}
            current={current}
          />
        </Slider>
      </Box>
      <Box h={16} />
      <VStackContainer>
        <HStack
          gap={{ md: 10, base: 6 }}
          flexDir={{
            md: "row",
            base: "column",
          }}
          p={0}
        >
          <Link href={"/about"}>
            <CustomCard
              body={<Image src={imgGereltTsokh} />}
              footer={
                <Heading
                  variant={"title"}
                  fontSize={{
                    md: "22px",
                    base: "16px",
                  }}
                  color={"darkPrime"}
                >
                  {gereltTokh}
                </Heading>
              }
            />
          </Link>

          <Link href={"/tokhiruulga?name=gratitude"}>
            <CustomCard
              body={<Image src={imgTokhiruulga} />}
              footer={
                <Heading
                  variant={"title"}
                  fontSize={{
                    md: "22px",
                    base: "16px",
                  }}
                  color={"darkPrime"}
                >
                  {tokhiruulgaMn}
                </Heading>
              }
            />
          </Link>
        </HStack>
        <Box h={4} />
        <Heading
          variant={"title"}
          color={"prime.default"}
          fontSize={{
            md: "22px",
            base: "16px",
          }}
          m={{
            md: 0,
            base: "auto",
          }}
        >
          {additionInfo}
        </Heading>
        <HStack w={"full"}  gap={{ md: 10, base: 6 }}
          flexDir={{
            md: "row",
            base: "column",
          }}
          p={0}>
          {additionInfoValues.map((value, index) => {
            return (
              <AdditionCard
                icon={value.icon}
                text={value.text}
                key={index}
                onClick={() => router.push(`/info?name=${value.value}`)}
              />
            );
          })}
        </HStack>
        <Box h={12} />
      </VStackContainer>
      <VStack
        w={"full"}
        pos={"relative"}
        px={{ lg: 10, base: 0 }}
        maxW={"1240px"}
        mx={"auto"}
      >
        <Box
          borderRadius={{ md: 12, base: 0 }}
          bg={"darkPrime"}
          h={{
            md: 320,
            base: 222,
          }}
          pos={"absolute"}
          top={0}
          left={{ lg: 10, base: 0 }}
          right={{ lg: 10, base: 0 }}
          zIndex={0}
        />
        <Heading
          variant={"title"}
          fontSize={{
            md: "22px",
            base: "16px",
          }}
          zIndex={1}
          color={"white"}
          mt={9}
          mb={8}
        >
          {specialInfo}
        </Heading>
        <HStackContainer
          margin={{ lg: "0 40px 0 40px", base: "0 24px 0 24px" }}
          w="auto"
        >
          <CustomCard
            body={<Image src={imgInfo} w={"full"} />}
            footer={
              <VStack gap={7}>
                <Heading
                  fontSize={{
                    md: "22px",
                    base: "16px",
                  }}
                  variant={"title"}
                  mb={1}
                  color={"prime.default"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, delectus?
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, inventore...
                </Text>
                <HStack w={"full"} justifyContent={"space-between"}>
                  <Link href={"/"}>
                    <Text>{more}</Text>
                  </Link>
                  <Text>2023.10.30</Text>
                </HStack>
              </VStack>
            }
          />
          <CustomCard
            body={<Image src={imgInfo} w={"full"} />}
            footer={
              <VStack gap={7}>
                <Heading
                  fontSize={{
                    md: "22px",
                    base: "16px",
                  }}
                  variant={"title"}
                  mb={1}
                  color={"prime.default"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, delectus?
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, inventore...
                </Text>
                <HStack w={"full"} justifyContent={"space-between"}>
                  <Link href={"/"}>
                    <Text>{more}</Text>
                  </Link>
                  <Text>2023.10.30</Text>
                </HStack>
              </VStack>
            }
          />
        </HStackContainer>
        <Button
          onClick={() => {
            router.push("/article");
          }}
          textTransform={"none"}
          mt={10}
        >
          {watchOtherArticle}
        </Button>
      </VStack>
      <Box h={12} />
      <VStackContainer>
        <Heading
          variant={"title"}
          mx={"auto"}
          textAlign={"center"}
          color={"prime.default"}
          mb={9}
          fontSize={{
            md: "22px",
            base: "16px",
          }}
        >
          {partners}
        </Heading>

        <Grid
          gridTemplateColumns={{
            md: "repeat(5, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={{
            md: 10,
          }}
          w={"full"}
          alignItems={"center"}
        >
          {partnerValues.map((partner, index) => {
            return (
              <GridItem
                h={{
                  md: "auto",
                  base: "133",
                }}
                borderTop={{
                  md: "none",
                  base: index == 0 ? "1px solid #00BCA9" : "",
                }}
                borderBottom={{
                  md: "none",
                  base:
                    index != partnerValues.length - 1
                      ? "1px solid #00BCA9"
                      : "",
                }}
                py={{ base: 6 }}
                borderColor={{
                  md: "none",
                  base: "prime.default",
                }}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                key={index}
              >
                <Image src={partner} key={index} mx={"auto"} h={"100%"} />
              </GridItem>
            );
          })}
        </Grid>
      </VStackContainer>
      <Box mt={16} />
    </Box>
  );
}
