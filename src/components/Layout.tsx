import Head from "next/head";
import { type ReactNode } from "react";
import { Quicksand } from "next/font/google";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignedIn } from "@clerk/nextjs";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`${quicksand.variable} h-screen font-sans sm:flex sm:flex-row-reverse sm:overflow-hidden`}
    >
      <Head>
        <title>Shoppingify App</title>
        <meta
          content="Best app to make your shopping list"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div id="modals" />
      <SignedIn>
        <Header />
      </SignedIn>
      <main className="flex-1 px-4 pb-16">{children}</main>
      <SignedIn>
        <Footer />
      </SignedIn>
    </div>
  );
};
