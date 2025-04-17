import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IUserNormalized } from "../../../types";
import { IRootState } from "../../store";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter<IUserNormalized>();

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: entityAdapter.getInitialState({
    errorMessage: "",
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.errorMessage = payload ?? "Error";
      }),
  selectors: {
    selectErrorMessage: (state) => {
      return state.errorMessage;
    },
  },
});

const selectUsersSlice = (state: IRootState) => {
  return state[usersSlice.name];
};

export const {
  selectIds: selectUsersIds,
  selectById: selectUserById,
  selectTotal: selectUsersTotal,
} = entityAdapter.getSelectors(selectUsersSlice);

export const { selectErrorMessage } = usersSlice.selectors;
