import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { ProductItem } from "../productItems";
import CartItem from "./CartItem";

interface CartProps {
  cartItems: ProductItem[];
  removeFromCart: (itemId: number) => void;
}

export default function Cart(props: CartProps) {
  const { cartItems, removeFromCart } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4"></Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Checkout
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Shopping Cart</DrawerHeader>
          <DrawerBody>
            {cartItems.map(item => (
              <CartItem
                key={item.itemId}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

import { Button, Text } from "@chakra-ui/react";
import { ProductItem } from "../productItems";

interface CartItemProps {
  item: ProductItem;
  removeFromCart: (itemId: number) => void;
}

export default function CartItem(props: CartItemProps) {
  const { item, removeFromCart } = props;

  const handleRemove = () => {
    removeFromCart(item.itemId);
  };

  return (
    <>
      <Text>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Price: {item.price}</Text>
      <Button onClick={handleRemove}>Remove</Button>
    </>
  );
}
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

interface ProductItemsProps {
  addToCart: (productItems: ProductItem) => void;
}

export default function ProductList(props: ProductItemsProps) {
  const { addToCart } = props;
  return (
    <>
      {productItems.map((item: ProductItem) => (
        <Card key={item.itemId} maxW="sm">
          <CardBody>
            <Image src={item.image} objectFit="cover" borderRadius="5px" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{item.name}</Heading>
              <Text color="gray.400">{item.description}</Text>
              <Text color="white.600" fontSize="2xl">
                ${item.price}ea.
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
                onClick={() => addToCart(item)}
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
import { Grid, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { ProductItem, productItems } from "./productItems";

export default function App() {
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);

  const addToCart = (product: ProductItem) => {
    const newItem = { ...product, quantity: 1 };
    setCartItems((prevCartItems: ProductItem[]) => [...prevCartItems, newItem]);
  };

  const removeFromCart = (itemId: number) => {
    const updatedCartItems = cartItems.filter(item => item.itemId !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <Grid
        templateAreas={`"header header"
"nav main"
"nav footer"`}
        gridTemplateRows={"80px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        fontWeight="bold"
      >
        <GridItem>
          <HStack>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </HStack>
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={6}
          >
            <ProductList products={productItems} addToCart={addToCart} />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
}
export interface ProductItem {
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  itemId: number;
}

export const productItems: ProductItem[] = [
  {
    name: "Apple",
    image:
      "https://media.discordapp.net/attachments/992107765071892480/1109721033432379454/NXSTYNATE_Picture_a_meticulously_captured_high-end_product_phot_c1a6ed1b-04e6-48ca-ae98-fdd7739b4640.png?width=1288&height=1288",
    description:
      "Crisp, juicy, and bursting with natural goodness, our apples are nature's perfect snack. From classic reds to tart greens, we have a variety to suit every taste.",
    price: 0.99,
    quantity: 0,
    itemId: 1,
  },
  {
    name: "Banana",
    image:
      "https://media.discordapp.net/attachments/992107765071892480/1109721646526365706/NXSTYNATE_Visualize_a_sophisticated_high-end_product_photograph_58b1dd69-7977-45ea-8afe-1ba2d921b8a4.png?width=1288&height=1288",
    description:
      "Nature's energy-packed wonder, our bananas are the ultimate fuel for your active lifestyle. Their creamy texture and natural sweetness make them a go-to snack any time of day.",
    price: 1.99,
    quantity: 0,
    itemId: 2,
  },
  {
    name: "Kiwi",
    image:
      "https://media.discordapp.net/attachments/992107765071892480/1109721780442107985/NXSTYNATE_Imagine_a_high-end_product_photograph_of_a_ripe_kiwi__37381332-6322-4c72-88e6-7c6e6bd43ac9.png?width=1288&height=1288",
    description:
      "Our kiwis are a delightful explosion of vibrant green and tangy flavor. Packed with vitamin C and antioxidants, they're a refreshing addition to your healthy lifestyle.",
    price: 0.69,
    quantity: 0,
    itemId: 3,
  },
  {
    name: "Mango",
    image:
      "https://media.discordapp.net/attachments/992107765071892480/1109719744329809960/NXSTYNATE_Imagine_a_high-resolution_product_photography_shot_fo_568a66da-e096-4abb-86e0-3ea2e0f6f8ce.png?width=1235&height=1235",
    description:
      "Experience tropical paradise with our succulent mangoes. Each bite reveals a luscious, golden flesh that delivers a perfect blend of sweetness and tanginess.",
    price: 2.99,
    quantity: 0,
    itemId: 4,
  },
  {
    name: "Watermelon",
    image:
      "https://media.discordapp.net/attachments/992107765071892480/1109721874306453564/NXSTYNATE_Imagine_a_high-end_product_photograph_for_a_luxury_gr_e9bac0a7-3dd9-4a07-80cf-fc56a2a027b5.png?width=1288&height=1288",
    description:
      "Refreshingly juicy, our watermelons are bursting with sweetness, making them the perfect summer treat to quench your thirst and indulge your taste buds.",
    price: 4.99,
    quantity: 0,
    itemId: 5,
  },
];
