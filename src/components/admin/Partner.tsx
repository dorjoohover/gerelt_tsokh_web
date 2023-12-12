"use client";

import { HomeTypes } from "@/global/enum";
import { HomeModel } from "@/model/home.model";
import { Messages, api } from "@/values/values";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { uploader } from "./Info";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function PartnerWidget() {
  const [data, setData] = useState<HomeModel | undefined>();
  const [imgs, setImgs] = useState<FileList | null>(null);
  const getData = async () => {
    try {
      await fetch(`${api}home/PARTNER`)
        .then((d) => d.json())
        .then((d) => setData(d));
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const token = getCookie("token");
  const toast = useToast();
  const router = useRouter();
  const checker = () => {
    if (token == undefined || token == "") {
      router.push("/admin/login");
      return;
    }
    console.log(imgs);
    if (imgs == null || imgs?.length < 2) {
      toast({
        title: Messages.requiredFile,
        status: "warning",
        duration: 3000,
      });
      return;
    }
    submit();
  };
  const submit = async () => {
    try {
      let img = [];
      if (imgs != null) {
        for (let i = 0; i < imgs.length; i++) {
          let image = await uploader(imgs[0], token!);
          img.push(image);
        }
      }
      await axios.post(`${api}home`, {
        type: HomeTypes.PARTNER,
        imgs: img,
      }).then((d) => console.log(d));
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <VStack w={"full"} alignItems={"start"}>
      <Heading mb={8}>Хамтрагчид</Heading>

      {data && data?.imgs?.length > 0 && (
        <Box mb={4}>
          <Heading>Оруулсан</Heading>
          {data?.imgs?.map((d, i) => {
            return <Image src={`${api}${d}`} maxW={500} key={i} />;
          })}
        </Box>
      )}
      <Heading mb={4}>Зургууд</Heading>
      <Input
        type="file"
        accept="image/*"
        multiple
        maxW={400}
        onChange={(e) => setImgs(e.target.files)}
      />
      <Button onClick={checker} mt={4}>
        Илгээх
      </Button>
    </VStack>
  );
}
