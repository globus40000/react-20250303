import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../mocks/normalized/dishes";
import { Identifier, IDishNormalized } from "../../../types";
import { getEntities, getIds } from "../../utils";

type DishesEntities = Record<Identifier, IDishNormalized>;

interface IDishesState {
  entities: DishesEntities;
  ids: Identifier[];
}

const initialState: IDishesState = {
  entities: getEntities(normalizedDishes),
  ids: getIds(normalizedDishes),
};

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState,
  reducers: {},
  selectors: {
    selectDishById: (state, id: Identifier): IDishNormalized | undefined => {
      return state.entities[id];
    },
    selectDishesIds: (state) => {
      return state.ids;
    },
  },
});

export const { selectDishById, selectDishesIds } = dishesSlice.selectors;
