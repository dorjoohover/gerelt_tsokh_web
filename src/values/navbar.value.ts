import { NavItemsTypes } from "@/components/navbar";
import {
  additionLearningAdvice,
  contact,
  copyrightNotice,
  feedback,
  gratitude,
  hotTopics,
  legalInfo,
  overview,
  performance,
  supplier,
} from "@/global/string";

export const gereltNavValues: NavItemsTypes[] = [
  {
    title: "Гэрэлт Цох Байшин ТББ",
    link: [
      {
        name: "Бидний тухай",
        value: "/about",
      },
    ],
  },
  {
    title: "Хийгдэж буй ажил",
    link: [
      {
        name: "Судалгаа",
        value: "/",
      },
      {
        name: "Төсөл",
        value: "/",
      },
      {
        name: "Сургалт ба зөвлөгөө үйлчилгээ",
        value: "/",
      },
      {
        name: "Зарлагдсан тэтгэлэг ба хандив",
        value: "/",
      },
    ],
  },
  {
    title: "Хийгдсэн ажил",
    link: [
      {
        name: "Судалгаа",
        value: "/work?name=research",
      },
      {
        name: "Төсөл",
        value: "/work?name=project",
      },
      {
        name: "Сургалт ба зөвлөгөө үйлчилгээ",
        value: "/work?name=advice",
      },
      {
        name: "Тэтгэлэг ба хандив",
        value: "/work?name=donation",
      },
    ],
  },
  {
    title: "Холбогдох нэмэлт мэдээлэл ",
    link: [
      {
        name: "Текст мэдээлэл",
        value: "/info?name=text",
      },
      {
        name: "Дуут мэдээлэл",
        value: "/info?name=voice",
      },
      {
        name: "Дүрст мэдээлэл",
        value: "/info?name=video",
      },
    ],
  },
];

export const tokhiruulgaNavValues: NavItemsTypes[] = [
  {
    title: "Tokhiruulga.mn",
    link: [
      {
        name: gratitude,
        value: "/tokhiruulga?name=gratitude",
      },
      {
        name: overview,
        value: "/tokhiruulga?name=overview",
      },
      {
        name: copyrightNotice,
        value: "/tokhiruulga?name=notice",
      },
      {
        name: performance,
        value: "/tokhiruulga?name=performance",
      },
      {
        name: hotTopics,
        value: "/tokhiruulga?name=topic",
      },
      {
        name: legalInfo,
        value: "/tokhiruulga?name=legal",
      },
      {
        name: additionLearningAdvice,
        value: "/tokhiruulga?name=advice",
      },
      {
        name: supplier,
        value: "/tokhiruulga?name=supplier",
      },
      {
        name: feedback,
        value: "/tokhiruulga?name=feedback",
      },
      {
        name: contact,
        value: "/tokhiruulga?name=contact",
      },
    ],
  },
];
