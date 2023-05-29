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
      <Text>
        {item.name} {item.quantity > 1 && `(x${item.quantity})`}
      </Text>
      <Text>Price: {item.price}</Text>
      <Button onClick={handleRemove}>Remove</Button>
    </>
  );
}
