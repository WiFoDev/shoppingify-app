import { type FC } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

import addIcon from "~/assets/icons/add.svg";
import { type RouterOutputs } from "~/utils/api";

type ItemProps = RouterOutputs["items"]["getByCategoryId"][number];

const item = {
  hidden: { translateY: -100, opacity: 0 },
  show: { translateY: 0, opacity: 1 },
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const Item: FC<ItemProps> = ({ id, name }) => {
  return (
    <motion.li
      key={id}
      animate="show"
      className="flex items-center justify-between rounded-xl px-2 py-3 text-sm font-medium shadow-outer"
      initial="hidden"
      whileHover={{ scale: 1.05 }}
      variants={item}
    >
      {capitalize(name)}
      <Image
        alt="Add item icon"
        className="h-6 w-6"
        src={addIcon as StaticImageData}
      />
    </motion.li>
  );
};
