import Image, {type StaticImageData} from "next/image";

import cartIcon from "@/assets/icons/shopping_cart.svg";
import logo from "@/assets/icons/logo.svg";

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
      <div className="relative h-10 w-10 rounded-full bg-primary p-1.5">
        <Image
          alt="Shopping Cart Icon"
          src={cartIcon as StaticImageData}
        />
        <span className="absolute top-0 right-0 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative grid h-4 w-4 place-items-center rounded-full bg-red-600 text-xs text-white">
            3
          </span>
        </span>
      </div>
    </header>
  );
};
