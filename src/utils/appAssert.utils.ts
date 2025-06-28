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
 * @param condition - The condition to assert.
 * @param httpStatusCode - The HTTP status code.
 * @param message - The message of the error.
 * @param service - The service name.
 * @param status - The status of the error.
 * @param appErrorCode - The Custom App Error Code. - `Invalid_Access_Token`, `Insufficient_Role`, `Invalid_Login_Method`
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
