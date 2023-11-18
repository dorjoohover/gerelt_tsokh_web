import { LegalTypes, } from "@/global/enum";


export interface PerformanceFunctionDetail {
    title: string,
    text?: string
}


export  interface LegalModel {
    _id: string,
	type: LegalTypes;
	title: string;
	text?: string;
    date? : string
    chief? : string
    location?: string
    number? : string
    details: PerformanceFunctionDetail[],
}
