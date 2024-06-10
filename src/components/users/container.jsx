import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/selectors";
import { Users } from "./component";

export const UsersContainer = ({ id }) => {
  const users = useSelector((state) => selectUserById(state, id));

  return <Users users={users} />;
};
