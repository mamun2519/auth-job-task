import { StatusCodes } from "http-status-codes";
import API_Error from "../../../error/apiError";
import { User } from "../auth/auth.model";
import { IComment, IPost } from "./post.interface";
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
  const post = await Post.findByIdAndUpdate(id, data, { new: true });
  return post;
};

const deletePostFromDB = async (id: string): Promise<IPost> => {
  const post = await Post.findByIdAndDelete(id);
  //@ts-ignore
  return post;
};

const postLikedIntoDB = async (
  userId: string,
  postId: string
): Promise<{ message: string; post: IPost }> => {
  const post = await Post.findById(postId);
  if (!post) {
    throw new API_Error(StatusCodes.NOT_FOUND, "Post Not Found");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new API_Error(StatusCodes.NOT_FOUND, "User Not Found");
  }

  console.log(post.likes.some((like) => like.user.equals(userId)));

  if (post.likes.some((like) => like.user.equals(userId))) {
    const likeIndex = post.likes.findIndex((like) =>
      like.user.equals(user._id)
    );

    post.like -= 1;
    post.likes.splice(likeIndex, 1);
    await post.save();
    return {
      message: "Post unlike",
      post,
    };
  } else {
    // Add like with user ID
    post.like += 1;
    post.likes.push({ user: userId });
    await post.save();
    return {
      message: "Post liked",
      post,
    };
  }
};

const postCommentIntoBD = async (
  userId: string,
  comment: IComment
): Promise<IPost | null> => {
  const post = await Post.findById(comment.postId);
  if (!post) {
    throw new API_Error(StatusCodes.NOT_FOUND, "Post Not Found");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new API_Error(StatusCodes.NOT_FOUND, "User Not Found");
  }
  post.comments.push({ user: userId, comment: comment.comment });
  await post.save();
  return post;
};

const myAllPostFromDB = async (userId: string): Promise<IPost[]> => {
  const user = await User.findById(userId);
  if (!user) {
    throw new API_Error(StatusCodes.NOT_FOUND, "User Not Found");
  }
  const post = await Post.find({ user: userId });
  return post;
};

export const PostService = {
  insertPostIntoDb,
  allPostFromDB,
  postDetailsFromDB,
  updatePostIntoDb,
  deletePostFromDB,
  postLikedIntoDB,
  postCommentIntoBD,
  myAllPostFromDB,
};
