import { NavItemsTypes } from "@/components/navbar";
import {
  imgCCRLogo,
  imgEULogo,
  imgFoundation,
  imgGACLogo,
  imgMONESLogo,
  imgTAFLogo,
  svgFb,
  svgText,
  svgTwitter,
  svgVideo,
  svgVoice,
  svgYt,
} from "./assets";
import {
  ArticleTypes,
  FormTypes,
  InfoTypes,
  PerformanceTypes,
  TokhiruulgaTypes,
  WorkTypes,
} from "./enum";
import { FilterType } from "./functions";
import {
  accessibleEmployment,
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
import { FaFacebookF, FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

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
        value: "/tokhiruulga?name=feeback",
      },
      {
        name: contact,
        value: "/tokhiruulga?name=cantact",
      },
    ],
  },
];

// tokhiruulga

export const gratitudeValues = {
  img: imgFoundation,
  text: "Tokhiruulga.mn цахим хуудсанд багтсан 100 үйлдэл гүйцэтгэх чадвар алдалтын нэршлийг ICFD буюу өвчин онош, үйлдлийг ангилах олон улсын аргачлалд суурилан багцалсан.\nМонгол улс уг аргачлалыг хараахан нэвтрүүлээгүй байгаа тул дотоодын эрх зүйн хүрээний зохицуулалт болон хэрэгжүүлэх тогтолцоо нь цогцоор хөгжөөгүй байна.\nТиймээс хуулийн мэдээ буланд оруулах мэдээлэл уялдаатай цогц биш байгааг хүлээн зөвшөөрөхийн сацуу олон улсад ч мөн хариултгүй байсан асуултууд шийдлээ олж, бодлого хэрэгжилт хоёр нь хэрхэн нэг нэгнээ дэмжин цогц тогтолцоо болон хөгжсөнийг сонирхуулах зорилгоор халуун сэдэв буланг хамтад нь оруулав.\nМонгол улсын засгийн газар соёрхон баталсан НҮБ-ын Хөгжлийн Бэрхшээлтэй Хүний Эрхийг Хамгаалах тухай Конвенц болон АНУ-ын ADA гэсэн хоёр том эрх зүйн баримт бичиг нэг нэгнээ нөхөн дэмждэгийг баталсан судалгаа ч байдаг. Эдгээр хоёр баримт бичиг дээр дурдсан ICFD аргачлалтай шууд холбоотой юм.\nТэгвэл манай улсын хөгжлийн бэрхшээлтэй хүний эрхийн тухай хууль дээрх Конвенцын утга санаанд үндэслэгдсэн гэдгээс дүгнэхэд энэхүү цахим хуудас маань удахгүй нэвтрэх ICFD аргачлал болон дагалдан гарах бусад олон шинэчлэлүүдийг урьтаж чухал гарын авлага болон түүчээлж байна.",
  text1:
    "Уг үйл ажиллагааны тэргүүний эгнээнд сууж байсан нэгэн ажил олгогчийн төлөөлөл Өөрт маань ажил санал болгож, өөр өөр үйлдлийн алдагдалтай гурван өөр хүнийг ажилд авах үйл явцаа үргэлжлүүлэн тун удалгүй ажилд авсан сайхан түүх бий. Энэ үйл явдлаас хойш дөрөв дэх жилдээ амжилттайгаар ажиллаж байна бидний дөрвөн нөхөр. \n 2022 оноос эхлэн хөрөнгө босгох, агуулгаа бэлтгэх ажлыг бага багаар хийсээр 2023 оны 12 дугаар сард албин ёсоор цацалтаа хийлээ. \n Хүртээмжтэй хөдөлмөр эхлэлтэд ажлын байрны тохируулга, ерөнхий ажлын орчны ээлтэй байдал асар чухлыг ойлгож дэмжин хандиваа өргөсөн хувь хүмүүс, санхүүжүүлэгч байгууллагууддаа талархаж байгаагаа илэрхийлэх энэ өдрийг тэсэн ядан хүлээж байснаа хэлэх юун. Нүдэнд зураглаж, сэтгэлд хоногшсон дурсамжуудыг бүгдийг дүрслэн тоочмоор байвч та бүхний цагийг үнэлэхийн учир үүгээр эцэслэе дээ.",
};
export const overviewValues = {
  img: imgFoundation,
  uri: "https://www.youtube.com/",
  text: "Tokhiruulga.mn цахим хуудсанд багтсан 100 үйлдэл гүйцэтгэх чадвар алдалтын нэршлийг ICFD буюу өвчин онош, үйлдлийг ангилах олон улсын аргачлалд суурилан багцалсан.\nМонгол улс уг аргачлалыг хараахан нэвтрүүлээгүй байгаа тул дотоодын эрх зүйн хүрээний зохицуулалт болон хэрэгжүүлэх тогтолцоо нь цогцоор хөгжөөгүй байна.\nТиймээс хуулийн мэдээ буланд оруулах мэдээлэл уялдаатай цогц биш байгааг хүлээн зөвшөөрөхийн сацуу олон улсад ч мөн хариултгүй байсан асуултууд шийдлээ олж, бодлого хэрэгжилт хоёр нь хэрхэн нэг нэгнээ дэмжин цогц тогтолцоо болон хөгжсөнийг сонирхуулах зорилгоор халуун сэдэв буланг хамтад нь оруулав.\nМонгол улсын засгийн газар соёрхон баталсан НҮБ-ын Хөгжлийн Бэрхшээлтэй Хүний Эрхийг Хамгаалах тухай Конвенц болон АНУ-ын ADA гэсэн хоёр том эрх зүйн баримт бичиг нэг нэгнээ нөхөн дэмждэгийг баталсан судалгаа ч байдаг. Эдгээр хоёр баримт бичиг дээр дурдсан ICFD аргачлалтай шууд холбоотой юм.\nТэгвэл манай улсын хөгжлийн бэрхшээлтэй хүний эрхийн тухай хууль дээрх Конвенцын утга санаанд үндэслэгдсэн гэдгээс дүгнэхэд энэхүү цахим хуудас маань удахгүй нэвтрэх ICFD аргачлал болон дагалдан гарах бусад олон шинэчлэлүүдийг урьтаж чухал гарын авлага болон түүчээлж байна. ",
  purpose:
    "Хүртээмжтэйгээр хөдөлмөр эрлэх  болон эрхлүүлэх соёлыг хэвшүүлэхэд тухайн ажилтанд үр дүнтэй байхуйц боломжит тохируулгыг хэрхэн тодорхойлон хэрэгжүүлж болохыг мэргэжлийн болон мэргэжлийн бус бүх оролцогч талд орон зайн хязгааргүйгээр түгээхийг зорилоо.\nБайгальд ээлтэйгээр, эдийн засгийн хэмнэлттэйгээр орон зайн хязгааргүйгээр хэрэгтэй хүмүүстэй мэдээлэл болон очиг.",
  question: "Tokhiruulga.mn юуны төлөө хаа хүрэхийг зорьж байна вэ?",
};

