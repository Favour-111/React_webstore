import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./Store";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Store />}></Route>
      </Routes>
    </>
  );
}

export default App;
