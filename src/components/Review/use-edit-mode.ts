import { useState, use, useCallback } from "react";
import { AuthContext } from "../AuthContextProvider/auth-context";
import { IReviewNormalized } from "../../types";

export const useEditMode = (review: IReviewNormalized) => {
  const { userId } = review;
  const { user } = use(AuthContext);
  const isAuthor = userId === user?.id;

  const [isEditMode, setIsEditMode] = useState(false);

  const enableEditMode = useCallback(() => {
    if (isAuthor) {
      setIsEditMode(true);
    }
  }, [isAuthor]);

  return { isAuthor, isEditMode, enableEditMode };
};
