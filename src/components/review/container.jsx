import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { useEffect } from "react";
import { getUsers } from "../../redux/entities/user/thunks/get-users";
import { useDispatch } from "react-redux";
export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  

  if (!review) return <div>Отзывы загружаются</div>;
  return <Review review={review} />;
};
