import { copyrightFooter, gereltTokh, tokhiruulga } from "@/global/string";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { HStackContainer } from "./container";
import { tokhiruulgaNavValues } from "@/values/navbar.value";
import { socials } from "@/values/values";
import Link from "next/link";

const Footer = () => {
  return (
    <VStack w={"full"} bg={"darkPrime"} px={{ md: 10 }} py={{ md: 14 }}>
      <HStack
        maxW={"1240px"}
        w={"full"}
        px={{ md: 10, base: 6 }}
        alignItems={"start"}
        m="auto"
      >
        <VStack w={"full"} flex={1} alignItems={"start"} gap={{ md: 10 }}>
          <Text color={"white"} variant={"normal"} fontWeight={"bold"}>
            {gereltTokh}
          </Text>
          <Link href={"mailto: gerelt.tsokhb@tokhiruulga.mn"} target="_blank">
            <Text color={"white"} variant={"normal"}>
              {" "}
              gerelt.tsokhb@tokhiruulga.mn
            </Text>
          </Link>
        </VStack>
        <VStack w={"full"} flex={1} alignItems={"start"} gap={{ md: 10 }}>
          <Text color={"white"} variant={"normal"} fontWeight={"bold"}>
            {tokhiruulga}
          </Text>
          <HStack w={"full"}>
            <VStack flex={1} w={"full"} alignItems={"start"}>
              {tokhiruulgaNavValues[0].link.slice(0, 5).map((link, i) => {
                return (
                  <Link href={link.value} key={i}>
                    <Text color={"white"} variant={"normal"} pb={2}>
                      {link.name}
                    </Text>
                  </Link>
                );
              })}
            </VStack>
            <VStack flex={1} w={"full"} alignItems={"start"}>
              {tokhiruulgaNavValues[0].link.slice(5, 10).map((link, i) => {
                return (
                  <Link href={link.value} key={i}>
                    <Text color={"white"} variant={"normal"} pb={2}>
                      {link.name}
                    </Text>
                  </Link>
                );
              })}
            </VStack>
          </HStack>
        </VStack>
      </HStack>
      <HStack
        w={"full"}
        justifyContent={"space-between"}
        maxW={"1240px"}
        mx={"auto"}
        px={{ md: 10, base: 6 }}
        mt={{ md: 20 }}
      >
        <Text color={"white"} variant={"normal"}>{`© ${copyrightFooter}`}</Text>
        <HStack gap={1}>
          {socials.map((social, i) => {
            return (
              <Link href={social.uri} target="_blank" key={i}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  bg={"prime.default"}
                  alignItems={"center"}
                  w={6}
                  h={6}
                  borderRadius={8}
                >
                  <Icon as={social.icon} boxSize={4} color={"white"} />
                </Box>
              </Link>
            );
          })}
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Footer;
