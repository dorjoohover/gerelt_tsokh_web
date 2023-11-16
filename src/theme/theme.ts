import { extendTheme } from "@chakra-ui/react";
import Button from "./button";
import Card, { CardFooter } from "./card";
import { TextArea, Input } from "./form";
import Text from "./text";
import { Box, HStack } from "./box";
export const theme = extendTheme({
  colors: {
    prime: {
      default: "#00BCA9",
      12: "#00BCA91F",
      75: "#00BCA9BF",
    },
    waterPrime: "#35E4D2",
    darkPrime: "#0C9486",
    text: "#575757",
    gray: "#707070",
    red: "#E94242",
    blue: '#0093CB'
  },
  fonts: {
    heading: `'Segoe UI Regular', sans-serif`,
    body: `'Segoe UI Regular', sans-serif`,
    // bold: `'Segoe UI Bold', sans-serif`
  },
  components: {
    Button,
    Card,
    CardFooter,
    Text,
    Box,
    HStack,
    TextArea,
    Input,
  },
});
