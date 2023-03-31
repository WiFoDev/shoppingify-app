import Image, { type StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { type Dispatch, type FC, type SetStateAction } from "react";

import bottleIcon from "~/assets/icons/bottle.svg";

interface AddItemProps {
  onOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const AddItem: FC<AddItemProps> = ({ onOpenModal }) => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center gap-5 rounded-3xl bg-tertiary px-2">
      <Image
        alt="Bottle icon"
        className="relative -top-4"
        src={bottleIcon as StaticImageData}
      />
      <div className="flex flex-col items-start gap-2 font-bold">
        <p className="text-white">Didn’t find what you need?</p>
        <button
          className="rounded-xl bg-white px-5 py-2 text-sm"
          onClick={() => {
            void router.push("/add-item");
            onOpenModal(false);
          }}
        >
          Add item
        </button>
      </div>
    </div>
  );
};
