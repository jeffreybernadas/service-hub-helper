import { NextFunction, Request, Response } from "express";
import { INTERNAL_SERVER_ERROR } from "./constants/http.constants";
import { AppError } from "./utils/AppError.utils";

// Handles AppError which was extended from built-in Error class
const handleAppError = (res: Response, error: AppError) => {
  return res.status(error.statusCode).json({
    message: error.message,
    errorCode: error.errorCode,
  });
};

// The middleware
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // If the error instance is of type AppError, throw the errorCode and message
  if (error instanceof AppError) {
    return handleAppError(res, error);
  }
  // If not AppError, then throw server error.
  return res
    .status(INTERNAL_SERVER_ERROR)
    .json({ message: "Something went wrong." });
};
