"use client";

import { useState, useEffect } from "react";
import AdminForm from "./Form";
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { ArticleTypes, MedicalTypes } from "@/global/enum";
import { tokhiruulgaTags } from "@/values/tags";
import { api } from "@/values/values";
import { getCookie } from "cookies-next";
import axios from "axios";
import { headers } from "next/headers";

export const medicalType: FilterType[] = [
  {
    name: "Ажилтанд өгөх бяцхан санамжууд",
    value: MedicalTypes.EMPLOYEE,
  },
  {
    name: "Ажил олгогчид өгөх бяцхан санамжууд",
    value: MedicalTypes.EMPLOYER,
  },
  {
    name: "Гол тохируулгууд",
    value: MedicalTypes.SETUP,
  },
  {
    name: "Амрах хувийн орон зай",
    value: MedicalTypes.SPACE,
  },
  {
    name: "Сэдрээгч хүчин зүйлсийг илрүүлж багасгах",
    value: MedicalTypes.TRIGGER,
  },
  {
    name: "Боломжит тохируулгууд",
    value: MedicalTypes.POSSIBLE,
  },
  {
    name: "Ажил үүргийн функцээр",
    value: MedicalTypes.FUNCTIONS,
  },
  {
    name: "Түлхүү хэрэглэгддэг тохируулгууд",
    value: MedicalTypes.KEYS,
  },
];

