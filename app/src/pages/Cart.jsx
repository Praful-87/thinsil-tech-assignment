import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Spacer,
  Divider,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import { MyContext } from "../App";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, setCart } = useContext(MyContext);
  const toast = useToast();
  function handelCheckout() {
    toast({
      title: "Payment successfull",
      description: "Thank You !",
      duration: 3000,
      isClosable: true,
      position: "top",
      status: "success",
    });
  }
  return (
    <Flex gap="4">
      <Box
        maxH="calc(100vh - 100px)"
        flex="2"
        shadow={"md"}
        p="4"
        overflowY={"scroll"}
      >
        <Heading size="lg" my="4">
          Items in the cart {cart.length}
        </Heading>
        <Flex flexDirection={"column"} gap="4">
          {cart?.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </Flex>
      </Box>
      <Flex
        shadow={"md"}
        w="400px"
        p="4"
        rounded="4px"
        flexDirection={"column"}
        gap="4"
        h="fit-content"
      >
        <Heading size="md">Order Summary</Heading>
        <Flex>
          <Text fontSize={"lg"}>Subtotal</Text>
          <Spacer />
          <Text>3999 ₹</Text>
        </Flex>
        <Flex>
          <Text fontSize={"lg"}>Shipping Charge</Text>
          <Spacer />
          <Text>59 ₹</Text>
        </Flex>
        <Flex>
          <Text fontSize={"lg"}>Total</Text>
          <Spacer />
          <Text>4999 ₹</Text>
        </Flex>
        <Divider />
        <Button
          onClick={handelCheckout}
          rightIcon={<BiSolidRightArrow />}
          colorScheme="blue"
        >
          Checkout
        </Button>
      </Flex>
    </Flex>
  );
};

export default Cart;
