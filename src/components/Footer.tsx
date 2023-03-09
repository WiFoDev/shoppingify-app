import {useAtom} from "jotai";
import Image, {type StaticImageData} from "next/image";
import Link from "next/link";

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
    <footer className="fixed inset-x-0 bottom-0 flex items-center justify-around">
      {footerItems.map(({id, alt, src}) => (
        <Link key={id} href={`/${id}`}>
          <Image alt={alt} className="h-8 w-8" src={src} />
          <div
            className={`${
              selectedPage !== id ? "invisible" : ""
            } h-1.5 w-[110%] rounded-full bg-primary`}
          />
        </Link>
      ))}
    </footer>
  );
};
