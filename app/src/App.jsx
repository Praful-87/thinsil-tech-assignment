import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Button, Heading } from "@chakra-ui/react";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Mainroute from "./Mainroute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Box border='1px solid' mt='5' px="100px">
        <Mainroute />
      </Box>
    </>
  );
}

export default App;
