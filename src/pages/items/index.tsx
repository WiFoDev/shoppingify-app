import {type NextPage} from "next";
import Image from "next/image";

import searchIcon from "@/assets/icons/search.svg";
import {useSelectedPage} from "@/hooks";
import {CategoryList} from "@/components";

const Items: NextPage = () => {
  useSelectedPage("items");

  return (
    <section className="sm:flex sm:flex-col sm:gap-10 sm:p-6">
      <div className="hidden sm:flex sm:justify-between">
        <h1 className="pointer-events-none basis-1/2 text-2xl font-medium">
          <span className=" font-bold text-primary">Shoppingify</span>{" "}
          allows you take your shopping list wherever you go
        </h1>
        <div className="relative">
          <input
            className="rounded-md py-2 pl-8 text-xs shadow-outer outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="search item"
            type="text"
          />
          <Image
            alt="Search Item Icon"
            className="absolute top-2 left-2 h-4 w-4"
            src={searchIcon}
          />
        </div>
      </div>
      <CategoryList />
    </section>
  );
};

export default Items;
