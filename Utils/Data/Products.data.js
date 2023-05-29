import { nanoid } from "nanoid";

export const products = [
  {
    id: nanoid(),
    title: "puralbumen",
    slug: "puralbumen",
    product_details: {
      image: "https://purablehealthcare.com/img/shop/img6.jpg",
      title: "Puralbumen Powder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      priceList: [
        {
          id: nanoid(),
          weight: "400gm",
          price: "500.00",
          strike_price: "799",
          in_stock: true,
        },
        {
          id: nanoid(),
          weight: "1 kg",
          price: "999.00",
          strike_price: "1499",
          in_stock: false,
        },
      ],
      benefits: [
        "High protein from quality whey, supports faster recovery",
        "Maintain positive N-Balance thus prevent loss of lean body mass & support anabolism",
        "Increases pharmacological response",
        "Contains BCAA's for faster tissue regeneration",
        "Provides Omega 3 & Omega 6 fatty acids",
        "Fulfils increased nutritional requirements",
        "Gluten free & preservative free",
        "Improves quality of life",
      ],
      tab_details: [
        {
          name: "Description",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },

        {
          name: "Additonal Information",
          table_img:
            "https://themeim.com/demo/vaxin/demo-one/media/images/banner-two/nutrition-fact.png",
        },
      ],
    },
  },
];
