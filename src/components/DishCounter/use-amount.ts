import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountByDishId,
} from "../../redux/entities/cart/slice";
import { IDishNormalized } from "../../types";
import { IRootState } from "../../redux/store";

export const useAmount = (dish: IDishNormalized) => {
  const dispatch = useDispatch();

  const amount =
    useSelector<IRootState, ReturnType<typeof selectAmountByDishId>>((state) =>
      selectAmountByDishId(state, dish.id)
    ) ?? 0;

  const increment = useCallback(
    () => dispatch(addToCart(dish)),
    [dispatch, dish]
  );

  const decrement = useCallback(
    () => dispatch(removeFromCart(dish.id)),
    [dispatch, dish.id]
  );

  return { amount, increment, decrement };
};
