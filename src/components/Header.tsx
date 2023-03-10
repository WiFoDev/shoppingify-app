import Image, {type StaticImageData} from "next/image";

import logo from "@/assets/icons/logo.svg";

import {CartButton} from "./CartButton";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 sm:hidden">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <Image
          alt="Shoppingify Logo"
          className="h-10 w-10"
          src={logo as StaticImageData}
        />
        Shoppingify
      </div>
      <CartButton />
    </header>
  );
};
