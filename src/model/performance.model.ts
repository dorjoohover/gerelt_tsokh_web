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
    title: string
    details: PerformanceFunctionDetail[]
}

export  interface PerformanceModel {
    _id: string,
	type: PerformanceTypes;
	title: string;
	text: string;
	questions: PerformanceQuestion[],
	functions: PerformanceFunction[]
    setup?: any,
    condition?: any
}
