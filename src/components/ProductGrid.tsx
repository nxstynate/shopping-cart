import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      <ProductCard />
    </SimpleGrid>
  );
}
