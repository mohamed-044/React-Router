import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" />
      </Route>
    </Routes>
  );
}

export default App;
