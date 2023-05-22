import { AddIcon } from "@chakra-ui/icons";
import { HStack, Image } from "@chakra-ui/react";
import Cart from "./Cart";

const NavBar = () => {
  const imageLink =
    "https://media.discordapp.net/attachments/992107765071892480/1110025043896975390/NXSTYNATE_Bounty_Grocers_The_logo_consists_of_the_words_Bounty__20a5e97c-e59c-41b9-a34d-ee3c91eec7cd.png?width=1290&height=1290";

  return (
    <>
      <HStack spacing={80}>
        <Image
          boxSize="70px"
          src={imageLink}
          objectFit="cover"
          borderRadius="full"
        />
        <AddIcon color="white" boxSize={6} />
        <Cart />
      </HStack>
    </>
  );
};

export default NavBar;
