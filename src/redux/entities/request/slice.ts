import { AsyncThunk, createSlice, UnknownAction } from "@reduxjs/toolkit";
import { RequestStatus } from "../../../types";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, object>;

type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

function isPendingAction(action: UnknownAction): action is PendingAction {
  return action.type.endsWith("/pending");
}

function isRejectedAction(action: UnknownAction): action is RejectedAction {
  return action.type.endsWith("/rejected");
}

function isFulfilledAction(action: UnknownAction): action is FulfilledAction {
  return action.type.endsWith("/fulfilled");
}

type IRequestsState = Record<string, RequestStatus>;

const initialState: IRequestsState = {};

export const requestsSlice = createSlice({
  name: "requestsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(isPendingAction, (state, { meta: { requestId } }) => {
        state[requestId] = RequestStatus.pending;
      })
      .addMatcher(isRejectedAction, (state, { meta: { requestId } }) => {
        state[requestId] = RequestStatus.rejected;
      })
      .addMatcher(isFulfilledAction, (state, { meta: { requestId } }) => {
        state[requestId] = RequestStatus.fulfilled;
      }),
  selectors: {
    selectRequestStatus: (state, id: string) => {
      return state[id] ?? RequestStatus.idle;
    },
  },
});

export const { selectRequestStatus } = requestsSlice.selectors;
