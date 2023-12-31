"use clientӨ";
import { useEffect, useRef, useState } from "react";
import { CustomDetailType, CustomType } from "./Performance";
import {
  Button,
  HStack,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { getCookie } from "cookies-next";
import { Messages, api } from "@/values/values";
import axios from "axios";
import AdminForm from "./Form";
import Alert from "../Alert";
import { uploader } from "./Info";
import { useRouter } from "next/navigation";

export default function AdminPerformanceCustom() {
  const [data, setData] = useState<CustomType>({
    title: "",
    detail: [],
  });
  const [detail, setDetail] = useState<CustomDetailType>({
    title: "",
    img: undefined,
    text: "",
  });
  const [selectedDetails, setSelectedDetails] = useState<
    (CustomDetailType | undefined)[]
  >([]);

  const [selected, setSelected] = useState<CustomDetailType | undefined>();
  const [details, setDetails] = useState<(CustomDetailType | undefined)[]>([]);
  const toast = useToast();
  const token = getCookie("token");
  const warning = (value: string) => {
    toast({
      title: value,
      status: "warning",
      duration: 3000,
    });
  };
  const router = useRouter();
  const submit = async () => {
    try {
      if (token != undefined || token != "") {
        router.push("/admin/login");
        return;
      }
      setData((prev) => ({
        ...prev,
        details: [...data.detail, detail],
      }));

      let body: string[] = [];

      if (data.detail.length > 0) {
        data.detail.map(async (b, i) => {
          let uploaded: string | undefined = undefined;

          if (b.img != undefined) {
            uploaded = await uploader(b.img!, token!);
          } else {
            warning(Messages.occured);
            return;
          }
          await axios
            .post(
              `${api}medical/detail/create`,
              {
                title: b.title,
                img: uploaded,
                text: b.text ?? "",
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((d) => {
              if (!body.includes(d.data)) body.push(d.data);
              if (i == data.detail.length - 1) {
                !body.includes(d.data) ? send([...body, d.data]) : send(body);
              }
            });
        });
      } else {
        send([]);
      }
    } catch (error) {
      console.log(error);
      warning(Messages.occured);
    }
  };
  const getDetails = async () => {
    try {
      await fetch(`${api}medical/detail`, { cache: "no-store" })
        .then((d) => d.json())
        .then((d) => setDetails(d));
    } catch (error) {}
  };
  useEffect(() => {
    getDetails();
  }, []);
  const send = async (body: (string | undefined)[]) => {
    try {
      let items = [];
      if (selectedDetails.length > 0) {
        items = body.concat(selectedDetails.map((s) => s!._id) as string[]);
      } else {
        items = body;
      }
      await axios
        .post(
          `${api}medical/details/create`,
          {
            title: data.title,
            detail: items,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() =>
          toast({
            title: "Нэмэгдлээ.",

            status: "success",
            duration: 2000,
            isClosable: true,
          })
        )
        .then(() => {
          setData({
            title: "",
            detail: [],
          });
        });
    } catch (error) {}
  };
  return (
    <AdminForm
      value={data.title}
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Үйлдэл гүйцэтгэх чадвар алдалт > Дэлгэрэнгүй мэдээлэл оруулах`}
      text="Гарчиг"
      editor={false}
      onSubmit={submit}
    >
      {(data.detail != undefined && data.detail.length > 0) ||
        (selectedDetails != undefined && selectedDetails.length > 0 && (
          <Text fontWeight={"bold"} mb={2}>
            Оруулсан дэлгэрэнгүй
          </Text>
        ))}
      {data.detail?.map((detail, i) => {
        return (
          <HStack key={i} gap={3} my={2} mb={4}>
            <Text>{detail.title}</Text>
            <Button
              onClick={() => {
                let det = data.detail.filter(
                  (det, index) => det.title != detail.title
                );

                setData((prev) => ({
                  ...prev,
                  detail: det,
                }));
              }}
            >
              Устгах
            </Button>
          </HStack>
        );
      })}
      {selectedDetails?.map((detail, i) => {
        return (
          <HStack key={i} gap={3} my={2} mb={4}>
            <Text>{detail?.title}</Text>
            <Button
              onClick={() => {
                setSelectedDetails((prev) => [
                  ...selectedDetails.slice(0, i),
                  ...selectedDetails.slice(i + 1),
                ]);
              }}
            >
              Устгах
            </Button>
          </HStack>
        );
      })}

      <VStack gap={4} alignItems={"start"}>
        <Text mb={2}>Оруулах дэлгэрэнгүй</Text>
        <Input
          placeholder="Гарчиг"
          value={detail.title}
          onChange={(e) =>
            setDetail((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        <Textarea
          value={detail.text}
          onChange={(e) =>
            setDetail((prev) => ({ ...prev, text: e.target.value }))
          }
          placeholder="Тайлбар"
        ></Textarea>
        <Input
          h={"auto"}
          accept="image/*"
          border={"none"}
          type="file"
          placeholder="Зураг"
          onChange={(e) => {
            setDetail((prev) => ({ ...prev, img: e.target.files?.[0] }));
          }}
        />
        <Button
          onClick={() => {
            setData((prev) => ({
              ...prev,
              detail: [...data.detail, detail],
            }));
            setDetail({
              title: "",
            });
          }}
        >
          Нэмэх
        </Button>
        {details != undefined && (
          <VStack w={"full"} mt={4} alignItems={"start"}>
            <Text mb={2}>Өмнөх өгөгдөл</Text>
            <Select
              onChange={(e) => {
                let item: CustomDetailType | undefined = details.filter(
                  (d) => d?._id == e.target.value
                )[0];
                if (item != undefined) {
                  setSelected({
                    _id: item!._id,
                    title: item!.title,
                    text: item!.text,
                    img: item!.img,
                  });
                }
              }}
            >
              <option value="">Сонгох</option>
              {details
                .sort((a: any, b: any) => (a.title > b.title ? 1 : -1))
                .map((e, i) => {
                  return (
                    <option value={e?._id} key={i}>
                      {e?.title}
                    </option>
                  );
                })}
            </Select>
          </VStack>
        )}
        <Button
          onClick={() => {
            if (
              !selectedDetails.includes(selected) &&
              selected?._id != undefined
            ) {
              setSelectedDetails((prev) => [...prev, selected]);
            }
          }}
        >
          Нэмэх
        </Button>
      </VStack>
    </AdminForm>
  );
}
