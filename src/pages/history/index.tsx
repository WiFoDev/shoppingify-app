import { type NextPage } from "next";

import { useSelectedPage } from "~/hooks";

const History: NextPage = () => {
  useSelectedPage("history");

  return <div>History</div>;
};

export default History;
