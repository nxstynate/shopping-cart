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
import { ProductItem, productItems } from "../productItems";

export default function ProductCard() {
  return (
    <>
      {productItems.map((item: ProductItem) => (
        <Card maxW="sm">
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
              <Button variant="outline" colorScheme="blue">
                Add to Cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
