import { AppErrorCode } from "../constants/appErrorCode.constants";
import { HttpStatusCode } from "../constants/http.constants";

export interface IErrorResponse {
  message: string;
  statusCode: HttpStatusCode;
  errorCode?: AppErrorCode;
  status: string;
  comingFrom: string;
  serializeErrors(): IError;
}

export interface IError {
  message: string;
  statusCode: HttpStatusCode;
  errorCode?: AppErrorCode;
  status: string;
  comingFrom: string;
}

/**
 * Represents an application-specific error.
 * Extends the built-in Error class to include additional properties.
 */
export class AppError extends Error {
  /**
   * Creates an instance of AppError.
   *
   * @param {HttpStatusCode} statusCode - The HTTP status code associated with the error.
   * @param {string} message - A descriptive message explaining the error.
   * @param {AppErrorCode} [errorCode] - An optional application-specific error code.
   */
  constructor(
    public statusCode: HttpStatusCode,
    public message: string,
    public comingFrom: string,
    public status: string,
    public errorCode?: AppErrorCode
  ) {
    super(message);
    this.comingFrom = comingFrom;
  }

  serializeErrors(): IError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.status,
      comingFrom: this.comingFrom,
      errorCode: this.errorCode,
    };
  }
}

export interface ErrnoException extends Error {
  errno?: number;
  code?: string;
  path?: string;
  syscall?: string;
  stack?: string;
}
