import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  RadioGroup,
  Stack,
  useDisclosure,
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
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4"></Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            {cartItems.map(item => (
              <CartItem
                key={item.itemId}
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
