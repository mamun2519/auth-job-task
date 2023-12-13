import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();
router.get("/:id", PostController.postById);
router.delete("/:id", PostController.deletePostById);
router.patch("/:id", PostController.updatePostById);
router.post("/", PostController.insertPost);
router.post("/", PostController.getAllPost);
router.post("/like", PostController.postLike);
export const PostRoute = router;