export const noticeValues =
  "Tokhiruulga.mn цахим хуудасны агуулгыг бэлтгэхдээ хоёр эх сурвалжийг ашигласан болно. \nАжлын байрны тохируулга болох мэргэжлийн мэдээллийг АНУ-ын Засгийн Газраас хөгжүүлж ажиллуулдаг, НҮБ-ын албан ёсны 6 хэл дээр давхар гарсан цахим эх сурвалжаас аван ямар нэг өөрчлөлтгүйгээр төрөлх хэлнээ буулган хүргэлээ. Уг агуулгыг ийнхүү ашиглах нь АНУ-ын холбогдох хуулиараа зохиогчийн эхийн хориггүй байдаг (Section 105, Copyright Law)\nМонгол улсын хууль, журам, тогтоолуудаас түүн эмхэтгэж ямар нэгэн өөрчлөлтгүйгээр шууд хуулбарлан орууллаа.\nОлон улсын өвчин ба үйлдэл гүйцэтгэх чадвар алдалтын ангиллын дагуу 100 нэршилд багцалсан агуулгыг Англи хэлнээс Монгол хэлэнд буулгах, мэргэжлийн талын хяналтыг Гэрэлт Цох Байшин ТББ өөрийн мэргэжил CRC эрхийнхээ хүрээнд хариуцан гүйцэтгэлээ.\nТиймээс энэхүү цахим хуудасны мэргэжлийн агуулгыг шууд хуулбарлан эсвэл Гэрэлт Цох Байшин ТББ-ын зөвшөөрөлгүйгээр өөрчилж мэргэжлийн агуулгыг гуйвуулан ашиглахыг мөн ашиг олохыг хориглоно.\nЭнэхүү цахим хуудсаараа олон улсын сайн туршлагаас мэдээлэл түгээхийг эрмэлзсэн бөгөөд авч ашигласан бүх оролцогч талын өмнө ямар нэгэн үүрэг хариуцлага хуулиар хүлээхгүй болохоо мэдэгдэж байна.";

