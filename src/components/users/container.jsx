import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/selectors";
import { Users } from "./component";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/entities/user/thunks/get-users";

export const UsersContainer = ({ id }) => {
  
  const users = useSelector((state) => selectUserById(state, id));

  if (!users) {
    return <div>Пользователи загружаются</div>;
  }

  return <Users users={users} />;
};
