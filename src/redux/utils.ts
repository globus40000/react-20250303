import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type RTKQueryError = FetchBaseQueryError | SerializedError | undefined;

export function getErrorMessage(error: RTKQueryError): string {
  if (!error) {
    return "";
  }

  if ("error" in error) {
    return error.error;
  }

  if ("message" in error && typeof error.message === "string") {
    return error.message;
  }

  return "Error";
}
