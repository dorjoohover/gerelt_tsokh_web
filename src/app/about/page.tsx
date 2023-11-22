import { RoundedCard } from "@/components/card";
import { VStackContainer } from "@/components/container";

import {
  aboutUs,
  directionActivity,
  foundationHistory,
  mission,
  valuable,
  vision,
} from "@/global/string";
import {
  directionActivityValues,
  foundationHistoryValue,
  missionValue,
  valuableValues,
  visionValue,
} from "@/values/values";
import {
  Box,
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function About() {
  return (
    <VStackContainer gap={{ md: 12, base: 9 }}>
      <Heading
        variant={"title"}
        mt={{
          md: 12,
          base: 9,
        }}
        fontSize={{
          md: "22px",
          base: "16px",
        }}
        color={"prime.default"}
        mx={"auto"}
      >
        {aboutUs}
      </Heading>
      <RoundedCard title={vision} text={visionValue} />
      <RoundedCard title={mission} text={missionValue} />
      <Heading
        fontSize={{
          md: "22px",
          base: "16px",
        }}
        variant={"title"}
        mt={1}
        color={"prime.default"}
        mx={"auto"}
      >
        {valuable}
      </Heading>
      <HStack
        gap={{ md: 10, base: 7 }}
        w={"100%"}
        flexDir={{ md: "row", base: "column" }}
      >
        {valuableValues.map((v, index) => {
          return <RoundedCard title={v.title} text={v.text} key={index} />;
        })}
      </HStack>
      <Heading
        fontSize={{
          md: "22px",
          base: "16px",
        }}
        variant={"title"}
        mt={1}
        color={"prime.default"}
        mx={"auto"}
      >
        {directionActivity}
      </Heading>
      <HStack gap={10} w={"100%"} flexDir={{ md: "row", base: "column" }}>
        {directionActivityValues.map((d, index) => {
          return (
            <RoundedCard
              icon={d.icon}
              bg="prime.default"
              py={9}
              text={d.text}
              key={index}
            />
          );
        })}
      </HStack>
      <Heading
        fontSize={{
          md: "22px",
          base: "16px",
        }}
        variant={"title"}
        mt={4}
        color={"prime.default"}
        mx={{ md: 0, base: "auto" }}
      >
        {foundationHistory}
      </Heading>
      <Box w={"full"} alignItems={"start"} fontSize={"20px"} color={"text"}>
        <Box
          w={{ md: "50%", base: "100%" }}
          ml={{ md: 10, base: 0 }}
          float={"right"}
        >
          <Image src={foundationHistoryValue.img} alt={foundationHistory} />
        </Box>
        <Heading
          fontSize={'20px'}
          variant={"smallTitle"}
          color={"text"}
          mb={{ md: 8, base: 4 }}
        >
          {foundationHistoryValue.title}
        </Heading>
        <Text mb={{ md: 12, base: 4 }} fontStyle={"italic"}>
          {foundationHistoryValue.semiTitle}
        </Text>
        <Text as={"span"}>{foundationHistoryValue.text}</Text>
      </Box>
    </VStackContainer>
  );
}
