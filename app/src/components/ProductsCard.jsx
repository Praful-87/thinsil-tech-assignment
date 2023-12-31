import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  CardFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
import Prouduct from "../assets/images/prouduct.png";
import { useContext, useState } from "react";
import { MyContext } from "../App";

const ProductsCard = ({ product }) => {
  const { cart, setCart, isAuth } = useContext(MyContext);
  const toast = useToast();
  function addToCart(product) {
    if (!isAuth) {
      toast({
        title: "Not authenticated",
        description: "Login first",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    product.qty = 1;
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    setCart([...cart, product]);
    toast({
      title: "Item added to cart",
      position: "top",
      duration: 3000,
      status: "success",
      isClosable: true,
    });
  }
  return (
    <Card maxW="sm" h="fit-content">
      <CardBody>
        <Image src={Prouduct} borderRadius="md" />
        <Stack mt="6" spacing="3">
          <Text
            textTransform={"uppercase"}
            letterSpacing={"2px"}
            fontSize={"14px"}
            color="gray"
          >
            Shop
          </Text>
          <Heading size="md">{product.name}</Heading>
          <Text>₹ {product.price}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          onClick={() => addToCart(product)}
          w="full"
          rounded="3px"
          colorScheme="pink"
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
