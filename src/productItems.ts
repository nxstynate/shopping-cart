export interface ProductItem {
  name: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  itemId: number;
}

export const productItems: ProductItem[] = [
  {
    name: "Apple",
    image:
      "https://media.discordapp.net/attachments/992107765071892480/1109721033432379454/NXSTYNATE_Picture_a_meticulously_captured_high-end_product_phot_c1a6ed1b-04e6-48ca-ae98-fdd7739b4640.png?width=1288&height=1288",
    description:
      "Crisp, juicy, and bursting with natural goodness, our apples are nature's perfect snack. From classic reds to tart greens, we have a variety to suit every taste.",
    price: 0.99,
    quantity: 0,
    itemId: 1,
  },
  {
    name: "Banana",
    image:
      "https://media.discordapp.net/attachments/992107765071892480/1109721646526365706/NXSTYNATE_Visualize_a_sophisticated_high-end_product_photograph_58b1dd69-7977-45ea-8afe-1ba2d921b8a4.png?width=1288&height=1288",
    description:
      "Nature's energy-packed wonder, our bananas are the ultimate fuel for your active lifestyle. Their creamy texture and natural sweetness make them a go-to snack any time of day.",
    price: 1.99,
    quantity: 0,
    itemId: 2,
  },
  {
    name: "Kiwi",
    image:
      "https://media.discordapp.net/attachments/992107765071892480/1109721780442107985/NXSTYNATE_Imagine_a_high-end_product_photograph_of_a_ripe_kiwi__37381332-6322-4c72-88e6-7c6e6bd43ac9.png?width=1288&height=1288",
    description:
      "Our kiwis are a delightful explosion of vibrant green and tangy flavor. Packed with vitamin C and antioxidants, they're a refreshing addition to your healthy lifestyle.",
    price: 0.69,
    quantity: 0,
    itemId: 3,
  },
  {
    name: "Mango",
    image:
      "https://media.discordapp.net/attachments/992107765071892480/1109719744329809960/NXSTYNATE_Imagine_a_high-resolution_product_photography_shot_fo_568a66da-e096-4abb-86e0-3ea2e0f6f8ce.png?width=1235&height=1235",
    description:
      "Experience tropical paradise with our succulent mangoes. Each bite reveals a luscious, golden flesh that delivers a perfect blend of sweetness and tanginess.",
    price: 2.99,
    quantity: 0,
    itemId: 4,
  },
  {
    name: "Watermelon",
    image:
      "https://media.discordapp.net/attachments/992107765071892480/1109721874306453564/NXSTYNATE_Imagine_a_high-end_product_photograph_for_a_luxury_gr_e9bac0a7-3dd9-4a07-80cf-fc56a2a027b5.png?width=1288&height=1288",
    description:
      "Refreshingly juicy, our watermelons are bursting with sweetness, making them the perfect summer treat to quench your thirst and indulge your taste buds.",
    price: 4.99,
    quantity: 0,
    itemId: 5,
  },
];
