"use client";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const Alert = ({
  isOpen,
  onClick,
  close,
  warning,
}: {
  isOpen: boolean;
  onClick: () => void;
  close: () => void;
  warning?: string[];
}) => {
  const { onClose } = useDisclosure();
  const cancelRef = useRef<HTMLInputElement>(null);
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={() => {
        onClose();
        close();
      }}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Мэдээлэл оруулах
          </AlertDialogHeader>

          <AlertDialogBody>
            {warning?.map((w, i) => (
              <Text key={i} color={"black"} fontSize={"16px"}>
                {w}
              </Text>
            ))}
            <Text color={"black"} fontSize={"16px"}>
              {" "}
              Та мэдээлэл оруулахдаа итгэлтэй байна уу?
            </Text>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              onClick={() => {
                onClose();
                close();
              }}
            >
              Буцах
            </Button>
            <Button
              colorScheme="green"
              onClick={() => {
                onClick();
                onClose();
                close();
              }}
              ml={3}
            >
              Нэмэх
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default Alert;
