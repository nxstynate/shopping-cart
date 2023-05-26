import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import "./App.css";
import ProductList from "./components/ProductList";

export interface ProductQuery {
  sortOrder: string;
  searchText: string;
}
function App() {
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
        <GridItem pl="2" area={"main"}>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            padding="10px"
            spacing={6}
          >
            <ProductList products={products} addToCart={addToCart} />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
