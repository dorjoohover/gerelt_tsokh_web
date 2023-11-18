"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Text,
  chakra,
  keyframes,
  shouldForwardProp,
} from "@chakra-ui/react";
import { ReactNode, FC, useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import { AddIcon } from "@chakra-ui/icons";
type AccordionType = {
  title: string;
  child?: ReactNode;
};
const initial = keyframes`
  0% { transform: rotate(0deg);  }
  100% { transform: rotate(135deg);  }
`;
const animate = keyframes`
  0% { transform: rotate(135deg);  }
  100% { transform: rotate(0deg);  }
`;
const animationInitial = `${initial} 0.3s ease-in-out forwards`;
const animation = `${animate} 0.3s ease-in-out forwards`;
const CustomAccordian = ({ data }: { data: AccordionType[] }) => {
  const [active, setActive] = useState<number | null>();
  return (
    <Accordion w={"full"} allowToggle>
      {data.map((d, i) => {
        {
          return (
            d.title != "" && (
              <AccordionItem borderColor={"prime.default"} key={i}>
                <AccordionButton
                  onClick={() => {
                    if (active == i) {
                      setActive(null);
                    } else {
                      setActive(i);
                    }
                  }}
                >
                  <Box
                    as={motion.div}
                    animation={active == i ? animationInitial : animation}
                  >
                    <AddIcon color={"prime.default"} />
                  </Box>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    ml={8}
                    fontSize={20}
                    fontWeight={"bold"}
                  >
                    {d.title}
                  </Box>
                </AccordionButton>

                <AccordionPanel pb={4}>
                  {d.child ?? <Text>хоосон</Text>}
                </AccordionPanel>
              </AccordionItem>
            )
          );
        }
      })}
    </Accordion>
  );
};

export default CustomAccordian;
