interface UserRowProps {
  img: string;
  name: string;
  lastname: string;
  email: string;
}

const UserRow = ({ img, name, lastname, email }: UserRowProps) => {
  return (
    <tr>
      <td>
        <img src={img} className="rounded-b-full w-14" alt="Avatar" />
      </td>
      <td>
        {name} {lastname}
      </td>
      <td>{email}</td>
    </tr>
  );
};

export default UserRow;
