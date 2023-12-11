import { ArticleTypes, WorkTypes } from "@/global/enum";

export interface Work {
  _id: string;
  type: WorkTypes;
  title: string;
  text: string;
  postDate?: string;
  fb?: string;
  twitter?: string;
  img?: string;
  semiTitle?: string;
  uri?: string
  createdAt?: string
}
