import { SignedIn } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useSelectedPage } from "~/hooks";

const Items: NextPage = () => {
  useSelectedPage("items");
  return (
    <SignedIn>
      <section>items page</section>
    </SignedIn>
  );
};

export default Items;
