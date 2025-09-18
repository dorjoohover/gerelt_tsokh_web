import { Box, Image } from "@chakra-ui/react";
import parse, { domToReact } from "html-react-parser";

interface Props {
  text?: string;
}

export default function RichContent({ text }: Props) {
  if (!text) return null;

  const clean = text.replaceAll('"', "");

  return (
    <Box mb={{ md: 0, base: 4 }}>
      {parse(clean, {
        replace: (domNode: any) => {
          if (domNode.name === "img") {
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
          if (domNode.name === "video") {
            return (
              <video controls style={{ maxWidth: "100%", borderRadius: "8px" }}>
                {domToReact(domNode.children)}
              </video>
            );
          }
          if (domNode.name === "iframe") {
            return (
              <iframe
                src={domNode.attribs.src}
                style={{
                  width: "100%",
                  minHeight: "400px",
                  borderRadius: "8px",
                  border: "none",
                }}
                allowFullScreen
              />
            );
          }
        },
      })}
    </Box>
  );
}
