import { Button, Text } from "@chakra-ui/react";

export default function CartItem({ item, removeFromCart }) {
  const handleRemove = () => {
    removeFromCart(item.id);
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
