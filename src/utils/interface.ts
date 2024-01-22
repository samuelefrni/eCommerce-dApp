import { Dispatch, SetStateAction } from "react";

export interface CourseI {
  title: string;
  description: string;
  image: string;
  value: string;
}

export interface PurchaseI {
  courseName: string;
  price: string;
  accountAddress: string;
}

export interface SuccesPageI {
  title: string;
  image: string;
  setPurchaseSuccess: Dispatch<SetStateAction<boolean>>;
}

export interface ObjI {
  description: string;
  id: string;
  image: string;
  name: string;
  value: string;
}
