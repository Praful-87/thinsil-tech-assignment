import {
  Box,
  Heading,
  Flex,
  Stack,
  Center,
  Text,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation and submission logic here
    console.log("Form submitted with data:", formData);
  };

  return (
    <Flex
      shadow={"lg"}
      p="4"
      rounded={"md"}
        border="1px solid gray" 
      w="fit-content"
      m="auto"
    >
      <Box flex="1">
        <Image src="https://images.unsplash.com/photo-1612585763928-e64fdc2a3d38?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ2luJTIwcGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
      </Box>
      <Box p="40px" flex="1">
        <Heading mb="30px">Signup Form</Heading>
        <form onSubmit={handleSubmit}>
          <Box>
            <Text mb="4px" mt="10px">
              Email:
            </Text>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Box>
          <Box>
            <Text mb="4px" mt="10px">
              Password:
            </Text>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Box>
          <Box>
            <Text mb="4px" mt="10px">
              Confirm Password:
            </Text>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Box>
          <Box mt="10px">
            <Button colorScheme="whatsapp" rounded="4px" type="submit">
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};

export default Signup;
