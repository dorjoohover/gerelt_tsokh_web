"use client";
import { Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();
  //   if(window !== undefined ) {
  // router.push("/");
  //   }
  return (
    <Center>
      <Text>Not found</Text>
    </Center>
  );
}
