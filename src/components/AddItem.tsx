import Image from "next/image";

import bottleIcon from "@/assets/icons/bottle.svg";

export const AddItem = () => {
  return (
    <div className="flex w-full items-center gap-5 rounded-3xl bg-tertiary px-2">
      <Image
        alt="Bottle icon"
        className="relative -top-4"
        src={bottleIcon}
      />
      <div className="flex flex-col items-start gap-2 font-bold">
        <p className="text-white">Didn’t find what you need?</p>
        <button className="rounded-xl bg-white py-2 px-5 text-sm">
          Add item
        </button>
      </div>
    </div>
  );
};