export const feedbackValues = [
  {
    question: "Та дараах сонголтуудаас өөрт тохирохыг сонгоно уу",
    number: 1,
    type: FormTypes.checkbox,
    options: [
      {
        value: "employer",
        text: "Ажил олгогч",
      },
      {
        value: "disabled",
        text: "Үйлдэл гүйцэтгэх чадвараа алдсан хувь хүн",
      },
      {
        value: "professional",
        text: "Мэргэжилтэн (Job Coach гэх мэт)",
      },
      {
        value: "family",
        text: "Гэр бүлийн гишүүн/найз гэх мэт",
      },
      {
        value: "other",
        text: "Бусад",
      },
    ],
  },
  {
    question: "Энэ цахим хуудсаар хэр ойр орж ашигладаг вэ?",
    number: 2,
    type: FormTypes.checkbox,
    options: [
      {
        value: "perDay",
        text: "Өдөр бүр",
      },
      {
        value: "perWeek",
        text: "Долоо хоног тутам",
      },
      {
        value: "perMonth",
        text: "Сар бүр",
      },
      {
        value: "yearAtleast",
        text: "Жилд нэгээс олон удаа",
      },
    ],
  },
  {
    question: "Хайж байсан мэдээллээ эндээс олж чадсан.",
    number: 3,
    type: FormTypes.checkbox,
    options: [
      {
        value: "totally",
        text: "Бүрэн зөвшөөрч байна",
      },
      {
        value: "agree",
        text: "Зөвшөөрч байна",
      },
      {
        value: "notAllow",
        text: "Огт зөвшөөрөхгүй байна",
      },
      {
        value: "notAgree",
        text: "Зөвшөөрөхгүй байна",
      },
      {
        value: "dontKnow",
        text: "Сайн хэлж мэдэхгүй байна",
      },
      {
        value: "notProvided",
        text: " Миний хайсан мэдээлэл эрх зүйн суурь тогтолцоогоороо хангагдаагүй",
      },
    ],
  },
  {
    question:
      "Энэ хуудаснаас авсан мэдээлэл хүртээмжтэй хөдөлмөр эрхлэлтийн талаарх ойлголтыг маань баяжуулж эсвэл өөрчилж чадсан.",
    number: 4,
    type: FormTypes.checkbox,
    options: [
      {
        value: "totally",
        text: "Бүрэн зөвшөөрч байна",
      },
      {
        value: "agree",
        text: "Зөвшөөрч байна",
      },
      {
        value: "notAllow",
        text: "Огт зөвшөөрөхгүй байна",
      },
      {
        value: "notAgree",
        text: "Зөвшөөрөхгүй байна",
      },
      {
        value: "dontKnow",
        text: "Сайн хэлж мэдэхгүй байна",
      },
    ],
  },
  {
    question:
      "Байгууллага дотроо эсвэл удирдагчийнхаа хувьд өөртөө хийж болохуйц тодорхой санаа авч чадлаа. ",
    number: 5,
    type: FormTypes.checkbox,
    options: [
      {
        value: "yes",
        text: "Тийм",
      },
      {
        value: "no",
        text: "Үгүй",
      },
      {
        value: "dontKnow",
        text: "Сайн хэлж мэдэхгүй байна",
      },
      {
        value: "needMore",
        text: "Тодорхой санаа авсан ба цааш нэмэлт зөвлөгөө хэрэгтэй ",
      },
    ],
  },
  {
    question:
      "Хайсан мэдээллээ эндээс олж чадаагүй бол танд ямар мэдээлэл хэрэгтэй байгааг дор бичиж үлдээнэ үү.",
    number: 6,
    type: FormTypes.textarea,
    limit: 500,
    label: "(500 үгэнд багтаана уу)",
  },
  {
    question: " Танд нэмэлтээр үлдээх санал сэтгэгдэл байвал дор бичнэ үү.",
    number: 7,
    type: FormTypes.textarea,
    limit: 500,
    label: "(500 үгэнд багтаана уу)",
  },
];

export const contactValues = [
  {
    type: FormTypes.input,
    limit: 50,
    label: "Овог",
    flex: true,
  },
  {
    type: FormTypes.input,
    limit: 50,
    label: "Нэр",
    flex: true,
  },
  {
    type: FormTypes.input,
    limit: 100,
    label: "И-мэйл *",
  },
  {
    type: FormTypes.input,
    limit: 100,
    label: "Гарчиг",
  },
  {
    type: FormTypes.textarea,
    limit: 500,
    label: "Зурвасаа бичнэ үү...",
  },
];

export const socials = [
  {
    icon: FaFacebookF,
    uri: "www.facebook.com",
  },
  {
    icon: FaTwitter,
    uri: "www.twitter.com",
  },
  {
    icon: FaYoutube,
    uri: "www.youtube.com",
  },
];
