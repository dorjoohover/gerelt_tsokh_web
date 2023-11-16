import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
type Types = {
  img: string;
  text: string;
  text1: string;
};
const GratitudeWidget: FC<Types> = ({ img, text, text1 }) => {
  return (
    <VStack w={"full"} gap={{ md: 10, base: 9 }}>
      <Box
        w={"full"}
        // flexDir={{ md: "row", base: "column" }}
        alignItems={"start"}
        fontSize={'20px'}
        color={'text'}
      >
        <Box
          w={{ md: "50%", base: "100%" }}
          mr={{ md: 10, base: 0 }}
          float={"left"}
        >
          <Image src={img} alt={""} />
        </Box>
        {text}
      </Box>
      <Text>{text1}</Text>
    </VStack>
  );
};

export default GratitudeWidget;
