// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from "next";

export type CategoryResponse = {
  categories: Category[];
};

type Category = {
  id: string;
  name: string;
  items: Item[];
};

type Item = {
  id: string;
  name: string;
  categoryId: string;
  note?: string;
  imageUrl?: string;
};

const mockedData: CategoryResponse = {
  categories: [
    {
      id: "1",
      name: "Fruit And Vegetables",
      items: [
        {
          id: "1",
          name: "Apple",
          categoryId: "1",
        },
        {
          id: "2",
          name: "Tomato",
          categoryId: "1",
        },
        {
          id: "3",
          name: "Pineapple",
          categoryId: "1",
        },
      ],
    },
    {
      id: "2",
      name: "Meat And Fish",
      items: [
        {
          id: "4",
          name: "Chicken 1kg",
          categoryId: "2",
        },
        {
          id: "5",
          name: "Salmon 1k",
          categoryId: "2",
        },
        {
          id: "6",
          name: "Pork 1kg",
          categoryId: "2",
        },
      ],
    },
    {
      id: "3",
      name: "Meat And Fish",
      items: [
        {
          id: "7",
          name: "Chicken 1kg",
          categoryId: "2",
        },
        {
          id: "8",
          name: "Salmon 1k",
          categoryId: "2",
        },
        {
          id: "9",
          name: "Pork 1kg",
          categoryId: "2",
        },
      ],
    },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoryResponse>,
) {
  res.status(200).json(mockedData);
}
