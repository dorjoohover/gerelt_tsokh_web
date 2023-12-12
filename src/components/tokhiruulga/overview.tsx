import { imgGereltTsokh, imgHeader1, imgLogo, imgTokhiruulga, videoIntro } from "@/global/assets";
import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FC } from "react";
import { FaPlay } from "react-icons/fa";
type Types = {
  img: string;
  uri: string;
  text: string;
  question: string;
  purpose: string;
};
const OverviewWidget: FC<Types> = ({ img, text, uri, question, purpose }) => {
  return (
    <VStack w={"full"} gap={{ md: 12, base: 10 }} alignItems={"start"}>
      <Heading
        fontSize={"20px"}
        color={"text"}
        whiteSpace={"pre-wrap"}
        lineHeight={1.5}
        fontWeight={400}
      >
        {text}
      </Heading>
      <Box pos={"relative"} w={"full"} >
        {/* <Link href={uri} target="_blank"> */}
        <video src={'http://139.162.40.225:5000/api/1702395166679tokhiruulga.mp4'} poster={imgHeader1} width={'100%'} controls>
          
        </video>
          {/* <Image src={img} alt={""} w={"full"} />
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
          </Box> */}
        {/* </Link> */}
      </Box>
      <Heading fontSize={"20px"} variant={"smallTitle"} color={"text"}>
        Зорилго
      </Heading>
      <Text fontStyle={"italic"}>{question}</Text>
      <Text>{purpose}</Text>
    </VStack>
  );
};

export default OverviewWidget;
