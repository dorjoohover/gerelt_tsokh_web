import { defineStyleConfig } from "@chakra-ui/react";
const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "400",
    textTransform: "capitalize",
    borderRadius: "20px",
  },

  sizes: {
    // sm: {
    //   fontSize: 'sm',
    //   px: 4, // <-- px is short for paddingLeft and paddingRight
    //   py: 3, // <-- py is short for paddingTop and paddingBottom
    // },
    md: {
      fontSize: "20px",
      px: 12,
      py: 1.5
    },
  },

  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "darkPrime",
      _hover: {
        bg: "prime.default",
      },
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "solid",
  },
});
export default Button;
