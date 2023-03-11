import {FC} from "react";

import {ItemList} from "./ItemList";

interface CategoryProps {
  id: string;
  name: string;
  items: {id: string; name: string}[];
}

export const Category: FC<CategoryProps> = ({id, name, items}) => {
  return (
    <li key={id} className="flex flex-col gap-4">
      <h2 className="text-lg font-medium">{name}</h2>
      <ItemList items={items} />
    </li>
  );
};
