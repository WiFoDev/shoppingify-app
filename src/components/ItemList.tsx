import { type FC } from "react";

import { Item } from "~/components/Item";
import { api } from "~/utils/api";

interface ItemListProps {
  categoryId: string;
}

export const ItemList: FC<ItemListProps> = ({ categoryId }) => {
  const { data } = api.items.getByCategoryId.useQuery({ categoryId });

  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-5">
      {data &&
        data.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
    </ul>
  );
};
