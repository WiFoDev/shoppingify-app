import {SetStateAction} from "jotai";
import React, {Dispatch, FC} from "react";

import {Portal} from "./Portal";

interface CartModalProps {
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const CartModal: FC<CartModalProps> = ({onClose}) => {
  return (
    <Portal>
      <div className="fixed inset-0 z-10 flex bg-black/50 backdrop-blur-sm">
        <div className="relative z-20  h-full basis-10/12 rounded-r-xl bg-secondary shadow-right">
          <h2 className="text-2xl font-semibold">Cart</h2>
          <ul className="mt-4 flex flex-col gap-4">
            <li className="flex items-center justify-between">
              <span className="text-sm font-medium">Item 1</span>
              <span className="text-sm font-medium">1</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-sm font-medium">Item 2</span>
              <span className="text-sm font-medium">2</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-sm font-medium">Item 3</span>
              <span className="text-sm font-medium">3</span>
            </li>
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">$6.00</span>
          </div>
          <button className="mt-4 w-full rounded-md bg-primary py-2 font-semibold text-white">
            Checkout
          </button>
        </div>
        <div
          className="h-full basis-2/12"
          onClick={() => onClose(false)}
        />
      </div>
    </Portal>
  );
};
