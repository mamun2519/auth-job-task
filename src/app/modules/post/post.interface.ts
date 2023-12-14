import { Model, ObjectId } from "mongoose";
import { IUser } from "../auth/auth.interface";
// Post interface
export type IPost = {
  _id: string | null;
  user: IUser | ObjectId | string;
  title: string;
  imgUrl: string;
  description: string;
  like: number;
  likes: {
    user: ObjectId | IUser | any;
  }[];
  comments: {
    user: ObjectId | IUser | any;
    comment: string;
  }[];
};
export type PostModel = Model<IPost, Record<string, unknown>>;

export type IComment = {
  postId: string;
  comment: string;
};
