import { MedicalTypes } from "./enum";
import {
  aboutUs,
  additionInfo,
  article,
  gereltTokh,
  performance,
  tokhiruulgaMn,
  worksDone,
} from "./string";

export type FilterType = {
  value: string;
  name: string;
  sub?: FilterType[];
};
export function filterName(value: string, arr: FilterType[]): string {
  let res = arr.filter((d) => d.value == value);
  if (res.length > 0) {
    return res[0].name;
  } else {
    return "";
  }
}

export function MedicalTitle(value: MedicalTypes) {
  switch (value) {
    case MedicalTypes.EMPLOYER:
      return "Ажилтанд өгөх бяцхан санамжууд";
    case MedicalTypes.EMPLOYEE:
      return "Ажил олгогчид өгөх бяцхан санамжууд";
    case MedicalTypes.SETUP:
      return "Гол тохируулгууд ";
    case MedicalTypes.SPACE:
      return "Амрах хувийн орон зай";
    case MedicalTypes.TRIGGER:
      return "Сэдрээгч хүчин зүйлсийг илрүүлж багасгах";
    case MedicalTypes.POSSIBLE:
      return "Боломжит тохируулгууд";
    case MedicalTypes.FUNCTIONS:
      return "Ажил үүргийн функцээр";
    case MedicalTypes.KEYS:
      return "Түлхүү хэрэглэгддэг тохируулгууд";
    default:
      return "Боломжит тохируулгууд"
  }
}

export function findTitle(value: string) {
  switch (value) {
    case "/":
      return "НҮҮР";
    case "/about":
      return aboutUs;
    case "/work":
      return worksDone;
    case "/info":
      return additionInfo;
    case "/tokhiruulga":
      return tokhiruulgaMn;
    case "/performance":
      return performance;
    case "/article":
      return article;
    default:
      return gereltTokh;
  }
}
