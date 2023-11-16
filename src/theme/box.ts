import { defineStyleConfig } from "@chakra-ui/react";
export const Box = defineStyleConfig({

  baseStyle: {
   maxWidth: '1240px',
   px: {
    md: 10, 
    base: 6
   },
   margin: 'auto'
  },
 
});
export const HStack = defineStyleConfig({

  baseStyle: {
   gap: '40px',
   
  },
  
 
});

