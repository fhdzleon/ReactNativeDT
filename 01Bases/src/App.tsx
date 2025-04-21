/* import BasicTypes from "./typecsript/BasicTypes"; */
/* import ObjectLiterals from "./typecsript/ObjectLiterals"; */
/* import BasicFunctions from "./typecsript/BasicFunctions"; */
/* import Counter from "./components/counter"; */
/* import Login from "./components/login"; */
import Users from "./components/Users";

import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <>
        <p>React + TS</p>
        {/*    <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/*  <Counter /> */}
        {/* <Login /> */}
        <Users />
      </>
    </AuthProvider>
  );
}

export default App;
