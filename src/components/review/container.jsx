import { useSelector } from "react-redux";
import { Review } from "./component";
import { selectReviewById } from "../../redux/entities/review/selectors";
export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  
  if (!review) return null;
  return <Review review={review} />;
};
