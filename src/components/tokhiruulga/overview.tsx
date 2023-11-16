import { Box, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
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
    <VStack w={"full"} gap={{ md: 12, base: 10 }} alignItems={'start'}>
      <Text>{text}</Text>
      <Box pos={"relative"} w={"full"}>
        <Image src={img} alt={""} w={"full"} />
        <Link href={uri} target="_blank">
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
            <Icon as={FaPlay} boxSize={25} color={'white'}/>
          </Box>
        </Link>
      </Box>
      <Text variant={"smallTitle"} color={"text"}>
        Зорилго
      </Text>
      <Text fontStyle={"italic"}>{question}</Text>
      <Text>{purpose}</Text>
    </VStack>
  );
};

export default OverviewWidget;
