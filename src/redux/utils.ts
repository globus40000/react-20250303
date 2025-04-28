import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { RequestStatus } from "../types";
import { SerializedError } from "@reduxjs/toolkit";

export function getCommonRequestStatus(arr: RequestStatus[]) {
  const stat = arr.reduce(
    (acc, requestStatus) => {
      acc[requestStatus] += 1;

      return acc;
    },
    {
      [RequestStatus.idle]: 0,
      [RequestStatus.pending]: 0,
      [RequestStatus.rejected]: 0,
      [RequestStatus.fulfilled]: 0,
    }
  );

  if (stat[RequestStatus.pending] > 0) {
    return RequestStatus.pending;
  }

  if (stat[RequestStatus.rejected] > 0) {
    return RequestStatus.rejected;
  }

  if (stat[RequestStatus.fulfilled] > 0) {
    return RequestStatus.fulfilled;
  }

  return RequestStatus.idle;
}

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
