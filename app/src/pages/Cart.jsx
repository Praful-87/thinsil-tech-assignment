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
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../App";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, setCart } = useContext(MyContext);
  const [total, setTotal] = useState(0);
  const toast = useToast();
  console.log(total);

  function handelCheckout() {
    toast({
      title: "Payment successfull",
      description: "Thank You !",
      duration: 3000,
      isClosable: true,
      position: "top",
      status: "success",
    });
    setCart([]);
    localStorage.clear();
  }
  function totalCalulator() {
    let temp = 0;
    console.log(cart);

    for (let i = 0; i < cart.length; i++) {
      let item = cart[i];
      temp = temp + item.qty * item.price;
    }
    setTotal(temp);
  }
  useEffect(() => {
    totalCalulator();
  }, [cart]);
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

      {/* checkout section */}

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
          <Text>{total} ₹</Text>
        </Flex>
        <Flex>
          <Text fontSize={"lg"}>Shipping Charges</Text>
          <Spacer />
          <Text>49 ₹</Text>
        </Flex>
        <Flex>
          <Text fontSize={"lg"}>Total</Text>
          <Spacer />
          <Text>{total > 0 ? total + 49 : 0} ₹</Text>
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
