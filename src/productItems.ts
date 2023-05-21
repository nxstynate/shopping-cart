export interface ProductItem {
  name: string;
  image: string;
  description: string;
}

export const productItems: ProductItem[] = [
  {
    name: "Apple",
    image: "../src/assets/apple.png",
    description:
      "Crisp, juicy, and bursting with natural goodness, our apples are nature's perfect snack. From classic reds to tart greens, we have a variety to suit every taste.",
  },
  {
    name: "Banana",
    image: "../src/assets/banana.png",
    description:
      "Nature's energy-packed wonder, our bananas are the ultimate fuel for your active lifestyle. Their creamy texture and natural sweetness make them a go-to snack any time of day.",
  },
  {
    name: "Kiwi",
    image: "../src/assets/kiwi.png",
    description:
      "Our kiwis are a delightful explosion of vibrant green and tangy flavor. Packed with vitamin C and antioxidants, they're a refreshing addition to your healthy lifestyle.",
  },
  {
    name: "Mango",
    image: "../src/assets/mango.png",
    description:
      "Experience tropical paradise with our succulent mangoes. Each bite reveals a luscious, golden flesh that delivers a perfect blend of sweetness and tanginess.",
  },
  {
    name: "Watermelon",
    image: "../src/assets/watermelon.png",
    description:
      "Refreshingly juicy, our watermelons are bursting with sweetness, making them the perfect summer treat to quench your thirst and indulge your taste buds.",
  },
];
