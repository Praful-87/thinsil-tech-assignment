import { createContext, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button, Heading } from "@chakra-ui/react";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Mainroute from "./Mainroute";

// creating and exporting context to provide global state

export const MyContext = createContext();
function App() {
  const [isAuth, setIsAuth] = useState(false);

  // store state using useState

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  return (
    <>
      <MyContext.Provider value={{ cart, setCart, isAuth, setIsAuth }}>
        {/*Importing navbar component here to be available to in every page*/}
        <Navbar />
        {/* Main content of project will render in this */}
        <Box mt="5" px="100px">
          {/* Main routes to provide routin in the projects */}
          <Mainroute />
        </Box>
      </MyContext.Provider>
    </>
  );
}

export default App;
