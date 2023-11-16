import { NavItemsTypes } from "@/components/navbar";
import {
  imgCCRLogo,
  imgEULogo,
  imgFoundation,
  imgGACLogo,
  imgMONESLogo,
  imgTAFLogo,
  svgText,
  svgVideo,
  svgVoice,
} from "./assets";
import { InfoTypes } from "./enum";
import { FilterType } from "./functions";
import {
  accessibleEmployment,
  additionInfo,
  additionLearningAdvice,
  consistent,
  contact,
  copyrightNotice,
  feedback,
  gratitude,
  hotTopics,
  inclusiveEducation,
  innovativeIdea,
  legalInfo,
  overview,
  performance,
  professionalCooperation,
  supplier,
  textInfo,
  videoInfo,
  voiceInfo,
} from "./string";

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

export const additionInfoValues = [
  {
    icon: svgText,
    text: textInfo,
    value: InfoTypes.text,
  },
  {
    icon: svgVoice,
    text: voiceInfo,
    value: InfoTypes.voice,
  },
  {
    icon: svgVideo,
    text: videoInfo,
    value: InfoTypes.video,
  },
];

export const partnerValues = [
  imgEULogo,
  imgGACLogo,
  imgCCRLogo,
  imgMONESLogo,
  imgTAFLogo,
];

// about us
export const visionValue =
  "Үйлдэл гүйцэтгэх чадвар алдалттай хүүхэд, залуучууд, насанд хүрэгсэд хараат бус бие даасан байдлаа нэмэгдүүлж, эрх чөлөөгөө олж авахад нь хөтөлнө.";

export const missionValue =
  "Бид суралцах болон хөдөлмөр эрхлэх үйл явцыг хүртээмжтэй болгоход тохируулга үйлчилгээг мэргэжлийн түвшинд цогцоор үзүүлдэг болоход хүчээ сорино. Олон улсын ангиллын аргачлалаар ажиллаж мэргэжлийн зөвлөх үйлчилгээгүйгээр хувь нэмрээ оруулна.\nХүртээмжтэйгээр суралцахуй болон хүртээмжтэйгээр хөдөлмөр эрхлэхүйн соёлыг нэвтрүүлэхийг бид эрмэлзэнэ.";

export const valuableValues = [
  {
    title: innovativeIdea,
    text: "Асуудлыг шийдлийн хамт бодит амьдралаас олж харан зоригтойгоор шинийг санаачилна.",
  },
  {
    title: consistent,
    text: "Өөрсдийн байр сууринд үнэ цэнэ өгч салбарынхаа оролцогч талуудтай тууштай хамтран ажиллана. ",
  },
  {
    title: professionalCooperation,
    text: "Бидний салбартаа оруулах хувь нэмэр үнэн зөв мэргэжлийн байх болно.",
  },
];
export const directionActivityValues = [
  {
    icon: svgText,
    text: inclusiveEducation,
  },
  {
    icon: svgText,
    text: accessibleEmployment,
  },
];

