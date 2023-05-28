import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
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
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
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
