import {useAtom} from "jotai";
import Image, {type StaticImageData} from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

import analyticsIcon from "@/assets/icons/analytics.svg";
import historyIcon from "@/assets/icons/history.svg";
import listIcon from "@/assets/icons/list.svg";
import {selectedPageAtom} from "@/atoms";

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
    <footer className="fixed inset-x-0 bottom-0 flex h-12 items-center justify-around rounded-t-lg bg-white shadow-top sm:relative sm:h-full sm:flex-col sm:items-start sm:rounded-r-lg sm:rounded-t-none sm:shadow-right">
      {footerItems.map(({id, alt, src}) => (
        <Link
          key={id}
          className="flex h-full flex-col items-center justify-end sm:flex-row-reverse sm:items-center"
          href={`/${id}`}
        >
          <Image alt={alt} className="h-8 w-8 sm:h-5" src={src} />
          <motion.div
            animate={{translateY: selectedPage === id ? 0 : 10}}
            className={`${
              selectedPage !== id ? "invisible" : ""
            } h-1.5 w-[110%] rounded-full bg-primary sm:hidden`}
          />
          <motion.div
            animate={{translateX: selectedPage === id ? 0 : -5}}
            className={`${
              selectedPage !== id ? "invisible" : ""
            } hidden sm:block sm:h-6 sm:w-1 sm:rounded-r-lg sm:bg-primary`}
          />
        </Link>
      ))}
    </footer>
  );
};