export const foundationHistoryValue = {
  img: imgFoundation,
  title: "Гэрэлт Цох Байшин ТББ",
  semiTitle:
    "Ашгийн төлөө бус, гишүүнчлэлгүй, нийгэмд үйлчлэх иргэний нийгмийн нэг хэсэг",
  text: "Аливаа бүхний эхлэл нь хүн учир байгууллагын түүхийг ч мөн үүсгэн байгуулагч нь эхлүүлэн бичсэн байх юм.\n Гэрэлт Цох Байшин ТББ-ыг санаачлагч Оюунтөгс гэх ид залуу насандаа харах чадварынхаа ерэн хувийг алдсан нэгэн бүсгүй амьдралын олон нугачааг бүрзгэр харанхуйн дунд давж яваа нэгэн билээ.\nОюун санааны эрх чөлөөгөө бүрэн шахуу алдсан амьдралынхаа дөрвөн жилийг нөхө гэсэн мэт хурдтай гүйсээр байгаа нь энэхүү байгууллагын үндэс суурь тавигдсантай холбоотой.\n Түүний амьдралын хоёр дах хуудас буюу шинэ амьдралаас нь эхлэн товч хүүрнэхэд харааны бэрхшээлтэй иргэдтэйгээ хамт хөл нийлүүлэн цагаан таягаар хөтөч хийн алхсан хоёр жил хагасын дотор үлдсэн амьдралдаа хүрэх зорилгоо тодорхойлсон учир онолын шинэлэг мэдлэг болон хувийн туршлагыг хослуулан өөрийгөө боловсруулах хэрэгтэйгээ байгаагаа олж харсан хэрэг.",
  text1:
    "Тийнхүү Fulbright тэтгэлэгт өрсөлдөх зориг хүрч олон хүний итгэлийг хүлээн шалгарснаар Монголдоо байдаггүй мэргэжил болох Certified Rehabilitation Counseling мэргэжлээр АНУ-д магистраа хамгаалж ирээд тун удалгүй Гэрэлт Цох Байшин-г байгуулсан.\n Хөгжлийн бэрхшээлийн нөхөн сэргээх зөвлөх мэргэжлээр цогц ойлголт авч хүн төвтэй аргачлалын нууцыг тайлсан тул бүх бэрхшээлт үр өгөөжтэй байхуйц хүрээнд хувь нэмрээ оруулахыг хүссэн юм.\n Онолын хөтөлбөрөөс гадна гурван төрлийн дадлага ажил хийсний нэг нь сэтгэцийн эмгэгтэй хүмүүсийн өөрсдийнх нь бодит амьдралаас үүсэн хөгжсөн ClubHouse нийгэм – сэтгэл зүйн нөхөн сэргээх цогц загвар, нөгөө нь суралцаж байсан их сургуулийнхаа хөгжлийн бэрхшээлтэй оюутнуудад тохируулга үйлчилгээ үзүүлдэг цогц мэргэжлийн төв харин гурав дах нь хөгжлийн бэрхшээлтэй иргэдийг ажилд зуучлах онол дадлага хосолсон аргачлал юм.\n Цаг хугацаа, оюун бодлоо бүрэн зориулж суралцсан хоёр жилийнхээ үр дүнг гаргаж дээд боловсрол дах тэгш хамруулах сургалтын орчныг бий болгох, ажлын байрны тохируулгыг ICFD буюу өвчин ба үйлдлийн чадвар алдалтыг ангилах олон улсын аргачлалд суурилсан мэргэжлийн цогц цахим гарын авлага гаргаж зөвлөх үйлчилгээнийхээ ажлын зэвсгийг билгэн толилуулсан нь байгуулахынхнаа үндсэн чиглэлд нийцэж байна.\n Асуудлын орхигдсон өнцгийг мэдрэмжтэйгээр харж, эрх чөлөөтэйгөөр сэтгэн ажиллахын төлөө тэмцдэг бас хамтардаг чанар иргэний нийгмийн зүтгэлтнүүдийн гол онцлог билээ.",
};

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
        value: "/about",
      },
      {
        name: "Төсөл",
        value: "/about",
      },
      {
        name: "Сургалт ба зөвлөгөө үйлчилгээ",
        value: "/about",
      },
      {
        name: "Зарлагдсан тэтгэлэг ба хандив",
        value: "/about",
      },
    ],
  },
  {
    title: "Хийгдсэн ажил",
    link: [
      {
        name: "Судалгаа",
        value: "/about",
      },
      {
        name: "Төсөл",
        value: "/about",
      },
      {
        name: "Сургалт ба зөвлөгөө үйлчилгээ",
        value: "/about",
      },
      {
        name: "Тэтгэлэг ба хандив",
        value: "/about",
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
      {
        name: "Тэтгэлэг ба хандив",
        value: "/about",
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
        value: "/about",
      },
      {
        name: overview,
        value: "/about",
      },
      {
        name: copyrightNotice,
        value: "/about",
      },
      {
        name: performance,
        value: "/about",
      },
      {
        name: hotTopics,
        value: "/about",
      },
      {
        name: legalInfo,
        value: "/about",
      },
      {
        name: additionLearningAdvice,
        value: "/about",
      },
      {
        name: supplier,
        value: "/about",
      },
      {
        name: feedback,
        value: "/about",
      },
      {
        name: contact,
        value: "/about",
      },
    ],
  },
  
];
