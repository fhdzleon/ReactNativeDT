import { useEffect, useRef, useState } from "react";
import { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/loadUsers.action";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef<number>(1);

  useEffect(() => {
    loadUsersAction(currentPageRef.current).then(setUsers);
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const users = await loadUsersAction(currentPageRef.current);

    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;

    currentPageRef.current--;
    const users = await loadUsersAction(currentPageRef.current);
    setUsers(users);
  };

  return {
    //props:
    users,

    //methods:
    nextPage,
    prevPage,
  };
};

export default useUsers;
