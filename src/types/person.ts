import { Education } from "./education";
import { Contact } from "./contact";
import { Article, Event } from "./article";

export interface ImageList {
  small: string;
  large: string;
}

export interface Person {
  name: string;
  description: string;
  contact: Contact;
  education: Education[];
  barAdmissions?: string[];
  courtAdmissions?: string[];
  seminars?: Event[];
  publications?: Article[];
  assets?: ImageList;
}
