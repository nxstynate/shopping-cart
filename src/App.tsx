import { Grid, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { ProductItem } from "./productItems";

export default function App() {
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);

  const addToCart = (product: ProductItem) => {
    const newItem = { ...product, quantity: 1 };
    setCartItems((prevCartItems: ProductItem[]) => [...prevCartItems, newItem]);
  };

  const removeFromCart = (itemId: number) => {
    const itemIndex = cartItems.findIndex(item => item.itemId === itemId);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(itemIndex, 1);
      setCartItems(updatedCartItems);
    }
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
          <HStack spacing={40}>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </HStack>
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={6}
          >
            <ProductList addToCart={addToCart} />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
}
