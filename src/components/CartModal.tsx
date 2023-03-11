import {SetStateAction} from "jotai";
import Image from "next/image";
import React, {Dispatch, FC} from "react";

import closeIcon from "@/assets/icons/close.svg";

import {Portal} from "./Portal";
import {AddItem} from "./AddItem";
import {ShoppingList} from "./ShoppingList";
import {AddShoppingList} from "./AddShoppingList";

interface CartModalProps {
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const CartModal: FC<CartModalProps> = ({onClose}) => {
  return (
    <Portal>
      <div className="fixed inset-0 z-10 flex bg-black/50 backdrop-blur-sm">
        <div className="flex flex-col">
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
        </div>
        <div
          className="h-full basis-2/12"
          onClick={() => onClose(false)}
        />
      </div>
    </Portal>
  );
};
