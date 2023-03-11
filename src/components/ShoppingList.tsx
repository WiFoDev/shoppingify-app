import Image from "next/image";

import emptyCartIcon from "@/assets/icons/empty_car.svg";

export const ShoppingList = () => {
  return (
    <>
      <div className="grid flex-1 place-items-center text-xl font-bold">
        No Items
      </div>
      <Image
        alt="Empty Cart Icon"
        className="absolute -bottom-4 mx-auto"
        src={emptyCartIcon}
      />
    </>
  );
};
