import { Model, ObjectId } from "mongoose";
import { IUser } from "../auth/auth.interface";
// Post interface
export type IPost = {
  _id: string;
  user: IUser | ObjectId | string;
  title: string;
  imgUrl: string;
  description: string;
  like: number;
  likedUser: [{ user: IUser | ObjectId }];
  commentedUser: [{ user: IUser | ObjectId; comment: string }];
};
export type PostModel = Model<IPost, Record<string, unknown>>;
//Post Like Interface
export type IPostLike = {
  user: IUser | ObjectId;
  post: IPost | ObjectId;
};
export type PostLikeModel = Model<IPostLike, Record<string, unknown>>;
//Post Comment Interface
export type IPostComment = {
  user: IUser | ObjectId;
  post: IPost | ObjectId;
  comment: string;
};
export type PostCommentModel = Model<IPostComment, Record<string, unknown>>;
