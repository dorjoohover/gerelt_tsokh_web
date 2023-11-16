import { defineStyleConfig } from "@chakra-ui/react";
export const CardFooter = defineStyleConfig({
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    background: "prime.12",

    alignItems: "center",
    gap: 7,
  },
  variants: {
    rounded: {
      padding: 8,
      borderRadius: "xl",
      boxShadow: "xl",
    },
    smooth: {
      px: 11,
      pt: 7,
      pb: 12,
      borderRadius: "0",
      boxShadow: "md",
    },
  },

  defaultProps: {
    variant: "smooth",
  },
});
const Card = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: "xl",
      boxShadow: "xl",
    },
    smooth: {
      padding: 6,
      borderRadius: "base",
      boxShadow: "md",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "smooth",
  },
});

export default Card;
