import { InfoTypes } from "@/global/enum";

export  interface Info {
    _id: string,
	type: InfoTypes;
	title: string;
	text: string;
	date: string,
	duration: number;
	voice?: string;
	thumbnail?: string;
	uri?: string
}
