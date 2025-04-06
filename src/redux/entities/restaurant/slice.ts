import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../mocks/normalized/restaurants";
import { Identifier, IRestaurantNormalized } from "../../../types";
import { getEntities, getIds } from "../../utils";

type RestaurantsEntities = Record<Identifier, IRestaurantNormalized>;

interface IRestaurantsState {
  entities: RestaurantsEntities;
  ids: Identifier[];
}

const initialState: IRestaurantsState = {
  entities: getEntities(normalizedRestaurants),
  ids: getIds(normalizedRestaurants),
};

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantById: (
      state,
      id: Identifier
    ): IRestaurantNormalized | undefined => {
      return state.entities[id];
    },
    selectRestaurantsIds: (state) => {
      return state.ids;
    },
  },
});

export const { selectRestaurantById, selectRestaurantsIds } =
  restaurantsSlice.selectors;
