import { useAtom } from "jotai";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import analyticsIcon from "~/assets/icons/analytics.svg";
import historyIcon from "~/assets/icons/history.svg";
import logo from "~/assets/icons/logo.svg";
import listIcon from "~/assets/icons/list.svg";
import { selectedPageAtom } from "~/atoms";

import { CartButton } from "./CartButton";

const footerItems = [
  {
    id: "items",
    src: listIcon as StaticImageData,
    alt: "List Items Icon",
  },
  {
    id: "history",
    src: historyIcon as StaticImageData,
    alt: "List's History Icon",
  },
  {
    id: "analytics",
    src: analyticsIcon as StaticImageData,
    alt: "Analytics Icon",
  },
];

export const Footer = () => {
  const [selectedPage] = useAtom(selectedPageAtom);

  return (
    <footer className="fixed inset-x-0 bottom-0  h-12 rounded-t-lg bg-white shadow-top sm:relative sm:flex sm:h-full sm:w-16 sm:flex-col sm:justify-between sm:rounded-r-lg sm:rounded-t-none sm:py-14 sm:shadow-right">
      <div className="hidden sm:block sm:px-3">
        <Image
          alt="Shoppingify Logo"
          className="h-10 w-10"
          src={logo as StaticImageData}
        />
      </div>
      <ul className="flex h-full items-center justify-around sm:h-auto sm:flex-col sm:justify-center sm:gap-16">
        {footerItems.map(({ id, alt, src }) => (
          <Link
            key={id}
            className="flex h-full flex-col items-center justify-end sm:flex-row-reverse sm:items-center sm:gap-2 sm:self-start"
            href={`/${id}`}
          >
            <Image alt={alt} className="h-8 w-8" src={src} />
            <motion.div
              animate={{ translateY: selectedPage === id ? 0 : 10 }}
              className={`${
                selectedPage !== id ? "invisible" : ""
              } h-1.5 w-[110%] rounded-full bg-primary sm:hidden`}
            />
            <motion.div
              animate={{ translateX: selectedPage === id ? 0 : -5 }}
              className={`${
                selectedPage !== id ? "invisible" : ""
              } hidden sm:block sm:h-8 sm:w-1 sm:rounded-r-lg sm:bg-primary`}
            />
          </Link>
        ))}
      </ul>
      <div className="hidden sm:block sm:px-3">
        <CartButton />
      </div>
    </footer>
  );
};
