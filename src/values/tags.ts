import {
  ArticleTypes,
  InfoTypes,
  PerformanceTypes,
  TokhiruulgaTypes,
  WorkTypes,
} from "@/global/enum";
import { FilterType } from "@/global/functions";
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

export const additionInfoTags: FilterType[] = [
  {
    name: "Текст мэдээллүүд",
    value: InfoTypes.text,
  },
  {
    name: "Дуут мэдээллүүд",
    value: InfoTypes.voice,
  },
  {
    name: "Дүрст мэдээллүүд",
    value: InfoTypes.video,
  },
];
export const articleTags: FilterType[] = [
  {
    name: "Нийтлэл",
    value: ArticleTypes.article,
  },
  {
    name: "Мэдээ",
    value: ArticleTypes.info,
  },
];
export const workTags: FilterType[] = [
  {
    name: "Судалгаа ",
    value: WorkTypes.research,
  },
  {
    name: "Сургалт ба зөвлөгөө үйлчилгээ ",
    value: WorkTypes.advice,
  },
  {
    name: "Төсөл",
    value: WorkTypes.project,
  },
  {
    name: "Тэтгэлэг ба хандив",
    value: WorkTypes.donation,
  },
];
export const tokhiruulgaTags: FilterType[] = [
  {
    name: gratitude,
    value: TokhiruulgaTypes.gratitude,
  },
  {
    name: overview,
    value: TokhiruulgaTypes.overview,
  },
  {
    name: copyrightNotice,
    value: TokhiruulgaTypes.notice,
  },
  {
    name: performance,
    value: TokhiruulgaTypes.performance,
    sub: [
      {
        name: "A-Б хооронд",
        value: PerformanceTypes.ab,
      },
      {
        name: "В-Г хооронд",
        value: PerformanceTypes.vg,
      },
      {
        name: "Д-Е хооронд",
        value: PerformanceTypes.de,
      },
      {
        name: "Ё-Ж хооронд",
        value: PerformanceTypes.ej,
      },
      {
        name: "З-И хооронд",
        value: PerformanceTypes.zi,
      },
      {
        name: "К-Л хооронд",
        value: PerformanceTypes.kl,
      },
      {
        name: "М-Н хооронд",
        value: PerformanceTypes.mn,
      },
      {
        name: "О-Ө хооронд",
        value: PerformanceTypes.ou,
      },
      {
        name: "П-Р хооронд",
        value: PerformanceTypes.pr,
      },
      {
        name: "С-Т хооронд",
        value: PerformanceTypes.st,
      },
      {
        name: "У-Ү хооронд",
        value: PerformanceTypes.uv,
      },
      {
        name: "Ф-Х хооронд",
        value: PerformanceTypes.ph,
      },
      {
        name: "Ц-Ч хооронд",
        value: PerformanceTypes.tsch,
      },
      {
        name: "Ш-Щ хооронд",
        value: PerformanceTypes.shshch,
      },
      {
        name: "Э-Я хооронд",
        value: PerformanceTypes.ey,
      },
    ],
  },
  {
    name: hotTopics,
    value: TokhiruulgaTypes.topic,
  },
  {
    name: legalInfo,
    value: TokhiruulgaTypes.legal,
  },
  {
    name: additionLearningAdvice,
    value: TokhiruulgaTypes.advice,
  },
  {
    name: supplier,
    value: TokhiruulgaTypes.supplier,
  },
  {
    name: feedback,
    value: TokhiruulgaTypes.feedback,
  },
  {
    name: contact,
    value: TokhiruulgaTypes.contact,
  },
];
