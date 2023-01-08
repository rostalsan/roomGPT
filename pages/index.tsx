import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Restore Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-24 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Restoring old photos{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>{" "}
          for everyone.
        </h1>
        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">Have old and blurry photos? Let our AI restore them so those memories can live on. Restore your old photos today – 100% free.</p>
        <Link className="bg-black rounded-full text-white font-medium px-4 py-2 mt-8 hover:bg-black/80" href="/restore">
          Restore your photos
        </Link>
        <div className="flex justify-between items-center w-full flex-col mt-6">
          <div className="flex flex-col space-y-10 mt-4">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <img src="originalLilBro.png" className="w-80 rounded-2xl" />
              <img src="restoredLilBro.png" className="w-80 rounded-2xl sm:mt-0 mt-2" />
            </div>
          </div>
          <p className="text-gray-400 mt-2 mb-10">Check out this sweet photo restoration of my little brother.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
