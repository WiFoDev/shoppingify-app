import Image, { type StaticImageData } from "next/image";
import { type Dispatch, type FC, type SetStateAction } from "react";

import closeIcon from "~/assets/icons/close.svg";

import { Portal } from "./Portal";
import { AddItem } from "./AddItem";
import { ShoppingList } from "./ShoppingList";
import { AddShoppingList } from "./AddShoppingList";
import { Backdrop } from "./Backdrop";

interface CartModalProps {
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const CartModal: FC<CartModalProps> = ({ onClose }) => {
  return (
    <Portal>
      <Backdrop>
        <div
          className="flex animate-slide-in-left flex-col sm:animate-slide-in-right"
          id="shopping"
        >
          <div className="relative z-20 flex  flex-1 basis-10/12 flex-col items-center rounded-tr-3xl bg-secondary px-4 py-10 shadow-right sm:rounded-none sm:rounded-tl-3xl">
            <button
              className="absolute right-3 top-3"
              onClick={() => onClose(false)}
            >
              <Image
                alt="Close icon"
                className="h-6 w-6"
                src={closeIcon as StaticImageData}
              />
            </button>
            <AddItem onOpenModal={onClose} />
            <ShoppingList />
          </div>
          <AddShoppingList />
        </div>
        <div
          className="h-full basis-2/12 sm:basis-10/12"
          onClick={() => onClose(false)}
        />
      </Backdrop>
    </Portal>
  );
};
