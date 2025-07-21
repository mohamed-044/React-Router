import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Category from "./pages/Category.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Container as="main">
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="category/:categorie" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </Container>
  );
}

export default App;
