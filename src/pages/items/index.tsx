import { SignedIn } from "@clerk/nextjs";
import { type NextPage } from "next";

const Items: NextPage = () => {
  return (
    <SignedIn>
      <section>items page</section>
    </SignedIn>
  );
};

export default Items;
