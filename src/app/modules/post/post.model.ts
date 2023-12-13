import { Schema, model } from "mongoose";
import {
  IPost,
  IPostComment,
  IPostLike,
  PostCommentModel,
  PostLikeModel,
  PostModel,
} from "./post.interface";

// Post Schema
export const PostSchema = new Schema<IPost, PostModel>(
  {
    title: {
      type: String,
      required: [true, " Title Is Required"],
    },

    imgUrl: {
      type: String,
      required: [true, "Image URL Is Required"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Description Is Required"],
    },
    like: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const PostLikeSchema = new Schema<IPostLike, PostLikeModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, " User Id Is Required"],
    },

    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: [true, "Post Id URL Is Required"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const PostCommentSchema = new Schema<IPostComment, PostCommentModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, " User Id Is Required"],
    },

    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: [true, "Post Id  Is Required"],
    },
    comment: {
      type: String,
      required: [true, "Comment Is Required"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// Post Model
export const Post = model<IPost, PostModel>("Post", PostSchema);
export const PostLike = model<IPostLike, PostLikeModel>(
  "PostLike",
  PostLikeSchema
);
export const PostComment = model<IPostComment, PostCommentModel>(
  "PostComment",
  PostCommentSchema
);
