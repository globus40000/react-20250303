import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Identifier } from "../../../types";

type ICartState = Record<Identifier, number>;

export interface ICartItem {
  id: Identifier;
  amount: number;
}

const initialState: ICartState = {};

export const AMOUNT_MIN = 0;

export const AMOUNT_MAX = 5;

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<Identifier>) => {
      state[payload] = Math.min((state[payload] || AMOUNT_MIN) + 1, AMOUNT_MAX);
    },
    removeFromCart: (state, { payload }: PayloadAction<Identifier>) => {
      if (!state[payload]) {
        return;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= AMOUNT_MIN) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete state[payload];
      }
    },
  },
  selectors: {
    selectCartItems: (state) => {
      return Object.keys(state).reduce<ICartItem[]>((acc, id) => {
        acc.push({ id, amount: state[id] });

        return acc;
      }, []);
    },
    selectAmountByDishId: (state, id: Identifier): number | undefined => {
      return state[id];
    },
  },
});

export const { selectCartItems, selectAmountByDishId } = cartSlice.selectors;

export const { addToCart, removeFromCart } = cartSlice.actions;
