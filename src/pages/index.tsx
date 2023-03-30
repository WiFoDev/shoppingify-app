import { type NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <Link href="/sign-up" className="btn-primary btn">
        Login
      </Link>
    </section>
  );
};

export default Home;
