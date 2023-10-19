import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex align="center" h="80px" px="20px" rounded="md" shadow="lg">
      <Heading>E-commerce app</Heading>
      <Spacer />
      <Flex gap="40px">
        <Link to="/cart">
          {" "}
          <Text>Cart</Text>{" "}
        </Link>
        <Link to="/signup">
          {" "}
          <Text>Signip</Text>{" "}
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
