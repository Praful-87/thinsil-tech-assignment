import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  ButtonGroup,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import React, { useContext } from "react";
import Prouduct from "../assets/images/prouduct.png";
import { MyContext } from "../App";
import { json } from "react-router-dom";
const CartItem = ({ item }) => {
  const { cart, setCart } = useContext(MyContext);
  function handelDeleteCartItem(id) {
    // alert(id);
    let newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  function hadelQty(id, num) {
    let newCart = cart.map((item) => {
      if (item.id === id) {
        item.qty = item.qty + num;
      }
      return item;
    });

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  return (
    <Flex
      align={"center"}
      justify={"space-between"}
      border="1px"
      borderColor={"gray.200"}
      rounded={"4px"}
      p="4"
    >
      <Image h="100px" src={Prouduct} />
      <Box>
        <Heading size="md">{item.name}</Heading>
        <Text>₹ {item.price * item.qty}</Text>
      </Box>

      <Flex align="center" gap="6">
        <Flex align={"center"} gap="3">
          <Button onClick={() => hadelQty(item.id, 1)} colorScheme="blue">
            +
          </Button>
          <Button colorScheme="green">{item.qty}</Button>
          <Button
            onClick={() => hadelQty(item.id, -1)}
            isDisabled={item.qty === 1}
            colorScheme="blue"
          >
            -
          </Button>
        </Flex>
        <IconButton
          onClick={() => handelDeleteCartItem(item.id)}
          variant="outline"
          colorScheme="red"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<RiDeleteBin5Fill />}
        />
      </Flex>
    </Flex>
  );
};

export default CartItem;
