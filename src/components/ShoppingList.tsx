import Image, { type StaticImageData } from "next/image";

import emptyCartIcon from "~/assets/icons/empty_car.svg";

export const ShoppingList = () => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center pt-20 text-xl font-bold">
        No Items
      </div>
      <Image
        alt="Empty Cart Icon"
        className="absolute -bottom-4 mx-auto"
        src={emptyCartIcon as StaticImageData}
      />
    </>
  );
};
