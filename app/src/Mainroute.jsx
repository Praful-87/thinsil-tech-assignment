import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const Mainroute = () => {
  return (
    <Routes>
      // Routes and paths
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Mainroute;
