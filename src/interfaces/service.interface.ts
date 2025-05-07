import { ObjectId } from "mongoose";
import { IRatingCategories, IReviewDocument } from "./review.interface";
import { IContractorDocument } from "./contractor.interface";

export type ServiceType = string | string[] | number | unknown | undefined;

export interface ICreateService extends Record<string, ServiceType> {
  // [key: string]: string | string[] | number | undefined;
  contractorId?: string;
  profilePicture?: string;
  title: string;
  categories: string;
  description: string;
  subCategories: string[];
  tags: string[];
  price: number;
  coverImage: string;
  expectedDelivery: string;
  basicTitle: string;
  basicDescription: string;
}

export interface IContractorService {
  _id?: string | ObjectId;
  // this "id" property is used because elasticsearch does not accept a key with an underscore "_id"
  // elasticsearch has _id as a reserved field name
  id?: string | ObjectId;
  contractorId?: string | ObjectId;
  title: string;
  username?: string;
  profilePicture?: string;
  email?: string;
  description: string;
  active?: boolean;
  categories: string;
  subCategories: string[];
  tags: string[];
  ratingsCount?: number; // make sure to add this to elasticsearch as a double
  ratingSum?: number; // make sure to add this to elasticsearch as a double
  ratingCategories?: IRatingCategories;
  expectedDelivery: string;
  basicTitle: string;
  basicDescription: string;
  price: number;
  coverImage: string;
  createdAt?: Date | string;
  sortId?: number;
  // this is added here because we will use the json format of the document
  // at some point instead of the Mongoose document
  // the json object which will contain the virtual field "id" without the field "_id" will be added to elasticsearch
  // because "_id" is a reserved field name in elasticsearch.
  toJSON?: () => unknown;
}

export interface IServiceContext {
  service: IContractorService;
  contractor: IContractorDocument;
  isSuccess?: boolean;
  isLoading?: boolean;
}

export interface IServicesProps {
  type?: string;
  service?: IContractorService;
}

export interface IServiceCardItems {
  service: IContractorService;
  linkTarget: boolean;
  showEditIcon: boolean;
}

export interface ISelectedBudget {
  minPrice: string;
  maxPrice: string;
}

export interface IServiceViewReviewsProps {
  showRatings: boolean;
  reviews?: IReviewDocument[];
}

export interface IServiceInfo {
  total: number | string;
  title: string;
  bgColor: string;
}

export interface IServiceTopProps {
  services: IContractorService[];
  title?: string;
  subTitle?: string;
  category?: string;
  width: string;
  type: string;
}
