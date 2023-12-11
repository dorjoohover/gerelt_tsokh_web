import { FilterType } from "@/global/functions";
import {
  imgCCRLogo,
  imgEULogo,
  imgFoundation,
  imgGACLogo,
  imgGratitude,
  imgIcon1,
  imgIcon2,
  imgInfo1,
  imgMONESLogo,
  imgTAFLogo,
  svgText,
  svgVideo,
  svgVoice,
} from "../global/assets";
import { FormTypes, InfoTypes, MedicalTypes } from "../global/enum";

import {
  accessibleEmployment,
  consistent,
  inclusiveEducation,
  innovativeIdea,
  professionalCooperation,
  textInfo,
  videoInfo,
  voiceInfo,
} from "../global/string";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// export const api = "http://139.162.40.225:5000/api/";
export const api = "http://localhost:5000/api/";
export const url = "http://139.162.40.225";

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
];

export class Messages {
  static requiredFile = "Файл оруулна уу.";
  static requiredTitle = "Гарчиг оруулна уу.";
  static requiredText = "Мэдээллээ оруулна уу.";
  static occured = "Алдаа гарлаа.";
}
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
  {
    name: "Бусад боломжит тохирлууд",
    value: MedicalTypes.OTHER,
  },
];
export const partnerValues = [
  imgCCRLogo,
  imgGACLogo,
  imgMONESLogo,
  imgEULogo,
  imgTAFLogo,
];

// about us
export const visionValue =
  "Үйлдэл гүйцэтгэх чадвар алдалттай хүүхэд, залуучууд, насанд хүрэгсэд хараат бус бие даасан байдлаа нэмэгдүүлж, эрх чөлөөгөө олж авахад нь хөтөлнө.";

export const missionValue =
  "Бид суралцах болон хөдөлмөр эрхлэх үйл явцыг хүртээмжтэй болгоход тохируулга үйлчилгээг мэргэжлийн түвшинд цогцоор үзүүлдэг болоход хүчээ сорино. Олон улсын ангиллын аргачлалаар ажиллаж мэргэжлийн зөвлөх үйлчилгээгүйгээр хувь нэмрээ оруулна.\n\nХүртээмжтэйгээр суралцахуй болон хүртээмжтэйгээр хөдөлмөр эрхлэхүйн соёлыг нэвтрүүлэхийг бид эрмэлзэнэ.";

export const valuableValues = [
  {
    title: innovativeIdea,
    text: "Асуудлыг шийдлийн хамт бодит амьдралаас олж харан зоригтойгоор шинийг санаачилна. ",
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
    icon: imgIcon1,
    text: inclusiveEducation,
  },
  {
    icon: imgIcon2,
    text: accessibleEmployment,
  },
];

