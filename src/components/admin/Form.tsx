import { Button, FormControl, Heading, Input, VStack } from "@chakra-ui/react";
import CustomEditor from "../custom-editor";
import { ReactNode } from "react";
type AdminFormType = {
  title: string;
  text: string;
  ph?: string;
  children?: ReactNode;
  onChange: (e: string) => void;
  onTitle: (e: string) => void;
  onSubmit: () => void;
  editor?: boolean
};
export default function AdminForm({
  text,
  title,
  ph,
  children,
  onChange,
  onTitle,
  onSubmit,
  editor = true
}: AdminFormType) {
  return (
    <FormControl w={"full"} alignItems={"start"} onSubmit={onSubmit}>
      <Heading variant={'smallTitle'} color={'text'}>{title}</Heading>
      <Input
        placeholder={text}
        onChange={(e) => onTitle(e.target.value)}
        maxW={"500px"}
        mt={10}
        mb={10}
      />
      {editor && <CustomEditor initialData={ph ?? ""} onChange={onChange} />}
      {children}
      <Button my={4} onClick={onSubmit}>
        Илгээх
      </Button>
    </FormControl>
  );
}
