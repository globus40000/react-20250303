import { FC } from "react";
import { Identifier } from "../../types";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { selectReviewById } from "../../redux/entities/review/slice";
import { Review } from "./review";

interface IReviewContainerProps {
  id: Identifier;
}

export const ReviewContainer: FC<IReviewContainerProps> = ({ id }) => {
  const review = useSelector((state: IRootState) =>
    selectReviewById(state, id)
  );

  if (!review) {
    return null;
  }

  return <Review review={review} />;
};
