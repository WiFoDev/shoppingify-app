import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

import cartIcon from "~/assets/icons/shopping_cart.svg";

import { CartModal } from "./CartModal";

export const CartButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="relative h-10 w-10 rounded-full bg-primary p-1.5"
        onClick={() => setModalOpen(true)}
      >
        <Image alt="Shopping Cart Icon" src={cartIcon as StaticImageData} />
        <span className="absolute right-0 top-0 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative grid h-4 w-4 place-items-center rounded-full bg-red-600 text-xs text-white">
            3
          </span>
        </span>
      </button>
      {modalOpen && <CartModal onClose={setModalOpen} />}
    </>
  );
};
