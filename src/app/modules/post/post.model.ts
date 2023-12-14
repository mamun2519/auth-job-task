import { Schema, model } from "mongoose";
import { IPost, PostModel } from "./post.interface";

// Post Schema
export const PostSchema = new Schema<IPost, PostModel>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, " User Id Is Required"],
    },
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
    likes: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        comment: {
          type: String,
        },
      },
    ],
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
