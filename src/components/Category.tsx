import { type FC } from "react";
import { motion } from "framer-motion";

import { ItemList } from "./ItemList";
import { type RouterOutputs } from "~/utils/api";

type CategoryProps = RouterOutputs["categories"]["getAll"][number];

const category = {
  hidden: { translateY: -100, opacity: 0 },
  show: { translateY: 0, opacity: 1 },
};

export const Category: FC<CategoryProps> = ({ id, name }) => {
  return (
    <li key={id} className="flex flex-col gap-4">
      <motion.h2
        animate="show"
        className="text-lg font-medium"
        initial="hidden"
        variants={category}
      >
        {name.toUpperCase()}
      </motion.h2>
      <ItemList categoryId={id} />
    </li>
  );
};
