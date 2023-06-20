import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Panel from "./components/panel/Panel";
import Register from "./components/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Panel />} />
    </Routes>
  );
}

export default App;
