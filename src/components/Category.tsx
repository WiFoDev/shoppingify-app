import {FC} from "react";
import {motion} from "framer-motion";

import {ItemList} from "./ItemList";

interface CategoryProps {
  id: string;
  name: string;
  items: {id: string; name: string}[];
}

const category = {
  hidden: {translateY: -100, opacity: 0},
  show: {translateY: 0, opacity: 1},
};

export const Category: FC<CategoryProps> = ({id, name, items}) => {
  return (
    <li key={id} className="flex flex-col gap-4">
      <motion.h2
        animate="show"
        className="text-lg font-medium"
        initial="hidden"
        variants={category}
      >
        {name}
      </motion.h2>
      <ItemList items={items} />
    </li>
  );
};