export default function AdminPerformance({
  route,
}: {
  route: { type: string };
}) {
  const [data, setData] = useState({
    title: "",
    text: "",
  });
  const [details, setDetails] = useState<
    {
      type: string;
      details: (string | undefined)[];
    }[]
  >([]);
  const [detail, setDetail] = useState<{
    type: string;
    details: (string | undefined)[];
  }>({
    type: medicalType[0].value,
    details: [],
  });
  const [values, setValues] = useState<(string | undefined)[]>([]);
  const [value, setValue] = useState<string | undefined>();
  const [conditions, setConditions] = useState<string[]>([]);
  const [condition, setCondition] = useState<string>("");
  const [view, setView] = useState(0);
  const [current, setCurrent] = useState<string>("");
  const [getValues, setGetValues] = useState<(CustomType | undefined)[]>([]);
  const token = getCookie("token");
  const toast = useToast();
  const submit = async () => {
    try {
      await axios
        .post(
          `${api}medical/create`,
          {
            title: data.title,
            text: data.text,

            details: details,
            condition: conditions,
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
            text: "",
            title: "",
          });
          setDetails([]);
        });
    } catch (error) {}
  };
  const getDetails = async () => {
    try {
      await fetch(`${api}medical/details`)
        .then((d) => d.json())
        .then((d) => setGetValues(d));
    } catch (error) {}
  };
  useEffect(() => {
    getDetails();
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const add = () => {
    if (view == 1) {
      setDetail((prev) => ({ ...prev, details: values }));

      if (details.find((d) => d.type == detail.type) == undefined) {
        setDetails((prev) => [
          ...prev,
          {
            type: detail.type,
            details: values,
          },
        ]);
      }
      setValues([]);
      setDetail({
        type: medicalType[0].value,
        details: [],
      });
    }
    onClose();
  };
  return (
    <AdminForm
      value={data.title}
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Үйлдэл гүйцэтгэх чадвар алдалт > ${filterName(
        route.type,
        tokhiruulgaTags[3].sub!
      )}`}
      text="Гарчиг"
      onSubmit={submit}
    >
      <VStack alignItems={"start"} my={4} gap={3}>
        <Button
          onClick={() => {
            setView(0);
            onOpen();
          }}
        >
          Нөхцөл ба шийдэл
        </Button>

        {details.map((d, i) => {
          return (
            <HStack key={i}>
              <Text>{filterName(d.type, medicalType)}</Text>
              <Button
                onClick={() => {
                  onOpen();
                  setCurrent(d.type);
                }}
                bg={"yellow"}
              >
                Засах
              </Button>
              <Button
                onClick={() => {
                  setDetails(details.filter((det) => det != d));
                }}
                bg={"red"}
              >
                Устгах
              </Button>
            </HStack>
          );
        })}
        <HStack>
          <Select
            onChange={(e) => {
              setDetail((prev) => ({ ...prev, type: e.target.value }));
            }}
          >
            {medicalType.map((medical, i) => {
              return (
                <option value={medical.value} key={i}>
                  {medical.name}
                </option>
              );
            })}
          </Select>
          <Button
            onClick={() => {
              onOpen();
              setView(1);
            }}
          >
            Add
          </Button>
        </HStack>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={"4xl"}
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              {view == 1
                ? filterName(detail.type, medicalType)
                : "Нөхцөл ба шийдэл"}
            </ModalHeader>
            <ModalCloseButton
              onClick={() => {
                add();
              }}
            />
            <ModalBody>
              {current != "" &&
                details
                  .filter((d) => d.type == current)[0]
                  ?.details.map((d, i) => {
                    return (
                      <Select
                        onChange={(e) => {
                          setValues((prev) => [
                            ...prev.slice(0, i),
                            e.target.value,
                            ...prev.slice(i + 1),
                          ]);
                        }}
                        key={i}
                        defaultValue={d}
                      >
                        {getValues.map((v, i) => {
                          return (
                            <option value={v?._id} key={i}>
                              {" "}
                              {`${v?.title}(${v?.detail.length})`}{" "}
                            </option>
                          );
                        })}
                      </Select>
                    );
                  })}

              {current == "" &&
                (view == 1 ? values : conditions).map((v, i) => {
                  return (
                    <HStack>
                      {view == 1 ? (
                        <Select
                          onChange={(e) => {
                            setValues((prev) => [
                              ...prev.slice(0, i),
                              e.target.value,
                              ...prev.slice(i + 1),
                            ]);
                          }}
                          defaultValue={v}
                        >
                          {getValues.map((v, i) => {
                            return (
                              <option value={v?._id} key={i}>
                                {" "}
                                {`${v?.title}(${v?.detail.length})`}{" "}
                              </option>
                            );
                          })}
                        </Select>
                      ) : (
                        <Input
                          value={v}
                          onChange={(e) => {
                            setCondition(e.target.value);
                          }}
                        />
                      )}
                      <Button
                        onClick={() => {
                          if (view == 0) {
                            setConditions(conditions.filter((con) => con != v));
                          } else {
                            setValues(values.filter((val) => val != v));
                          }
                        }}
                      >
                        Delete
                      </Button>
                    </HStack>
                  );
                })}
              <HStack>
                {view == 1 ? (
                  <Select
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  >
                    <option value="">Сонгох</option>
                    {getValues.map((v, i) => {
                      return (
                        <option value={v?._id} key={i}>
                          {" "}
                          {`${v?.title}(${v?.detail.length})`}{" "}
                        </option>
                      );
                    })}
                  </Select>
                ) : (
                  <Input
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                  />
                )}
                <Button
                  onClick={() => {
                    if (view == 1) {
                      if (!values.includes(value) && value != "") {
                        setValues((prev) => [...prev, value]);

                        setValue(undefined);
                      }
                    } else {
                      if (!conditions.includes(condition) && condition != "") {
                        setConditions((prev) => [...prev, condition]);
                        setCondition("");
                      }
                    }
                  }}
                >
                  Add
                </Button>
              </HStack>

              <Button
                onClick={() => {
                  add();
                }}
              >
                Done
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </VStack>
    </AdminForm>
  );
}
export type CustomDetailType = {
  title: string;
  _id?: string;
  text?: string;
  img?: File | string;
};
export type CustomType = {
  _id?: string;
  title: string;
  detail: CustomDetailType[];
};
export function AdminPerformanceCustom() {
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
  const submit = async () => {
    try {
      setData((prev) => ({
        ...prev,
        details: [...data.detail, detail],
      }));

      let body: string[] = [];
      let uploaded = "";

      if (data.detail.length > 0) {
        data.detail.map(async (b, i) => {
          let img = new FormData();

          if (b.img != undefined) {
            img.set("file", b.img);

            await fetch(`${api}`, {
              method: "POST",
              headers: { Authorization: `Bearer ${token}` },
              body: img,
            })
              .then((d) => d.json())
              .then((d) => {
                uploaded = d.file;
              });
          }
          let bo =
            uploaded != ""
              ? {
                  title: b.title,
                  img: uploaded,
                  text: b.text ?? "",
                }
              : {
                  title: b.title,
                  text: b.text ?? "",
                };

          await axios
            .post(`${api}medical/detail/create`, bo, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
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
    }
  };
  const getDetails = async () => {
    try {
      await fetch(`${api}medical/detail`)
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
      title={`Үйлдэл гүйцэтгэх чадвар алдалт > Custom`}
      text="Гарчиг"
      editor={false}
      onSubmit={submit}
    >
      {data.detail?.map((detail, i) => {
        return (
          <HStack key={i}>
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
          <HStack key={i}>
            <Text>{detail?.title}</Text>
            <Button
              onClick={() => {
                setSelectedDetails((prev) => ({
                  ...prev,
                  details: selectedDetails.filter((det, index) => index != i),
                }));
              }}
            >
              Устгах
            </Button>
          </HStack>
        );
      })}

      <VStack gap={4} alignItems={"start"} maxW={"500px"} mt={10}>
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
          border={"none"}
          type="file"
          placeholder="Зураг"
          onChange={(e) =>
            setDetail((prev) => ({ ...prev, img: e.target.files?.[0] }))
          }
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
            {details.map((e) => {
              return <option value={e?._id}>{e?.title}</option>;
            })}
          </Select>
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
