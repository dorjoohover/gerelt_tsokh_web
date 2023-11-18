import { PerformanceTypes, } from "@/global/enum";

export interface PerformanceQuestion  {
    number: number,
    text: string
}
export interface PerformanceFunctionDetail {
    title: string,
    text?: string
}

export interface PerformanceFunction {
    id?: number
    title: string
    details: PerformanceFunctionDetail[]
}

export  interface PerformanceModel {
    _id: string,
	type: PerformanceTypes;
	title: string;
	text: string;
	employeeWarning?: PerformanceFunctionDetail[],
	employerWarning?: PerformanceFunctionDetail[],

	functions: PerformanceFunction[]
    setup?: PerformanceFunction[],
    other?: PerformanceFunction[],
    condition?: PerformanceFunction,

}
