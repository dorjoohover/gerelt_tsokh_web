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
