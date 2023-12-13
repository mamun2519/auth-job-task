import express from "express";

import { AuthRouter } from "../modules/auth/auth.route";
import { PostRoute } from "../modules/post/post.route";

const router = express.Router();

// all module route is here
const AllModuleRoutes = [
  { path: "/auth", router: AuthRouter },
  { path: "/post", router: PostRoute },
];

AllModuleRoutes.forEach((route) => router.use(route.path, route.router));

export const RootRoutes = router;
