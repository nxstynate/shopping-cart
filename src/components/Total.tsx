import { Heading } from "@chakra-ui/react";
import { ProductItem } from "../productItems";
import CartItem from "./CartItem";

interface TotalProps {
  item: ProductItem[];
  removeFromCart: (itemId: number) => void;
}

export default function Total(props: TotalProps) {
  const { cartItems, removeFromCart } = props;

  return (
    <>
      <Heading>Total</Heading>;
      {cartItems.map(item => (
        <CartItem
          key={item.itemId}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}
    </>
  );
}
