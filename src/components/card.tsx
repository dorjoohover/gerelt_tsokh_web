import {
  detail,
  purpose,
  purposeText,
  slogan,
  tokhiruulga,
} from "@/global/string";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import { HStackContainer } from "./container";
import { svgBg } from "@/global/assets";

type Types = {
  body: ReactElement;
  footer: ReactElement;
  footerBg?: string;
  bg?: string;
  bodyBg?: string;
  current?: number;
};
type AdditionType = {
  icon: string;
  text: string;

  onClick: () => void
};
const CustomCard: FC<Types> = ({
  body,
  footer,
  footerBg = "prime.12",
  bg,
  bodyBg,
}) => {
  return (
    <Card
      bg={bg}
      padding={0}
      borderBottomColor={"prime.default"}
      borderBottomWidth={"6px"}
      borderRadius={0}
      h={'full'}
    >
      <CardBody bg={bodyBg} padding={0}>
        {body}
      </CardBody>
      <CardFooter
        bg={footerBg}
        justifyContent={{
          md: "start",
          base: "center",
        }}
        px={{ lg: 12, md: 6, base: 6 }}
        pt={{ md: 8, base: 4 }}
        pb={{ md: 10, base: 6 }}
      >
        {footer}
      </CardFooter>
    </Card>
  );
};

export const AdditionCard: FC<AdditionType> = ({ icon, text,  onClick }) => {
  return (
    <VStack w={"full"} borderRadius={12} bg={"prime.default"} pt={8} pb={14}>
      <Image src={icon} w={10} />
      <Text variant={"smallTitle"} mt={4} mb={9}>
        {text}
      </Text>
      <Button onClick={onClick}>{detail}</Button>
    </VStack>
  );
};

export const SliderCard: FC<Types> = ({ body, footer, bg, current }) => {
  return (
    <Box
      w={"full"}
      h={{
        md: "620px",
        base: "100%",
      }}
      pos={"relative"}
      backgroundImage={{
        md: bg,
        base: "none",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      overflow={"hidden"}
    >
      <Box
        pos={"absolute"}
        top={{
          md: "-100%",
          base: "200px",
        }}
        right={{
          md: "50%",
          base: "-10%",
        }}
        bottom={{
          md: "-100%",
          base: "-40%",
        }}
        left={{
          md: "-75%",
          base: "-150%",
        }}
        zIndex={0}
        className="bg-gradient"
        borderBottomRightRadius={"75%"}
      />

      <Image
        w={{ md: 0, base: "auto" }}
        h={{ md: "auto", base: "200px" }}
        src={bg}
      />
      <Box
        w={"full"}
        zIndex={1}
        pos={"relative"}
        maxW={"1240px"}
        px={{ md: 10, base: 6 }}
        h={"100%"}
        margin={"auto"}
      >
        {body}
        <HStack
          pos={"absolute"}
          display={{ md: "flex", base: "none" }}
          left={10}
          bottom={14}
        >
          <Box
            w={4}
            h={4}
            borderRadius={"100%"}
            bg={current == 0 ? "white" : "#ffffff80"}
            mr={2}
          />
          <Box
            w={4}
            h={4}
            borderRadius={"100%"}
            bg={current == 1 ? "white" : "#ffffff80"}
          />
        </HStack>
      </Box>
    </Box>
  );
};

type RoundedType = {
  title?: string;
  text: string;
  py?: number,
  icon?: string,
  bg?: string
};

export const RoundedCard: FC<RoundedType> = ({bg, title, text, py, icon }) => {
  return (
    <VStack
      w={"full"}
      py={ 10 }
      px={{ md: 9, base: 6 }}
      borderRadius={12}
      border={"1px solid #00BCA9 "}
      borderColor={'prime.default'}
      bg={bg}
      h={'full'}

    >
      {title && <Text variant={"smallTitle"} textAlign={'center'} color={"text"} mb={{md: 10}}>
        {title}
      </Text>}
      {
        icon && <Image src={icon} w={10}/>
      }
      <Text textAlign={'center'} color={bg ? 'white' : 'text'}>{text}</Text>
    </VStack>
  );
};

export default CustomCard;
