import { Identifier, RequestStatus } from "../types";

interface IEntity {
  id: Identifier;
}

export function getEntities<Item extends IEntity>(arr: Item[]) {
  return arr.reduce<Record<Identifier, Item>>((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {});
}

export function getIds<Item extends IEntity>(arr: Item[]) {
  return arr.map<Item["id"]>(({ id }) => id);
}

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
