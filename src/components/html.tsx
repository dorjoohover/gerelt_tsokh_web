import { Box, Image } from "@chakra-ui/react";
import parse, { domToReact } from "html-react-parser";

interface RichContentProps {
  text?: string;
}

export default function RichContent({ text }: RichContentProps) {
  if (!text) return null;

  const clean = text.replaceAll('"', ""); // Хэрэв шаардлагатай бол sanitize
  console.log(text);
  return (
    <Box mb={4}>
      {parse(text, {
        replace: (domNode: any) => {
          if (domNode.name === "img" && domNode.attribs?.src) {
            return <Image src={domNode.attribs.src} maxW="100%" mb={4} />;
          }

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

          if (domNode.name === "iframe" && domNode.attribs?.src) {
            return (
              <Box
                as="iframe"
                src={domNode.attribs.src}
                width="100%"
                minH="400px"
                mb={4}
                allowFullScreen
              />
            );
          }
        },
      })}
    </Box>
  );
}
