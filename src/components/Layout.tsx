import { Grid, GridItem } from "@chakra-ui/react";
import ProductGrid from "./ProductGrid";
import NavBar from "./NavBar";

export interface ProductQuery {
  sortOrder: string;
  searchText: string;
}
export default function Layout() {
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
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="4" area={"header"}>
          <NavBar />
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <ProductGrid />
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}
