import { FC } from "react";
import { IReviewNormalized } from "../../types";
import { UserNameContainer } from "../UserName/user-name.container";

interface IReviewProps {
  review: IReviewNormalized;
}

export const Review: FC<IReviewProps> = ({ review }) => {
  const { userId, text, rating } = review;

  return (
    <div>
      <UserNameContainer id={userId} />: {`${String(rating)}, ${text}`}
    </div>
  );
};
