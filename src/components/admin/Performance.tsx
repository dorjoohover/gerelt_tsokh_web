"use client";

import { useState } from "react";
import AdminForm from "./Form";
import {
  Box,
  Button,
  HStack,
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
} from "@chakra-ui/react";
import { FilterType, filterName } from "@/global/functions";
import { ArticleTypes, MedicalTypes } from "@/global/enum";
import { tokhiruulgaTags } from "@/values/tags";

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
  const [details, setDetails] = useState<string[]>([]);
  const [detail, setDetail] = useState<string>(medicalType[0].value);
  const [values, setValues] = useState<string[]>([]);
  const [value, setValue] = useState<string>("1");
  const [conditions, setConditions] = useState<string[]>([]);
  const [condition, setCondition] = useState<string>("");
  const [view, setView] = useState(0);
  const submit = async () => {
    try {
    } catch (error) {}
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <AdminForm
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
            setView(1);
            onOpen();
          }}
        >
          Нөхцөл ба шийдэл
        </Button>

        {details.map((d, i) => {
          return (
            <HStack key={i}>
              <Text>{filterName(d, medicalType)}</Text>
              <Button
                onClick={() => {
                  onOpen();
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
              setDetail(e.target.value);
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
              setDetails((prev) => [...prev, detail]);
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
              {view == 0 ? filterName(detail, medicalType) : "Нөхцөл ба шийдэл"}
            </ModalHeader>
            <ModalCloseButton
              onClick={() => {
                onClose();
              }}
            />
            <ModalBody>
              {(view == 0 ? values : conditions).map((v, i) => {
                return (
                  <HStack>
                    {view == 0 ? (
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
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                      </Select>
                    ) : (
                      <Input
                        value={v}
                        onChange={(e) => {
                          setValues((prev) => [
                            ...prev.slice(0, i),
                            e.target.value,
                            ...prev.slice(i + 1),
                          ]);
                        }}
                      />
                    )}
                    <Button
                      onClick={() => {
                        if (view == 0) {
                          setValues(values.filter((val) => val != v));
                        } else {
                          setConditions(conditions.filter((con) => con != v));
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </HStack>
                );
              })}
              <HStack>
                {view == 0 ? (
                  <Select
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  >
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                  </Select>
                ) : (
                  <Input
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                  />
                )}
                <Button
                  onClick={() => {
                    if (view == 0) {
                      setValues((prev) => [...prev, value]);
                      setValue("1");
                    } else {
                      setConditions((prev) => [...prev, condition]);
                      setCondition("");
                    }
                  }}
                >
                  Add
                </Button>
              </HStack>

              <Button
                onClick={() => {
                  onClose();
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
type CustomDetailType = {
  title: string;
  text?: string;
  img?: string;
};
type CustomType = {
  title: string;
  details: CustomDetailType[];
};
export function AdminPerformanceCustom() {
  const [data, setData] = useState<CustomType>({
    title: "",
    details: [],
  });
  const [detail, setDetail] = useState<CustomDetailType>({
    title: "",
    img: "",
    text: "",
  });
  const submit = async () => {
    try {
    } catch (error) {}
  };

  return (
    <AdminForm
      onTitle={(e) => setData((prev) => ({ ...prev, title: e }))}
      onChange={(e) => setData((prev) => ({ ...prev, text: e }))}
      title={`Үйлдэл гүйцэтгэх чадвар алдалт > Custom`}
      text="Гарчиг"
      editor={false}
      onSubmit={submit}
    >
      {data.details?.map((detail, i) => {
        return (
          <HStack key={i}>
            <Text>{detail.title}</Text>
            <Button
              onClick={() => {
                setData((prev) => ({
                  ...prev,
                  details: data.details.filter((det, index) => index != i),
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
          onChange={(e) =>
            setDetail((prev) => ({ ...prev, title: e.target.value }))
          }
        />

        <Textarea
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
            setDetail((prev) => ({ ...prev, img: e.target.value }))
          }
        />
        <Button
          onClick={() => {
            setData((prev) => ({
              ...prev,
              details: [...data.details, detail],
            }));
          }}
        >
          Нэмэх
        </Button>
      </VStack>
    </AdminForm>
  );
}
