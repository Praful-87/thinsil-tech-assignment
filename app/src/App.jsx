import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Heading } from "@chakra-ui/react";
import Signup from "./pages/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading>E-commerce-app</Heading>
      <Button>Save</Button>
      <Signup />
    </>
  );
}

export default App;
