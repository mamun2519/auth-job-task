import { Model, ObjectId } from "mongoose";
import { IUser } from "../auth/auth.interface";
// Post interface
export type IPost = {
  userId: IUser | ObjectId;
  title: string;
  imgUrl: string;
  description: string;
  like: number;
};
export type PostModel = Model<IPost, Record<string, unknown>>;
