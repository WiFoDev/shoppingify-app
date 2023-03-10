import {type NextPage} from "next";

import {useSelectedPage} from "@/hooks";
import {CategoryList} from "@/components";

const Items: NextPage = () => {
  useSelectedPage("items");

  return (
    <section>
      <CategoryList />
    </section>
  );
};

export default Items;
