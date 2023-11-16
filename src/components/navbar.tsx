"use client";
import { imgLogo, svgCancel, svgMenu, svgSearch } from "@/global/assets";
import { gereltTokh, menu, navText, tokhiruulga } from "@/global/string";
import { gereltNavValues, tokhiruulgaNavValues } from "@/global/values";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, FC } from "react";
type NavItemType = {
  name: string;
  value: string;
};

export type NavItemsTypes = {
  title: string;
  link: NavItemType[];
  onClick?: () => void
};
const NavItem: FC<NavItemsTypes> = ({ title, link, onClick }) => {
  return (
    <VStack
      w={"full"}
      alignItems={{ md: "center", sm: "center", base: "start" }}
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

const Navbar = () => {
  const [gerelt, setGerelt] = useState(false);
  const [tokhiruulgaActive, setTokhiruulga] = useState(false);
  const [search, setSearch] = useState(false);
  const [active, setActive] = useState(false);

  const reset = () => {
    setActive(false)
                        setGerelt(false)
                        setSearch(false)
                        setTokhiruulga(false)
  }
  return (
    <Box
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      borderBottom={"5px solid aqua"}
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
          <Link href={'/'} onClick={reset}><Image alt="logo" src={imgLogo} h={12} /></Link>
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
            flex={search ? 1 : 0}
            justifyContent={"center"}
            alignItems={"center"}
            h={10}
            border={"1px solid aqua"}
            borderColor={"prime.default"}
            px={search ? 3 : 0}
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
                bg: 'none'
              }}
              textAlign={"center"}
              justifyContent={"center"}
              onClick={() => setSearch(!search)}
            >
              {search ? (
                <CloseIcon color={"prime.default"} />
              ) : (
                <Image src={svgSearch} w={22} h={22} mx={"auto"} />
              )}
            </Button>
          </HStack>
          <Button
            p={0}
            h={"auto"}
            bg={"none"}
            _hover={{
                bg: 'none'
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
              border={"1px solid aqua"}
              borderColor={gerelt ? "white" : "prime.default"}
            >
              <Image
                src={gerelt ? svgCancel : svgMenu}
                w={22}
                h={22}
                mr={4.5}
              />
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
                bg: 'none'
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
              border={"1px solid aqua"}
              borderColor={tokhiruulgaActive ? "white" : "prime.default"}
            >
              <Image
                src={tokhiruulgaActive ? svgCancel : svgMenu}
                w={22}
                h={22}
              />
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
            zIndex={active ? 30 : 10}
            display={{ base: "inline-flex", md: "none" }}
          >
            <HStack
              borderRadius={9}
              justifyContent={"center"}
              alignItems={"center"}
              h={10}
              px={2.5}
              border={"1px solid aqua"}
              borderColor={active ? "white" : "prime.default"}
            >
              <Image
                src={active ? svgCancel : svgMenu}
                w={22}
                h={22}
                mr={4.5}
              />
              <Text color={active ? "white" : "prime.default"}>{menu}</Text>
            </HStack>
          </Button>
        </HStack>
      </HStack>
      {(gerelt || tokhiruulgaActive || active) && (
        <Box pos={"fixed"} zIndex={20} overflowY={{sm: 'scroll', base: 'scroll'}} inset={0} className="bg-nav">
          {gerelt && (
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
            >
              {gereltNavValues.map((value, i) => {
                return (
                  <GridItem key={i}>
                    <NavItem title={value.title} link={value.link} onClick={reset}/>
                  </GridItem>
                );
              })}
            </Grid>
          )}
          {tokhiruulgaActive && (
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
            >
              {tokhiruulgaNavValues.map((value, i) => {
                return (
                  <GridItem key={i}>
                    <NavItem title={value.title} link={value.link} onClick={reset}/> 
                  </GridItem>
                );
              })}
            </Grid>
          )}
          {active && (
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
            >
              {tokhiruulgaNavValues.concat(gereltNavValues).map((value, i) => {
                return (
                  <GridItem key={i}>
                    <NavItem title={value.title} link={value.link} onClick={reset}/>
                  </GridItem>
                );
              })}
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
