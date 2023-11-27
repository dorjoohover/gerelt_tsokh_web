import { NavItemsTypes } from "@/components/navbar";
import { PerformanceTypes, TopicTypes } from "@/global/enum";
import { filterName } from "@/global/functions";
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
import { tokhiruulgaTags } from "./tags";

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

export const adminNavbarValue = [
  {
    title: "Home page удирдах",
    links: [],
  },
  {
    title: "Гэрэлт Цох удирдах",
    links: [
      {
        title: "Нэмэлт мэдээллүүд ",
        link: [
          {
            name: "Текст мэдээлэл",
            value: "/admin?route=info&name=text",
          },
          {
            name: "Дуут мэдээлэл",
            value: "/admin?route=info&name=voice",
          },
        ],
      },
      {
        title: "Хийгдсэн ажил",
        link: [
          {
            name: "Судалгаа",
            value: "/admin?route=work&name=research",
          },
          {
            name: "Төсөл",
            value: "/admin?route=work&name=project",
          },
          {
            name: "Сургалт ба зөвлөгөө үйлчилгээ",
            value: "/admin?route=work&name=advice",
          },
          {
            name: "Тэтгэлэг ба хандив",
            value: "/admin?route=work&name=donation",
          },
        ],
      },
      {
        title: "Нийтлэл",
        link: [
          {
            name: "Нийтлэл",
            value: "/admin?route=article&name=article",
          },
          {
            name: "Мэдээ",
            value: "/admin?route=article&name=info",
          },
        ],
      },
    ],
  },
  {
    title: "Tokhiruulga.mn удирдах",
    links: [
      {
        title: performance,
        link: [
          {
            name: filterName(PerformanceTypes.ab, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.ab}`,
          },
          {
            name: filterName(PerformanceTypes.vg, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.vg}`,
          },
          {
            name: filterName(PerformanceTypes.ej, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.ej}`,
          },
          {
            name: filterName(PerformanceTypes.zi, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.zi}`,
          },
          {
            name: filterName(PerformanceTypes.kl, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.kl}`,
          },
          {
            name: filterName(PerformanceTypes.mn, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.mn}`,
          },
          {
            name: filterName(PerformanceTypes.ou, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.ou}`,
          },
          {
            name: filterName(PerformanceTypes.pr, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.pr}`,
          },
          {
            name: filterName(PerformanceTypes.st, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.st}`,
          },
          {
            name: filterName(PerformanceTypes.uv, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.uv}`,
          },
          {
            name: filterName(PerformanceTypes.ph, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.ph}`,
          },
          {
            name: filterName(PerformanceTypes.tsch, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.tsch}`,
          },
          {
            name: filterName(PerformanceTypes.shshch, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.shshch}`,
          },
          {
            name: filterName(PerformanceTypes.ey, tokhiruulgaTags[3].sub!),
            value: `/admin?route=performance&name=${PerformanceTypes.ey}`,
          },
          {
            name: 'Custom',
            value: `/admin?route=performance&name=custom`,
          },
        ],
      },
      {
        title: hotTopics,
        link: [
          {
            name: filterName(TopicTypes.ab, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.ab}`,
          },
          {
            name: filterName(TopicTypes.vg, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.vg}`,
          },
          {
            name: filterName(TopicTypes.ej, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.ej}`,
          },
          {
            name: filterName(TopicTypes.zi, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.zi}`,
          },
          {
            name: filterName(TopicTypes.kl, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.kl}`,
          },
          {
            name: filterName(TopicTypes.mn, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.mn}`,
          },
          {
            name: filterName(TopicTypes.ou, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.ou}`,
          },
          {
            name: filterName(TopicTypes.pr, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.pr}`,
          },
          {
            name: filterName(TopicTypes.st, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.st}`,
          },
          {
            name: filterName(TopicTypes.uv, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.uv}`,
          },
          {
            name: filterName(TopicTypes.ph, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.ph}`,
          },
          {
            name: filterName(TopicTypes.tsch, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.tsch}`,
          },
          {
            name: filterName(TopicTypes.shshch, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.shshch}`,
          },
          {
            name: filterName(TopicTypes.ey, tokhiruulgaTags[4].sub!),
            value: `/admin?route=topic&name=${TopicTypes.ey}`,
          },
        ],
      },
      {
        title: legalInfo,
        link: [
          {
            name: "Хууль",
            value: "/admin?route=legal&name=law",
          },
          {
            name: "Тогтоол",
            value: "/admin?route=legal&name=decree",
          },
          {
            name: "Журам",
            value: "/admin?route=legal&name=regulation",
          },
        ],
      },
      {
        title: feedback,
        link: [
          {
            name: feedback,
            value: "/admin?route=feedback&name=view",
          },
        ],
      },
      {
        title: contact,
        link: [
          {
            name: contact,
            value: "/admin?route=contact&name=view",
          },
        ],
      },
    ],
  },
];
