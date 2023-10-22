import {
  Box,
  Heading,
  Card,
  Divider,
  CardBody,
  CardFooter,
  Stack,
  ButtonGroup,
  Text,
  Button,
  Image,
  Flex,
  SimpleGrid,
  Select,
} from "@chakra-ui/react";
import Prouduct from "../assets/images/prouduct.png";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsCard from "../components/ProductsCard";

const Products = () => {
  const [products, setProducts] = useState(null);
  async function fetchAndUpdate() {
    try {
      let res = await axios.get("http://localhost:8000/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
      setProducts(null);
    }
  }
  useEffect(() => {
    fetchAndUpdate();
  }, []);
  return (
    <Flex gap="4">
      <Box w="400px" shadow="md" h="fit-content" p={"4"}>
        <Heading size="sm" p="4">
          Filterrs
        </Heading>
        <Select
          value={""}
          onChange={(e) => console.log(e.target.value)}
          placeholder="Filter by category"
        >
          {products?.map((item) => {
            return (
              <option key={item.id} value={item.category}>
                {" "}
                {item.category}{" "}
              </option>
            );
          })}
        </Select>
      </Box>
      <SimpleGrid columns={[2, 3]} gap="4">
        {products?.map((product) => {
          return <ProductsCard key={product.id} product={product} />;
        })}
      </SimpleGrid>{" "}
    </Flex>
  );
};

export default Products;
