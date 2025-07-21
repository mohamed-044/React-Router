import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home.jsx"
import Layout from "./components/Layout.jsx";
import Category from "./components/Category.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="category/:categorie" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
