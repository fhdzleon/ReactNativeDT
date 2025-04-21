/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  checking = "Verificando",
  autenticated = "Autenticado",
  unautenticated = "No autenticado",
}

interface User {
  name: string;
  mail: string;
}

interface AuthState {
  status: AuthStatus;
  isChecking: boolean;
  isAuthenticated: boolean;
  token?: string;
  user?: User;
  fakeLogin: (email: string, password: string) => void;
  fakeLogout: () => void;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.unautenticated);
    }, 1500);
  }, []);

  const fakeLogin = (email: string, password: string) => {
    console.log(password);

    setUser({
      name: "Felipe Hernández",
      mail: email,
    });
    setStatus(AuthStatus.autenticated);
  };

  const fakeLogout = () => {
    alert("Adios");
    setUser({
      name: "",
      mail: "",
    });
    setStatus(AuthStatus.unautenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,

        //getter:
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.autenticated,

        //metodos:
        fakeLogin,
        fakeLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
