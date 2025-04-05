import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../mocks/normalized/users";
import { Identifier, IUserNormalized } from "../../../types";
import { getEntities, getIds } from "../../utils";

type UsersEntities = Record<Identifier, IUserNormalized>;

interface IUsersState {
  entities: UsersEntities;
  ids: Identifier[];
}

const initialState: IUsersState = {
  entities: getEntities(normalizedUsers),
  ids: getIds(normalizedUsers),
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  selectors: {
    selectUserById: (state, id: Identifier): IUserNormalized | undefined => {
      return state.entities[id];
    },
    selectUsersIds: (state) => {
      return state.ids;
    },
  },
});

export const { selectUserById, selectUsersIds } = usersSlice.selectors;
