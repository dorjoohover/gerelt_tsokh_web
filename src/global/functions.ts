export type FilterType = {
    value: string, 
    name: string
}
export function filterName  (value: string, arr: FilterType[]): string  {
    let res = arr.filter((d) => d.value == value)
    console.log(res);
    console.log(value);
    if(res.length > 0) {
        return res[0].name
    } else {
        return ''
    }
   
}