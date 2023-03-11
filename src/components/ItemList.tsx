import {FC} from "react";

import {Item, ItemProps as ItemData} from "@/components/Item";

interface ItemListProps {
  items: ItemData[];
}

export const ItemList: FC<ItemListProps> = ({items}) => {
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-5">
      {items.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </ul>
  );
};
