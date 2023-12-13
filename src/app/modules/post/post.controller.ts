import { Request, Response } from "express";
import sendApiResponse from "../../../utils/apiResponse";
import { StatusCodes } from "http-status-codes";

import catchAsyncFn from "../../../utils/catchAsynFn";
import { PostService } from "./post.services";
import { JwtPayload } from "jsonwebtoken";

const insertPost = catchAsyncFn(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const result = await PostService.insertPostIntoDb(user.userId, req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Post Create successfully",
    data: result,
  });
});
const getAllPost = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await PostService.allPostFromDB();
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "All Post Fetch  successfully",
    data: result,
  });
});
const postById = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await PostService.postDetailsFromDB(req.params.id);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Post Details Fetch  successfully",
    data: result,
  });
});
const deletePostById = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await PostService.deletePostFromDB(req.params.id);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Post Delete successfully",
    data: result,
  });
});
const updatePostById = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await PostService.updatePostIntoDb(req.params.id, req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Post Update  successfully",
    data: result,
  });
});

const postLike = catchAsyncFn(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const result = await PostService.postLikedIntoDB(
    user.userId as string,
    req.body.courseId
  );
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Liked  successfully",
    data: result,
  });
});
const postComment = catchAsyncFn(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const result = await PostService.postCommentIntoBD(
    user.userId as string,
    req.body
  );
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Post Comment  successfully",
    data: result,
  });
});

const myAllPost = catchAsyncFn(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const result = await PostService.myAllPostFromDB(user.userId as string);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "My All Post Fetch  successfully",
    data: result,
  });
});

export const PostController = {
  postById,
  insertPost,
  getAllPost,
  deletePostById,
  updatePostById,
  postLike,
  postComment,
  myAllPost,
};
