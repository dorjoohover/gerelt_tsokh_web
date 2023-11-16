import { defineStyleConfig } from "@chakra-ui/react";
const Text = defineStyleConfig({

  baseStyle: {
    fontWeight: "400",
    textTransform: "none",
    color:'text',
    fontSize: '20px',
    whiteSpace:'pre-line'
  },
  variants: {
    display: {
        fontSize: {
          md: '46px',
          base: '30px'
        },
        fontWeight: 'bold',
        color: 'white',
       
    },
    smallTitle : {
        fontSize: '20px',
        color: 'white',
        fontWeight: 'bold',
    },
    title: {
        fontSize: {
          md: '22px',
          base: '16px'
        },
        fontWeight: 'bold',
        textTransform: "uppercase",
    },
    miniTitle: {
        fontSize: '16px',
        color:'white',
        fontWeight: 'bold'
    },


    normal: {
        fontSize: '16px',
        
    },
  },

});
export default Text;
