import { useAtom } from "jotai";
import { useEffect } from "react";

import { selectedPageAtom } from "~/atoms";

export const useSelectedPage = (page: string) => {
  const [_, setSelectedPage] = useAtom(selectedPageAtom);

  useEffect(() => {
    setSelectedPage(page);
  }, [page, setSelectedPage]);
};
