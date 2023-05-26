import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState("right");

  // Add to cart logic:
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  return (
    <>
      <Button width="300px" variant="solid" colorScheme="blue" onClick={onOpen}>
        Checkout
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Cart</DrawerHeader>
          <DrawerBody>
            {cart.map(item => (
              <CartItem
                key={item.id}
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
