"use client";
import { imgLogo, svgCancel, svgMenu, svgSearch } from "@/global/assets";
import { gereltTokh, menu, navText, tokhiruulga } from "@/global/string";
import { gereltNavValues, tokhiruulgaNavValues } from "@/values/navbar.value";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  SlideFade,
  Stack,
  Text,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, FC } from "react";
type NavItemType = {
  name: string;
  value: string;
};

export type NavItemsTypes = {
  title: string;
  link: NavItemType[];
  onClick?: () => void;
};
const NavItem: FC<NavItemsTypes> = ({ title, link, onClick }) => {
  return (
    <VStack
      w={"full"}
      alignItems={"start" }
    >
      <Text
        w={{ base: "full", sm: "auto" }}
        variant={"smallTitle"}
        color={"white"}
        pb={3}
        borderBottom={"1px solid white"}
        mb={3}
      >
        {title}
      </Text>
      {link.map((l, i) => {
        return (
          <Link href={`${l.value}`} key={i} onClick={onClick}>
            <Text
              color={"waterPrime"}
              variant={"normal"}
              textAlign={{ md: "center", sm: "center", base: "start" }}
              mb={3}
            >
              {l.name}
            </Text>
          </Link>
        );
      })}
    </VStack>
  );
};

const iconFrame = keyframes`
  0% { transform: scale(0);  }
  100% { transform: scale(1);  }
`;
const iconEndFrame = keyframes`
  0% { transform: scale(1);  }
  100% { transform: scale(0);  }
`;
const navFrame = keyframes`
  0% { transform: scale(0);  }
  100% { transform: scale(1);  }
`;
const navEndFrame = keyframes`
  0% { transform: scale(1);  }
  100% { transform: scale(0);  }
`;
const iconAnimation = `${iconFrame} 0.3s ease-in-out forwards`;
const iconEndAnimation = `${iconEndFrame} 0.3s ease-in-out forwards`;

