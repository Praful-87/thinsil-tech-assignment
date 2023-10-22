import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { memo, useContext } from "react";
import Logo from "../assets/images/logo.png";
import { MyContext } from "../App";
const Navbar = () => {
  const { cart } = useContext(MyContext);
  return (
    <Flex
      pos="sticky"
      top="0px"
      left="0px"
      zIndex={60}
      bg="white"
      align="center"
      h="60px"
      px="60px"
      rounded="md"
      shadow="lg"
    >
      <Link to="/">
        <Image h="60px" src={Logo} />
      </Link>
      <Spacer />
      <Box pos="relative">
        <InputGroup h="35px" w="400px" rounded="none">
          <InputLeftElement pointerEvents="none">
            <BiSearch />
          </InputLeftElement>
          <Input type="text" placeholder="Search products..." />
        </InputGroup>{" "}
        <Box
          display="none"
          top="50px"
          border="1px solid"
          h="300px"
          w="full"
          pos="absolute"
        ></Box>
      </Box>
      <Spacer />
      <Flex gap="40px">
        <Link to="/cart">
          {" "}
          <Button
            bg="#1c1c1b"
            color="white"
            rounded="none"
            fontSize="sm"
            w="80px"
            _hover={{
              bg: "black",
            }}
          >
            Cart {cart.length}
          </Button>
        </Link>
        <Link to="/signup">
          {" "}
          <Button
            border="1px solid black"
            bg="transparent"
            rounded="none"
            fontSize="sm"
            w="80px"
          >
            Login
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default memo(Navbar);
