import JWT from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { appAssert } from "./utils/appAssert.utils";
import {
  INTERNAL_SERVER_ERROR,
  UNAUTHORIZED,
} from "./constants/http.constants";

interface Payload {
  id: string;
  iat: number;
  exp?: number;
}

export const verifyGatewayRequest = (jwtSecret: string) => {
  const validServiceTokens: string[] = [
    "auth",
    "contractor",
    "service",
    "search",
    "customer",
    "message",
    "order",
    "review",
  ];

  return (req: Request, _res: Response, next: NextFunction): void => {
    const token: string = req.headers?.gatewaytoken as string;
    appAssert(
      token,
      UNAUTHORIZED,
      "Token is either expired, invalid, or missing",
      "gatewayMiddleware",
      "error"
    );

    try {
      const payload: Payload = JWT.verify(token, jwtSecret) as Payload;

      // Check if the token has expired
      const isExpired = payload.exp && Date.now() >= payload.exp * 1000;
      appAssert(
        !isExpired,
        UNAUTHORIZED,
        "Token is expired.",
        "gatewayMiddleware",
        "error"
      );

      // Check if the decoded token id matches a valid service
      appAssert(
        validServiceTokens.includes(payload.id),
        UNAUTHORIZED,
        "Token is invalid for this API.",
        "gatewayMiddleware",
        "error"
      );
    } catch (error) {
      appAssert(
        false,
        INTERNAL_SERVER_ERROR,
        "Something went wrong. Please try again.",
        "gatewayMiddleware",
        "error"
      );
    }
    next();
  };
};
