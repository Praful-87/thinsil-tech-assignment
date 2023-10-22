import { Box, Image, Button, Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box m="auto" w="fit-content">
      <Image src="https://colorlib.com/wp/wp-content/uploads/sites/2/46503106_258183111532512_5215616088770871296_n-1.jpg.webp" />
      <Link to="/">
        <Center>
          <Button
            _hover={{
              bg: "#0145d4",
            }}
            bg="#0145d4"
            color="white"
            mt="10"
          >
            Go To Homepage
          </Button>
        </Center>
      </Link>
    </Box>
  );
};

export default NotFound;
