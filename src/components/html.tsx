import { Box, Image } from "@chakra-ui/react";
import parse, { domToReact } from "html-react-parser";

export default function RichContent({ text }: { text?: string }) {
  if (!text) return null;

  return (
    <Box mb={4}>
      {parse(text, {
        replace: (domNode: any) => {
          // Image
          if (domNode.name === "img" && domNode.attribs?.src) {
            return <Image src={domNode.attribs.src} maxW="100%" mb={4} />;
          }

          // Video tag
          if (domNode.name === "video") {
            const src =
              domNode.attribs?.src || domNode.children?.[0]?.attribs?.src;
            if (!src) return null;
            return (
              <Box as="video" controls maxW="100%" mb={4}>
                <source src={src} type="video/mp4" />
              </Box>
            );
          }

          // iframe
          if (domNode.name === "iframe" && domNode.attribs?.src) {
            return (
              <Box
                as="iframe"
                src={domNode.attribs.src}
                width="100%"
                minW={"400px"}
                minH="400px"
                mb={4}
                allowFullScreen
              />
            );
          }

          // oembed → iframe хөрвүүлэх
          if (domNode.name === "oembed" && domNode.attribs?.url) {
            return (
              <Box
                as="iframe"
                src={domNode.attribs.url}
                width="100%"
                minW={"400px"}
                minH="400px"
                mb={4}
                border="none"
                allowFullScreen
              />
            );
          }
        },
      })}
    </Box>
  );
}
