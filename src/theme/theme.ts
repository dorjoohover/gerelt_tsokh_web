import { extendTheme } from "@chakra-ui/react";
import  Button  from "./button";
import   Card , {CardFooter} from "./card";
import   Text  from "./text";
import   {Box, HStack}  from "./box";
export const theme = extendTheme({
    colors: {
        prime: {
            default:'#00BCA9',
            12: '#00BCA91F',
            75: '#00BCA9BF',
        },
        darkPrime: "#0C9486",
        text: '#575757'
       
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
        HStack
    }
  })
  
  