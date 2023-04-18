import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Image, { type StaticImageData } from "next/image";

import logo from "~/assets/icons/logo.svg";

import { CartButton } from "./CartButton";
import Link from "next/link";

export const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header
      className={`flex items-center justify-between  p-4 shadow-sm shadow-tertiary/60 ${
        isSignedIn ? "sm:hidden" : "fixed inset-x-0 top-0"
      }`}
    >
      <div className="flex items-center gap-2 text-xl font-semibold">
        <Image
          alt="Shoppingify Logo"
          className="h-10 w-10"
          src={logo as StaticImageData}
        />
        Shoppingify
      </div>
      <SignedOut>
        <Link
          href="/sign-up"
          className="rounded-full border-[1px] border-tertiary px-6 py-2 font-semibold shadow-outer transition-all hover:bg-tertiary/90 hover:text-white hover:shadow-inner"
        >
          Sign Up
        </Link>
      </SignedOut>
      <SignedIn>
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
      </SignedIn>
    </header>
  );
};
