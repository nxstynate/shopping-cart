import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function ProductCard() {
  const mangoImage =
    "https://media.discordapp.net/attachments/992107765071892480/1109719744329809960/NXSTYNATE_Imagine_a_high-resolution_product_photography_shot_fo_568a66da-e096-4abb-86e0-3ea2e0f6f8ce.png?width=1235&height=1235";

  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={mangoImage} objectFit="cover" borderRadius="5px" />

        <Stack mt="6" spacing="3">
          <Heading size="md">Mango</Heading>
          <Text>
            Experience tropical paradise with our succulent mangoes. Each bite
            reveals a luscious, golden flesh that delivers a perfect blend of
            sweetness and tanginess
          </Text>
          <Text color="green.600" fontSize="2xl">
            $1.99
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="green">
            Buy now
          </Button>
          <Button variant="outline" colorScheme="green">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
