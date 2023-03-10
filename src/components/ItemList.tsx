import {FC} from "react";
import Image, {StaticImageData} from "next/image";

import addIcon from "@/assets/icons/add.svg";

interface ItemListProps {
  items: {id: string; name: string}[];
}

export const ItemList: FC<ItemListProps> = ({items}) => {
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-6">
      {items.map(({id, name}) => {
        return (
          <li
            key={id}
            className="text-sm font-medium flex items-center justify-between p-4 rounded-xl shadow-outer"
          >
            {name}
            <Image
              alt="Add item icon"
              className="h-6 w-6"
              src={addIcon as StaticImageData}
            />
          </li>
        );
      })}
    </ul>
  );
};
