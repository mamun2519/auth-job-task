import { NextFunction, Request, Response } from "express";
import Send_API_Error from "../../error/apiError";
import { StatusCodes } from "http-status-codes";

import { Secret } from "jsonwebtoken";
import { jwtHelpers } from "../../utils/jwtToken";
import config from "../../config";

export const auth =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.headers.authorization);
      const token = req.headers.authorization;
      if (!token) {
        throw new Send_API_Error(
          StatusCodes.UNAUTHORIZED,
          "You are not authorized"
        );
      }
      let verifiedUser = null;
      verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.secret_token as Secret
      );
      req.user = verifiedUser;

      next();
    } catch (error) {
      next(error);
    }
  };
