import { RequestStatus } from "../types";

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
