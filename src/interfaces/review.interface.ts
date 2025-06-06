export interface IReviewMessageDetails {
  serviceId?: string;
  reviewerId?: string;
  contractorId?: string;
  review?: string;
  rating?: number;
  orderId?: string;
  createdAt?: string;
  type: string;
}

export interface IRatingTypes {
  [key: string]: string;
}

export interface IReviewDocument {
  _id?: string;
  serviceId: string;
  reviewerId: string;
  contractorId: string;
  review: string;
  reviewerImage: string;
  rating: number;
  orderId: string;
  createdAt: Date | string;
  reviewerUsername: string;
  country: string;
  reviewType?: string;
}

export interface IRatingCategoryItem {
  value: number;
  count: number;
}

export interface IRatingCategories {
  five: IRatingCategoryItem;
  four: IRatingCategoryItem;
  three: IRatingCategoryItem;
  two: IRatingCategoryItem;
  one: IRatingCategoryItem;
}
