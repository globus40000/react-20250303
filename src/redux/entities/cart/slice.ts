import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Identifier, IDishNormalized } from "../../../types";
import { IRootState } from "../../store";

interface ICartItem {
  dish: IDishNormalized;
  amount: number;
}

type ICartState = Record<Identifier, ICartItem>;

const initialState: ICartState = {};

export const AMOUNT_MIN = 0;

export const AMOUNT_MAX = 5;

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload: dish }: PayloadAction<IDishNormalized>) => {
      state[dish.id] = {
        dish,
        amount: Math.min(
          (state[dish.id]?.amount ?? AMOUNT_MIN) + 1,
          AMOUNT_MAX
        ),
      };
    },
    removeFromCart: (state, { payload: id }: PayloadAction<Identifier>) => {
      if (!state[id]) {
        return;
      }

      state[id].amount = state[id].amount - 1;

      if (state[id].amount <= AMOUNT_MIN) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete state[id];
      }
    },
  },
  selectors: {
    selectAmountByDishId: (state, id: Identifier): number | undefined => {
      return state[id]?.amount;
    },
  },
});

const selectCartSlice = (state: IRootState) => state[cartSlice.name];

export const selectCartDishes = createSelector([selectCartSlice], (state) => {
  return Object.values(state).map(({ dish }) => dish);
});

export const { selectAmountByDishId } = cartSlice.selectors;

export const { addToCart, removeFromCart } = cartSlice.actions;
