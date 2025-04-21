import useUsers from "../hooks/useUsers";
import UserRow from "./UserRow";

const Users = () => {
  const { users } = useUsers();

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
          <UserRow
            img="imagen"
            name="Felipe"
            lastname="Hernandez"
            email="felipe@mail.com"
          />
          <UserRow
            img="imagen"
            name="Karla"
            lastname="Zarazua"
            email="karla@mail.com"
          />
          <UserRow
            img="imagen"
            name="Zoe Abigail"
            lastname="Hernandez"
            email="zoe@mail.com"
          />
        </tbody>
      </table>

      <div className="flex justify-between mt-5 items-center">
        <button className="p-2 bg-blue-500 rounded-2xl">Anterior</button>
        <span>Pagina</span>
        <button className="p-2 bg-blue-500 rounded-2xl">Siguiente</button>
      </div>
    </div>
  );
};

export default Users;
