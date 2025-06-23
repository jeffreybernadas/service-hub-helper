import assert from "node:assert";
import { HttpStatusCode } from "../constants/http.constants";
import { AppErrorCode } from "../constants/appErrorCode.constants";
import { AppError } from "./AppError.utils";

type AppAssert = (
  condition: any,
  httpStatusCode: HttpStatusCode,
  message: string,
  service: string,
  status: string,
  appErrorCode?: AppErrorCode
) => asserts condition;
/**
 * Asserts a condition and throws an AppError if the condition is falsy.
 */
export const appAssert: AppAssert = (
  condition,
  httpStatusCode,
  message,
  service,
  status,
  appErrorCode
) =>
  assert(
    condition,
    new AppError(httpStatusCode, message, service, status, appErrorCode)
  );
