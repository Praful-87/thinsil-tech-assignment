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
  useToast,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // handel on change of input boxes and store in formData variable
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `http://localhost:8000/user?email=${formData.email}`
    );
    console.log(res.data);
    if (res.data.length > 0) {
      // cheking if user already present or not if

      alert("User already present please login");
    } else {
      // if not present then post user data to database

      await axios.post("http://localhost:8000/user", formData);
      alert("user created sucessfully");
    }
  };

  return (
    <Center h="100vh" w="full">
      <Flex
        overflow={"hidden"}
        shadow={"lg"}
        rounded={"md"}
        w="fit-content"
        m="auto"
        f
      >
        <Box flex="1">
          <Image src="https://images.unsplash.com/photo-1612585763928-e64fdc2a3d38?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ2luJTIwcGFnZXxlbnwwfHwwfHx8MA%3D%3D" />
        </Box>
        <Box p="40px" flex="1" shadow={"md"}>
          <Heading textAlign={"center"} mb="30px">
            Create an account 💖
          </Heading>
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
            <Flex mt="20px" align="center">
              <Button colorScheme="whatsapp" rounded="4px" type="submit">
                Sign Up
              </Button>
              <Spacer />
              <Link to="/login">
                <Text
                  border="1px"
                  borderColor={"blue.400"}
                  rounded="4px"
                  p="2"
                  _hover={{
                    bg: "blue.100",
                  }}
                  color={"blue.600"}
                >
                  Already have account? Login
                </Text>
              </Link>
            </Flex>
          </form>
        </Box>
      </Flex>{" "}
    </Center>
  );
};

export default Signup;
