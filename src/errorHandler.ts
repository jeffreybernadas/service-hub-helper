import { NextFunction, Request, Response } from "express";
import { INTERNAL_SERVER_ERROR } from "./constants/http.constants";
import { AppError } from "./utils/AppError.utils";

// Handles AppError which was extended from built-in Error class
const handleAppError = (res: Response, error: AppError) => {
  return res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
    status: error.status,
    comingFrom: error.comingFrom,
  });
};

// The middleware
export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof AppError) {
    return handleAppError(res, error);
  }

  return res.status(INTERNAL_SERVER_ERROR).json({
    message: "Something went wrong.",
    error: process.env.NODE_ENV === "development" ? error.message : undefined,
  });
};
