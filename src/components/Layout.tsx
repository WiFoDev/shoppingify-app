import Head from "next/head";
import {type ReactNode} from "react";
import {Quicksand} from "next/font/google";

import {Header} from "./Header";
import {Footer} from "./Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className={`${quicksand.variable} h-screen font-sans`}>
      <Head>
        <title>Shoppingify App</title>
        <meta
          content="Best app to make your shopping list"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Header />
      <main className="px-4">{children}</main>
      <Footer />
    </div>
  );
};
