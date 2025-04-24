import useUsers from "../hooks/useUsers";
import UserRow from "./UserRow";

const Users = () => {
  const { users, nextPage, prevPage } = useUsers();

  console.log(users);

  return (
    <div>
      <p>Usuarios</p>
      <table className="w-[500px] rounded-xl">
        <thead className="bg-blue-500">
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow
              avatar={user.avatar}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
            />
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-5 items-center">
        <button
          onClick={prevPage}
          className="p-2 cursor-pointer bg-blue-500 rounded-2xl"
        >
          Anterior
        </button>
        <span>Pagina</span>
        <button onClick={nextPage} className="p-2 bg-blue-500 rounded-2xl">
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Users;
