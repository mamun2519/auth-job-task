import express from "express";
import { PostController } from "./post.controller";
import { AuthGard } from "../../middleware/authGard";

const router = express.Router();
router.get("/my-post", AuthGard(), PostController.myAllPost);
router.get("/:id", PostController.postById);
router.delete("/:id", PostController.deletePostById);
router.patch("/:id", PostController.updatePostById);
router.post("/", PostController.insertPost);
router.post("/", AuthGard(), PostController.getAllPost);
router.post("/like", AuthGard(), PostController.postLike);
router.post("/comment", AuthGard(), PostController.postComment);
export const PostRoute = router;
