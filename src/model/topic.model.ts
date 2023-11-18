import { TopicTypes } from "@/global/enum";

export interface TopicModel {
  _id: string;
  type: TopicTypes;
  title: string;
  text: string;
}
