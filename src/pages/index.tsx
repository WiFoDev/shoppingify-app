import { SignOutButton, SignUpButton } from "@clerk/nextjs";
import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <Link href="/sign-up" className="btn-primary btn">
        Login
      </Link>
      <SignOutButton />
    </section>
  );
};

export default Home;
