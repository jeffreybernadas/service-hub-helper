import { NextFunction, Request, Response } from "express";
import { z, ZodError, ZodIssue } from "zod";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "./constants/http.constants";
import { AppError } from "./utils/AppError.utils";

const handleZodError = (res: Response, error: ZodError) => {
  const errors = error.issues.map((err: ZodIssue) => ({
    path: err.path.join("."),
    message: err.message,
  }));
  return res.status(BAD_REQUEST).json({
    message: "Bad Request.",
    errors,
  });
};

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
  if (error instanceof z.ZodError) {
    return handleZodError(res, error);
  }

  if (error instanceof AppError) {
    return handleAppError(res, error);
  }

  return res.status(INTERNAL_SERVER_ERROR).json({
    message: "Something went wrong.",
    error: error.message,
  });
};
