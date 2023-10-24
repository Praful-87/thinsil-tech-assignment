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
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../App";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(MyContext);
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.get(
      `http://localhost:8000/user?email=${formData.email}&password=${formData.password}`
    );
    // console.log(res.data);
    if (res.data.length > 0) {
      alert("login successfull");
      setIsAuth(true);
      navigate("/");
    } else {
      alert("wrong credential");
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
            Welcome Back! 👋
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

            <Flex align="center" mt="20px">
              <Button colorScheme="whatsapp" rounded="4px" type="submit">
                Login
              </Button>
              <Spacer />
              <Link to="/signup">
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
                  Don't have account? Signup
                </Text>
              </Link>
            </Flex>
          </form>
        </Box>
      </Flex>{" "}
    </Center>
  );
};

export default Login;
