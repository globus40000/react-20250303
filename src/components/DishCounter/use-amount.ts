import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountByDishId,
} from "../../redux/entities/cart/slice";
import { Identifier } from "../../types";
import { IRootState } from "../../redux/store";

export const useAmount = (id: Identifier) => {
  const dispatch = useDispatch();

  const amount =
    useSelector((state: IRootState) => selectAmountByDishId(state, id)) ?? 0;

  const increment = useCallback(() => dispatch(addToCart(id)), [dispatch, id]);

  const decrement = useCallback(
    () => dispatch(removeFromCart(id)),
    [dispatch, id]
  );

  return { amount, increment, decrement };
};
