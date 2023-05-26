import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { ProductItem, productItems } from "../productItems";

export default function ProductList() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    const newItem = { ...product, quantity: 1 };
    setCartItems([...cartItems, newItem]);
  }

  return (
    <>
      {productItems.map((item: ProductItem) => (
        <Card key={item.id} maxW="sm">
          <CardBody>
            <Image src={item.image} objectFit="cover" borderRadius="5px" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.name}</Heading>
              <Text color="gray.400">{item.description}</Text>
              <Text color="white.600" fontSize="2xl">
                {item.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy Now
              </Button>
              <Button
                onClick={() => handleAddToCart(item)}
                variant="outline"
                colorScheme="blue"
              >
                Add To Cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
