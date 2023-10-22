import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";

const Mainroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Cart />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Mainroute;
