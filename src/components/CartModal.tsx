import {SetStateAction} from "jotai";
import Image from "next/image";
import {Dispatch, FC} from "react";
import {motion} from "framer-motion";

import closeIcon from "@/assets/icons/close.svg";

import {Portal} from "./Portal";
import {AddItem} from "./AddItem";
import {ShoppingList} from "./ShoppingList";
import {AddShoppingList} from "./AddShoppingList";

interface CartModalProps {
  onClose: Dispatch<SetStateAction<boolean>>;
}

const backdrop = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

const modal = {
  visible: {x: 0},
  hidden: {
    x: -20,
    transition: {
      easeInOut: [0.4, 0, 0.2, 1],
    },
  },
};

export const CartModal: FC<CartModalProps> = ({onClose}) => {
  return (
    <Portal>
      <motion.div
        animate="visible"
        className="fixed inset-0 z-10 flex bg-black/50 backdrop-blur-sm"
        initial="hidden"
        variants={backdrop}
      >
        <motion.div
          animate="visible"
          className="flex flex-col"
          initial="hidden"
          variants={modal}
        >
          <div className="relative z-20 flex  flex-1 basis-10/12 flex-col items-center rounded-tr-3xl bg-secondary py-10 px-4 shadow-right">
            <button
              className="absolute top-3 right-3"
              onClick={() => onClose(false)}
            >
              <Image
                alt="Close icon"
                className="h-6 w-6"
                src={closeIcon}
              />
            </button>
            <AddItem />
            <ShoppingList />
          </div>
          <AddShoppingList />
        </motion.div>
        <div
          className="h-full basis-2/12"
          onClick={() => onClose(false)}
        />
      </motion.div>
    </Portal>
  );
};
