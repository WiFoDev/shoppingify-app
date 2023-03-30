import { UserButton } from "@clerk/nextjs";
import Image, { type StaticImageData } from "next/image";

import logo from "~/assets/icons/logo.svg";

import { CartButton } from "./CartButton";

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
      <div className="flex items-center gap-2">
        <CartButton />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonAvatarBox: "w-10 h-10",
            },
          }}
        />
      </div>
    </header>
  );
};
