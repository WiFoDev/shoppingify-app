import {type NextPage} from "next";

import {useSelectedPage} from "@/hooks";

const Items: NextPage = () => {
  useSelectedPage("items");

  return <div>Items</div>;
};

export default Items;
