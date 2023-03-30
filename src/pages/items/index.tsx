import { type NextPage } from "next";
import Image, { type StaticImageData } from "next/image";

import searchIcon from "~/assets/icons/search.svg";
import { useSelectedPage } from "~/hooks";
import { CategoryList } from "~/components";
import { SignedIn } from "@clerk/nextjs";

const Items: NextPage = () => {
  useSelectedPage("items");

  return (
    <SignedIn>
      <section className="sm:flex sm:flex-col sm:gap-10 sm:p-6">
        <div className="hidden sm:flex sm:justify-between">
          <h1 className="pointer-events-none basis-2/5 text-2xl font-medium">
            <span className=" font-bold text-primary">Shoppingify</span> allows
            you take your shopping list wherever you go
          </h1>
          <label className="relative cursor-pointer">
            <input
              className="rounded-lg py-4 pl-14 text-sm shadow-xl outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="search item"
              type="text"
            />
            <Image
              alt="Search Item Icon"
              className="absolute left-4 top-4 h-5 w-5"
              src={searchIcon as StaticImageData}
            />
          </label>
        </div>
        <CategoryList />
      </section>
    </SignedIn>
  );
};

export default Items;
