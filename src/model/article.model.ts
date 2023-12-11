import { ArticleTypes, } from "@/global/enum";

export  interface Article {
    _id: string,
	type: ArticleTypes;
	title: string;
	text: string;
	postDate: string,
	fb?: string
	twitter?: string
    img?: string
	createdAt?: string
}
