import mongoose, { ObjectId } from 'mongoose';
import { IOffer } from './order.interface';
import { IContractorGig } from './gig.interface';
import { IContractorDocument } from './contractor.interface';

export interface IConversationDocument extends Document {
  _id: mongoose.Types.ObjectId | string;
  conversationId: string;
  senderUsername: string;
  receiverUsername: string;
}

export interface IMessageDocument {
  _id?: string | ObjectId;
  conversationId?: string;
  body?: string;
  url?: string;
  file?: string;
  fileType?: string;
  fileSize?: string;
  fileName?: string;
  gigId?: string;
  contractorId?: string;
  customerId?: string;
  senderUsername?: string;
  senderPicture?: string;
  receiverUsername?: string;
  receiverPicture?: string;
  isRead?: boolean;
  hasOffer?: boolean;
  offer?: IOffer;
  hasConversationId?: boolean;
  createdAt?: Date | string;
}

export interface IMessageDetails {
  sender?: string;
  offerLink?: string;
  amount?: string;
  customerUsername?: string;
  contractorUsername?: string;
  title?: string;
  description?: string;
  deliveryDays?: string;
  template?: string;
}

export interface IChatBoxProps {
  contractor: IChatContractorProps;
  customer: IChatCustomerProps
  gigId: string;
  onClose: () => void;
}

export interface IChatContractorProps {
  _id: string;
  username: string;
  profilePicture: string;
  responseTime: number;
}

export interface IChatCustomerProps {
  _id: string;
  username: string;
  profilePicture: string;
}

export interface IChatMessageProps {
  message: IMessageDocument;
  contractor?: IContractorDocument;
  gig?: IContractorGig;
}
