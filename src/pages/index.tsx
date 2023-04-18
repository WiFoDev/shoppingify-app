import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import logo from "~/assets/icons/empty_car.svg";

const Home: NextPage = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      void router.push("/items");
    }
  }, [isSignedIn, router]);

  return (
    <section className="mt-36 flex flex-col items-center gap-10 px-4 sm:mt-52 sm:flex-row md:mt-36 md:justify-around">
      <div className="flex basis-1/2 flex-col items-center gap-4 text-center sm:items-start sm:text-start md:max-w-[780px]">
        <h1 className="max-w-[96%] text-3xl font-semibold sm:max-w-full md:text-5xl">
          Streamline Your{" "}
          <span className="font-bold text-primary">Shopping</span>: The Ultimate{" "}
          <span className="font-bold text-primary">List Manager</span>
        </h1>
        <p className="text-lg md:text-xl">
          Keep track of everything you need to buy. With powerful analytics, you
          can manage your purchases like a pro. Say goodbye to missed
          opportunities and hello to smarter shopping with us.
        </p>
        <Link
          href="/sign-up"
          className="w-fit rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white shadow-outer transition-all hover:bg-primary/90 hover:shadow-inner sm:mt-4"
        >
          Let&apos;s Go
        </Link>
      </div>
      <Image
        src={logo as StaticImageData}
        alt="A shopping cart drived by a woman"
        className="grid max-w-[640px] place-items-center sm:h-1/2 sm:w-1/2"
      />
    </section>
  );
};

export default Home;