export const foundationHistoryValue = {
  img: imgFoundation,
  title: "Гэрэлт Цох Байшин ТББ",
  semiTitle:
    "Ашгийн төлөө бус, гишүүнчлэлгүй, нийгэмд үйлчлэх иргэний нийгмийн нэг хэсэг",
  text: "Аливаа бүхний эхлэл нь хүн учир байгууллагын түүхийг ч мөн үүсгэн байгуулагч нь эхлүүлэн бичсэн байх юм.\n\nГэрэлт Цох Байшин ТББ-ыг санаачлагч Оюунтөгс гэх ид залуу насандаа харах чадварынхаа ерэн хувийг алдсан нэгэн бүсгүй амьдралын олон нугачааг бүрзгэр харанхуйн дунд давж яваа нэгэн билээ.\n\nОюун санааны эрх чөлөөгөө бүрэн шахуу алдсан амьдралынхаа дөрвөн жилийг нөхө гэсэн мэт хурдтай гүйсээр байгаа нь энэхүү байгууллагын үндэс суурь тавигдсантай холбоотой.\n\nТүүний амьдралын хоёр дах хуудас буюу шинэ амьдралаас нь эхлэн товч хүүрнэхэд харааны бэрхшээлтэй иргэдтэйгээ хамт хөл нийлүүлэн цагаан таягаар хөтөч хийн алхсан хоёр жил хагасын дотор үлдсэн амьдралдаа хүрэх зорилгоо тодорхойлсон учир онолын шинэлэг мэдлэг болон хувийн туршлагыг хослуулан өөрийгөө боловсруулах хэрэгтэйгээ байгаагаа олж харсан хэрэг.\n\n\n\nТийнхүү Fulbright тэтгэлэгт өрсөлдөх зориг хүрч олон хүний итгэлийг хүлээн шалгарснаар Монголдоо байдаггүй мэргэжил болох Certified Rehabilitation Counseling мэргэжлээр АНУ-д магистраа хамгаалж ирээд тун удалгүй Гэрэлт Цох Байшин-г байгуулсан.\n Хөгжлийн бэрхшээлийн нөхөн сэргээх зөвлөх мэргэжлээр цогц ойлголт авч хүн төвтэй аргачлалын нууцыг тайлсан тул бүх бэрхшээлт үр өгөөжтэй байхуйц хүрээнд хувь нэмрээ оруулахыг хүссэн юм.\n\n Онолын хөтөлбөрөөс гадна гурван төрлийн дадлага ажил хийсний нэг нь сэтгэцийн эмгэгтэй хүмүүсийн өөрсдийнх нь бодит амьдралаас үүсэн хөгжсөн ClubHouse нийгэм – сэтгэл зүйн нөхөн сэргээх цогц загвар, нөгөө нь суралцаж байсан их сургуулийнхаа хөгжлийн бэрхшээлтэй оюутнуудад тохируулга үйлчилгээ үзүүлдэг цогц мэргэжлийн төв харин гурав дах нь хөгжлийн бэрхшээлтэй иргэдийг ажилд зуучлах онол дадлага хосолсон аргачлал юм.\n\n Цаг хугацаа, оюун бодлоо бүрэн зориулж суралцсан хоёр жилийнхээ үр дүнг гаргаж дээд боловсрол дах тэгш хамруулах сургалтын орчныг бий болгох, ажлын байрны тохируулгыг ICFD буюу өвчин ба үйлдлийн чадвар алдалтыг ангилах олон улсын аргачлалд суурилсан мэргэжлийн цогц цахим гарын авлага гаргаж зөвлөх үйлчилгээнийхээ ажлын зэвсгийг билгэн толилуулсан нь байгуулахынхнаа үндсэн чиглэлд нийцэж байна.\n\nАсуудлын орхигдсон өнцгийг мэдрэмжтэйгээр харж, эрх чөлөөтэйгөөр сэтгэн ажиллахын төлөө тэмцдэг бас хамтардаг чанар иргэний нийгмийн зүтгэлтнүүдийн гол онцлог билээ.",
};

// tokhiruulga
export const noticeValue =
  "Tokhiruulga.mn цахим хуудасны агуулгыг бэлтгэхдээ хоёр эх сурвалжийг ашигласан болно. \n\nАжлын байрны тохируулга болох мэргэжлийн мэдээллийг АНУ-ын Засгийн Газраас хөгжүүлж ажиллуулдаг, НҮБ-ын албан ёсны 6 хэл дээр давхар гарсан цахим эх сурвалжаас аван ямар нэг өөрчлөлтгүйгээр төрөлх хэлнээ буулган хүргэлээ. Уг агуулгыг ийнхүү ашиглах нь АНУ-ын холбогдох хуулиараа зохиогчийн эхийн хориггүй байдаг (Section 105, Copyright Law)\n\n\nМонгол улсын хууль, журам, тогтоолуудаас түүн эмхэтгэж ямар нэгэн өөрчлөлтгүйгээр шууд хуулбарлан орууллаа.\n\n\nОлон улсын өвчин ба үйлдэл гүйцэтгэх чадвар алдалтын ангиллын дагуу 100 нэршилд багцалсан агуулгыг Англи хэлнээс Монгол хэлэнд буулгах, мэргэжлийн талын хяналтыг Гэрэлт Цох Байшин ТББ өөрийн мэргэжил CRC эрхийнхээ хүрээнд хариуцан гүйцэтгэлээ.\n\nТиймээс энэхүү цахим хуудасны мэргэжлийн агуулгыг шууд хуулбарлан эсвэл Гэрэлт Цох Байшин ТББ-ын зөвшөөрөлгүйгээр өөрчилж мэргэжлийн агуулгыг гуйвуулан ашиглахыг мөн ашиг олохыг хориглоно.\n\n\nЭнэхүү цахим хуудсаараа олон улсын сайн туршлагаас мэдээлэл түгээхийг эрмэлзсэн бөгөөд авч ашигласан бүх оролцогч талын өмнө ямар нэгэн үүрэг хариуцлага хуулиар хүлээхгүй болохоо мэдэгдэж байна.";
