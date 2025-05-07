import { ObjectId } from "mongoose";

export interface ICustomerDocument {
  _id?: string | ObjectId;
  username?: string;
  email?: string;
  profilePicture?: string;
  country: string;
  isContractor?: boolean;
  purchasedServices: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IReduxCustomer {
  type?: string;
  payload: ICustomerDocument;
}
