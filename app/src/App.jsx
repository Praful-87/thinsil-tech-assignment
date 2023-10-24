import { createContext, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button, Heading } from "@chakra-ui/react";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Mainroute from "./Mainroute";

export const MyContext = createContext();
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  return (
    <>
      <MyContext.Provider value={{ cart, setCart, isAuth, setIsAuth }}>
        <Navbar />
        <Box mt="5" px="100px">
          <Mainroute />
        </Box>
      </MyContext.Provider>
    </>
  );
}

export default App;