export const gratitudeValues = {
  img: imgGratitude,
  text: "Tokhiruulga.mn цахим хуудсанд багтсан 100 үйлдэл гүйцэтгэх чадвар алдалтын нэршлийг ICFD буюу өвчин онош, үйлдлийг ангилах олон улсын аргачлалд суурилан багцалсан.\nМонгол улс уг аргачлалыг хараахан нэвтрүүлээгүй байгаа тул дотоодын эрх зүйн хүрээний зохицуулалт болон хэрэгжүүлэх тогтолцоо нь цогцоор хөгжөөгүй байна.\nТиймээс хуулийн мэдээ буланд оруулах мэдээлэл уялдаатай цогц биш байгааг хүлээн зөвшөөрөхийн сацуу олон улсад ч мөн хариултгүй байсан асуултууд шийдлээ олж, бодлого хэрэгжилт хоёр нь хэрхэн нэг нэгнээ дэмжин цогц тогтолцоо болон хөгжсөнийг сонирхуулах зорилгоор халуун сэдэв буланг хамтад нь оруулав.\nМонгол улсын засгийн газар соёрхон баталсан НҮБ-ын Хөгжлийн Бэрхшээлтэй Хүний Эрхийг Хамгаалах тухай Конвенц болон АНУ-ын ADA гэсэн хоёр том эрх зүйн баримт бичиг нэг нэгнээ нөхөн дэмждэгийг баталсан судалгаа ч байдаг. Эдгээр хоёр баримт бичиг дээр дурдсан ICFD аргачлалтай шууд холбоотой юм.\nТэгвэл манай улсын хөгжлийн бэрхшээлтэй хүний эрхийн тухай хууль дээрх Конвенцын утга санаанд үндэслэгдсэн гэдгээс дүгнэхэд энэхүү цахим хуудас маань удахгүй нэвтрэх ICFD аргачлал болон дагалдан гарах бусад олон шинэчлэлүүдийг урьтаж чухал гарын авлага болон түүчээлж байна.",
  text1:
    "Уг үйл ажиллагааны тэргүүний эгнээнд сууж байсан нэгэн ажил олгогчийн төлөөлөл Өөрт маань ажил санал болгож, өөр өөр үйлдлийн алдагдалтай гурван өөр хүнийг ажилд авах үйл явцаа үргэлжлүүлэн тун удалгүй ажилд авсан сайхан түүх бий. Энэ үйл явдлаас хойш дөрөв дэх жилдээ амжилттайгаар ажиллаж байна бидний дөрвөн нөхөр. \n 2022 оноос эхлэн хөрөнгө босгох, агуулгаа бэлтгэх ажлыг бага багаар хийсээр 2023 оны 12 дугаар сард албин ёсоор цацалтаа хийлээ. \n Хүртээмжтэй хөдөлмөр эхлэлтэд ажлын байрны тохируулга, ерөнхий ажлын орчны ээлтэй байдал асар чухлыг ойлгож дэмжин хандиваа өргөсөн хувь хүмүүс, санхүүжүүлэгч байгууллагууддаа талархаж байгаагаа илэрхийлэх энэ өдрийг тэсэн ядан хүлээж байснаа хэлэх юун. Нүдэнд зураглаж, сэтгэлд хоногшсон дурсамжуудыг бүгдийг дүрслэн тоочмоор байвч та бүхний цагийг үнэлэхийн учир үүгээр эцэслэе дээ.",
};
export const overviewValues = {
  img: imgInfo1,
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
    code: "firstname",
    flex: true,
  },
  {
    type: FormTypes.input,
    limit: 50,
    label: "Нэр",
    flex: true,
    code: "lastname",
  },
  {
    type: FormTypes.input,
    limit: 100,
    label: "И-мэйл *",
    code: "email",
  },
  {
    type: FormTypes.input,
    limit: 100,
    label: "Гарчиг",
    code: "title",
  },
  {
    code: "text",
    type: FormTypes.textarea,
    limit: 500,
    label: "Зурвасаа бичнэ үү...",
  },
];

export const socials = [
  {
    icon: FaFacebookF,
    uri: "https://www.facebook.com/fireflyhousengo",
  },
  {
    icon: FaTwitter,
    uri: "www.twitter.com",
  },
  {
    icon: FaLinkedinIn,
    uri: "www.youtube.com",
  },
];

export const advice =
  "https://video.xx.fbcdn.net/v/t42.1790-2/275224204_340526124679485_2830403800762477984_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=55d0d3&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ohc=l7djPdU8Yl0AX97AEcm&_nc_rml=0&_nc_ht=scontent.fuln1-2.fna&oh=00_AfDcgiAtOriWULiON06U2W1Sd_CfyK3zhssRu0O5F06ueA&oe=656613AB";

// about
