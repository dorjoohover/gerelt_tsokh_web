import {
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import CustomEditor from "../custom-editor";
import { ReactNode, useState } from "react";
import Alert from "../Alert";
import { Messages } from "@/values/values";
type AdminFormType = {
  title: string;
  text: string;
  ph?: string;
  children?: ReactNode;
  onChange: (e: string) => void;
  onTitle: (e: string) => void;
  onSubmit: () => void;
  editor?: boolean;
  value: string;
  editorText?: string;
  warn?: string[];
};
export default function AdminForm({
  text,
  title,
  ph,
  children,
  onChange,
  onTitle,
  onSubmit,
  editor = true,
  value,
  editorText,
  warn
}: AdminFormType) {
  const toast = useToast();
  const submit = () => {
    if (warning != undefined) {
      warning.map((w) =>
        toast({
          title: w,
          status: "warning",
          duration: 3000,
        })
      );
      return;
    }
    onSubmit();
  };
  const [alert, setAlert] = useState(false);
  const [warning, setWarning] = useState<string[] | undefined>(warn);
  const checker = () => {
    setWarning(undefined);
    setAlert(true);
    if (value == "") {
      setWarning((prev) =>
        prev != undefined
          ? [...prev, Messages.requiredTitle]
          : [Messages.requiredTitle]
      );
    }
    if (editor && (editorText == "" || editorText == undefined)) {
      setWarning((prev) =>
        prev != undefined
          ? [...prev, Messages.requiredText]
          : [Messages.requiredTitle]
      );
    }
  };
  return (
    <FormControl
      w={"full"}
      alignItems={"start"}
      onSubmit={(e) => {
        checker();
      }}
    >
      <Heading variant={"smallTitle"} color={"text"}>
        {title}
      </Heading>
      <Text mt={10} mb={2} variant={"label"}>
        {text}
      </Text>
      <Input
        placeholder={text}
        value={value}
        onChange={(e) => onTitle(e.target.value)}
        required
        mb={10}
      />
      {editor && <CustomEditor initialData={ph ?? ""} onChange={onChange} />}
      {children}
      <Button my={4} onClick={checker}>
        Илгээх
      </Button>
      <Alert
        onClick={submit}
        close={() => setAlert(false)}
        warning={warning}
        isOpen={alert}
      />
    </FormControl>
  );
}
