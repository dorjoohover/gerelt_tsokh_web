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
