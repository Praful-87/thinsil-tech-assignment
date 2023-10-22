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
import { memo } from "react";
import Logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <Flex align="center" h="60px" px="60px" rounded="md" shadow="lg">
      <Link to="/">
        <Image h="60px" src={Logo} />
      </Link>
      <Spacer />
      <InputGroup h="35px" w="400px" rounded="none">
        <InputLeftElement pointerEvents="none">
          <BiSearch />
        </InputLeftElement>
        <Input type="tel" placeholder="Search products..." />
      </InputGroup>
      <Spacer />
      <Flex gap="40px">
        <Link to="/cart">
          {" "}
          <Button
            bg="black"
            color="white"
            rounded="none"
            fontSize="sm"
            w="80px"
            _hover={{
              bg: "black",
            }}
          >
            Cart
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