const Navbar = () => {
  const [gerelt, setGerelt] = useState(false);
  const [tokhiruulgaActive, setTokhiruulga] = useState(false);
  const [search, setSearch] = useState(false);
  const [active, setActive] = useState(false);

  const reset = () => {
    setActive(false);
    setGerelt(false);
    setSearch(false);
    setTokhiruulga(false);
  };
  return (
    <Box
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      borderBottom={"5px solid #00BCA9"}
      borderColor={"prime.default"}
      zIndex={10}
      bg={"white"}
    >
      <HStack
        w={"full"}
        mx={"auto"}
        maxW={"1240px"}
        px={{ md: 10, base: 6 }}
        justifyContent={"space-between"}
      >
        <Box py={4}>
          <Link href={"/"} onClick={reset}>
            <Image alt="logo" src={imgLogo} h={12} />
          </Link>
        </Box>
        <HStack w={"full"} justifyContent={"end"}>
          {/* <Text
            variant={"smallTitle"}
            color={"prime.default"}
            fontStyle={"italic"}
            mr={{ md: 8 }}
          >
            {navText}
          </Text> */}
          <HStack
            borderRadius={9}
            w={"auto"}
            className="flex-animation"
            flex={search ? 1 : 0}
            justifyContent={"end"}
            alignItems={"center"}
            h={10}
            border={"1px solid #00BCA9"}
            borderColor={"prime.default"}
            ml={6}
          >
            {search && (
              <Input
                border={"none"}
                w={"100%"}
                onChange={(e) => console.log(e.target.value)}
              />
            )}
            <Button
              p={0}
              h={"auto"}
              bg={"none"}
              mr={1.25}
              w={10}
              _hover={{
                bg: "none",
              }}
              textAlign={"center"}
              justifyContent={"center"}
              onClick={() => setSearch(!search)}
            >
              <Box
                as={motion.div}
                display={search ? "flex" : "none"}
                animation={search ? iconAnimation : iconEndAnimation}
              >
                <CloseIcon color={"prime.default"} />
              </Box>

              <Box
                as={motion.div}
                display={!search ? "flex" : "none"}
                animation={!search ? iconAnimation : iconEndAnimation}
              >
                <Image src={svgSearch} w={22} h={22} mx={"auto"} />
              </Box>
            </Button>
          </HStack>
          <Button
            p={0}
            h={"auto"}
            bg={"none"}
            _hover={{
              bg: "none",
            }}
            onClick={() => setGerelt(!gerelt)}
            display={{ md: "inline-flex", base: "none" }}
            zIndex={gerelt ? 30 : 10}
          >
            <HStack
              borderRadius={9}
              justifyContent={"center"}
              alignItems={"center"}
              h={10}
              px={2.5}
              border={"1px solid #00BCA9"}
              borderColor={gerelt ? "white" : "prime.default"}
            >
              <Box
                as={motion.div}
                animation={!gerelt ? iconAnimation : iconEndAnimation}
                display={!gerelt ? "flex" : "none"}
              >
                <Image src={svgMenu} w={22} h={22} mr={4.5} />
              </Box>
              <Box
                as={motion.div}
                animation={gerelt ? iconAnimation : iconEndAnimation}
                display={gerelt ? "flex" : "none"}
              >
                <Image src={svgCancel} w={22} h={22} mr={4.5} />
              </Box>
              <Text color={gerelt ? "white" : "prime.default"}>
                {gereltTokh}
              </Text>
            </HStack>
          </Button>
          <Button
            p={0}
            h={"auto"}
            bg={"none"}
            _hover={{
              bg: "none",
            }}
            display={{ md: "inline-flex", base: "none" }}
            onClick={() => setTokhiruulga(!tokhiruulgaActive)}
            zIndex={tokhiruulgaActive ? 30 : 10}
          >
            <HStack
              borderRadius={9}
              justifyContent={"center"}
              alignItems={"center"}
              h={10}
              px={2.5}
              border={"1px solid #00BCA9"}
              borderColor={tokhiruulgaActive ? "white" : "prime.default"}
            >
              <Box
                as={motion.div}
                animation={
                  !tokhiruulgaActive ? iconAnimation : iconEndAnimation
                }
                display={!tokhiruulgaActive ? "flex" : "none"}
              >
                <Image src={svgMenu} w={22} h={22} mr={4.5} />
              </Box>
              <Box
                as={motion.div}
                animation={tokhiruulgaActive ? iconAnimation : iconEndAnimation}
                display={tokhiruulgaActive ? "flex" : "none"}
              >
                <Image src={svgCancel} w={22} h={22} mr={4.5} />
              </Box>
              <Text color={tokhiruulgaActive ? "white" : "prime.default"}>
                {tokhiruulga}
              </Text>
            </HStack>
          </Button>
          <Button
            p={0}
            h={"auto"}
            bg={"none"}
            onClick={() => setActive(!active)}
            _hover={{ bg: "none" }}
            zIndex={active ? 30 : 10}
            display={{ base: "inline-flex", md: "none" }}
          >
            <HStack
              borderRadius={9}
              justifyContent={"center"}
              alignItems={"center"}
              h={10}
              px={2.5}
              border={"1px solid #00BCA9"}
              borderColor={active ? "white" : "prime.default"}
            >
              <Box
                as={motion.div}
                animation={!active ? iconAnimation : iconEndAnimation}
                display={!active ? "flex" : "none"}
              >
                <Image src={svgMenu} w={22} h={22} mr={4.5} />
              </Box>
              <Box
                as={motion.div}
                animation={active ? iconAnimation : iconEndAnimation}
                display={active ? "flex" : "none"}
              >
                <Image src={svgCancel} w={22} h={22} mr={4.5} />
              </Box>
              <Text color={active ? "white" : "prime.default"}>{menu}</Text>
            </HStack>
          </Button>
        </HStack>
      </HStack>
      {(gerelt || tokhiruulgaActive || active) && (
        <Box
          pos={"fixed"}
          zIndex={20}
          overflowY={{ sm: "scroll", base: "scroll" }}
          inset={0}
          className="bg-nav"
        >
          <SlideFade in={gerelt} offsetY="-100px">
            <Grid
              w={"full"}
              mx={"auto"}
              maxW={"1240px"}
              mt={90}
              gap={10}
              px={6}
              gridTemplateColumns={{
                md: "repeat(3, 1fr)",
                sm: "repeat(2, 1fr)",
                base: "repeat(1, 1fr)",
              }}
              display={gerelt ? "grid" : "none"}
            >
              {gereltNavValues.map((value, i) => {
                return (
                  <GridItem key={i}>
                    <NavItem
                      title={value.title}
                      link={value.link}
                      onClick={reset}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </SlideFade>
          <SlideFade in={tokhiruulgaActive} offsetY={"-100px"}>
            <Grid
              w={"full"}
              mx={"auto"}
              maxW={"1240px"}
              mt={90}
              px={6}
              gridTemplateColumns={{
                md: "repeat(3, 1fr)",
                sm: "repeat(2, 1fr)",
                base: "repeat(1, 1fr)",
              }}
              display={tokhiruulgaActive ? "grid" : "none"}
            >
              {tokhiruulgaNavValues.map((value, i) => {
                return (
                  <GridItem key={i}>
                    <NavItem
                      title={value.title}
                      link={value.link}
                      onClick={reset}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </SlideFade>
          <SlideFade in={active} offsetY={"-100px"}>
            <Grid
              w={"full"}
              mx={"auto"}
              maxW={"1240px"}
              mt={90}
              px={6}
              gridTemplateColumns={{
                md: "repeat(3, 1fr)",
                sm: "repeat(2, 1fr)",
                base: "repeat(1, 1fr)",
              }}
              display={active ? "grid" : "none"}
            >
              {tokhiruulgaNavValues.concat(gereltNavValues).map((value, i) => {
                return (
                  <GridItem key={i}>
                    <NavItem
                      title={value.title}
                      link={value.link}
                      onClick={reset}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </SlideFade>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
