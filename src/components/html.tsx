import { Box, Image } from "@chakra-ui/react";
import parse, { domToReact } from "html-react-parser";

interface RichContentProps {
  text?: string;
}

export default function RichContent({ text }: RichContentProps) {
  if (!text) return null;

  const clean = text.replaceAll('"', ""); // Хэрэв шаардлагатай бол sanitize

  return (
    <Box mb={{ base: 4, md: 0 }}>
      {parse(clean, {
        replace: (domNode: any) => {
          // Image tag
          if (domNode.name === "img" && domNode.attribs?.src) {
            return (
              <Image
                src={domNode.attribs.src}
                alt={domNode.attribs.alt || "image"}
                borderRadius="md"
                maxW="100%"
                mb={4}
              />
            );
          }

          // Video tag
          if (domNode.name === "video") {
            // Хэрэв src нь video tag дотор биш бол child <source> ашиглана
            const src =
              domNode.attribs?.src || domNode.children?.[0]?.attribs?.src;
            if (!src) return null;
            return (
              <Box as="video" controls borderRadius="md" maxW="100%" mb={4}>
                <source src={src} type="video/mp4" />
                Таны browser видео тоглуулах боломжгүй байна.
              </Box>
            );
          }

          // iframe (Youtube, FB embed гэх мэт)
          if (domNode.name === "iframe" && domNode.attribs?.src) {
            return (
              <Box
                as="iframe"
                src={domNode.attribs.src}
                width="100%"
                minH="400px"
                borderRadius="md"
                border="none"
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
