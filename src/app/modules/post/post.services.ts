import { StatusCodes } from "http-status-codes";
import API_Error from "../../../error/apiError";
import { User } from "../auth/auth.model";
import { IPost } from "./post.interface";
import { Post } from "./post.model";

const insertPostIntoDb = async (
  userId: string,
  post: IPost
): Promise<IPost> => {
  const isExistUser = await User.findById(userId);
  if (!isExistUser) {
    throw new API_Error(StatusCodes.NOT_FOUND, "User Not Found");
  }
  post.user = userId;
  const result = await Post.create(post);
  return result;
};

const allPostFromDB = async (): Promise<IPost[]> => {
  const post = await Post.find().populate("user");
  return post;
};

const postDetailsFromDB = async (id: string): Promise<IPost | null> => {
  const post = await Post.findById(id).populate("user");
  return post;
};

const updatePostIntoDb = async (
  id: string,
  data: Partial<IPost>
): Promise<IPost | null> => {
  const post = await Post.findByIdAndUpdate(id, data);
  return post;
};

const deletePostFromDB = async (id: string): Promise<IPost | null> => {
  const post = await Post.findOneAndUpdate({ _id: id });
  return post;
};

export const PostService = {
  insertPostIntoDb,
  allPostFromDB,
  postDetailsFromDB,
  updatePostIntoDb,
  deletePostFromDB,
};
