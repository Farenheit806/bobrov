import { Route, Routes } from "react-router-dom";
import Catalog from "../Catalog";
import Home from "../Home";
import Profile from "../Profile";
import About from "../About";
const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default Router;
