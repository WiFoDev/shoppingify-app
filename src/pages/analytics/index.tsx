import { type NextPage } from "next";

import { useSelectedPage } from "~/hooks";

const Analytics: NextPage = () => {
  useSelectedPage("analytics");

  return <div>Analytics</div>;
};

export default Analytics;
