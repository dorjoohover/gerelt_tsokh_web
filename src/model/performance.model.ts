import { MedicalTypes, PerformanceTypes, } from "@/global/enum";

export interface PerformanceQuestion  {
    number: number,
    text: string
}
export interface PerformanceFunctionDetail {
    title: string,
    text?: string,
    img? : string
}

export interface PerformanceFunction {
    id?: number
    title?: string
    detail: PerformanceFunctionDetail[]
}
export interface MedicalDetail {
 
    type?: MedicalTypes
    details?: PerformanceFunction[]
}

export  interface PerformanceModel {
    _id: string,
	type: PerformanceTypes;
	title: string;
	text: string;
	employeeWarning?: PerformanceFunctionDetail[],
	employerWarning?: PerformanceFunctionDetail[],

	possible?: PerformanceFunction[]
	functions?: PerformanceFunction[]
    setup?: PerformanceFunction[],
    key?: PerformanceFunction[],
    space?: PerformanceFunctionDetail[],
    trigger?: PerformanceFunctionDetail[],
    condition?: string[],
    details: MedicalDetail[]

}
