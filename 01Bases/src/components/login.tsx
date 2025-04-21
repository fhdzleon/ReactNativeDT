import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const { isChecking, isAuthenticated, fakeLogin, fakeLogout, user } =
    useAuthContext();

  if (isChecking) {
    return <p>Verificando...</p>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <p>Bienvenido</p>
          <p>{JSON.stringify(user?.name)}</p>
          <p>{JSON.stringify(user?.mail)}</p>

          <button
            onClick={() => fakeLogout()}
            className="px-2 py-1 mt-3 bg-blue-500 rounded-xl"
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <p>Inicia sesion</p>
          <button
            onClick={() => fakeLogin("felipe@mail.com", "123456")}
            className="px-2 py-1 mt-3 bg-blue-500 rounded-xl"
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};

export default Login;
