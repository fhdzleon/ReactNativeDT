import { User } from "../interfaces/reqres.response";

const UserRow = ({ avatar, first_name, last_name, email }: User) => {
  return (
    <tr>
      <td>
        <img src={avatar} className="rounded-b-full w-14 p-2" alt="Avatar" />
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  );
};

export default UserRow;
