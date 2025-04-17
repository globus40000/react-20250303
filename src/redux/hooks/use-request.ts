import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRequestStatus } from "../entities/request/slice";
import { AppDispatch, IRootState } from "../store";
import { AsyncThunk } from "@reduxjs/toolkit";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, object>;
type AsyncThunkRequest = ReturnType<ReturnType<GenericAsyncThunk>>;

export const useRequest = (thunk: GenericAsyncThunk, thunkArg?: unknown) => {
  const [request, setRequest] = useState<AsyncThunkRequest | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const thunkAction = thunk(thunkArg);
    const req = dispatch(thunkAction);

    setRequest(req);

    return () => {
      req.abort();
      setRequest(null);
    };
  }, [dispatch, thunk, thunkArg]);

  const requestStatus = useSelector<
    IRootState,
    ReturnType<typeof selectRequestStatus>
  >((state) => selectRequestStatus(state, String(request?.requestId)));

  return requestStatus;
};
