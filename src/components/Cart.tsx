import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Text,
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
  const [placement] = useState<"right">("right");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        colorScheme="blue"
        onClick={onOpen}
      >
        Checkout ({cartItemCount})
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
            <Text>Total: ${total.toFixed(2)}</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
