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
} from "@/global/values";
import {
  Box,
  Center,
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function About() {
  return (
    <VStackContainer gap={{ md: 12, base: 9 }}>
      <Text
        variant={"title"}
        mt={{
          md: 12,
          base: 9,
        }}
        color={"prime.default"}
        mx={"auto"}
      >
        {aboutUs}
      </Text>
      <RoundedCard title={vision} text={visionValue} />
      <RoundedCard title={mission} text={missionValue} />
      <Text variant={"title"} mt={1} color={"prime.default"} mx={"auto"}>
        {valuable}
      </Text>
      <HStack
        gap={{ md: 10, base: 7 }}
        w={"100%"}
        flexDir={{ md: "row", base: "column" }}
      >
        {valuableValues.map((v, index) => {
          return <RoundedCard title={v.title} text={v.text} key={index} />;
        })}
      </HStack>
      <Text variant={"title"} mt={1} color={"prime.default"} mx={"auto"}>
        {directionActivity}
      </Text>
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
      <Text
        variant={"title"}
        mt={4}
        color={"prime.default"}
        mx={{ md: 0, base: "auto" }}
      >
        {foundationHistory}
      </Text>

      <Box w={"full"}>
        <HStack w={"full"} alignItems={"start"} mb={10} flexDir={{md: 'row', base: 'column'}}>
         
          <Box w={{md: "50%", base: '100%'}}>
            <Text variant={"smallTitle"} color={"text"} mb={{md: 8, base: 4}}>
              {foundationHistoryValue.title}
            </Text>
            {foundationHistoryValue.semiTitle && (
              <Text mb={{md: 12, base: 4}} fontStyle={"italic"}>
                {foundationHistoryValue.semiTitle}
              </Text>
            )}
            <Text >{foundationHistoryValue.text}</Text>
          </Box>
          <Box w={{md: "50%", base: '100%'}} ml={{ md: 10 }} mt={{md: 0, base: 8}} >
            <Image src={foundationHistoryValue.img} />
          </Box>
        </HStack>

        <Text>{foundationHistoryValue.text1}</Text>
      </Box>
    </VStackContainer>
  );
}
