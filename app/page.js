"use client";
import Image from "next/image";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
export default function Home() {
  const searchParams = useSearchParams();
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="https://imgs.search.brave.com/fmCjXSFSgNdZFMy3nlqYE-TkLuvZAw74sjbyIG_0xKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc0/MjY3Mzc0L3Bob3Rv/L3JlZmxlY3Rpb25z/LW9uLWEtbGFrZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Y3F6c040bGRBYk95/d2lNM0JmMmxEZjB3/QXNTVWd6VUhzXzFR/LTBuY0lsOD0"
              height="720"
              width="600"
            />
          </div>
        </div>
      </section>
      <div className="search">
        <Suspense>
        you are requesting name which is {searchParams.get('blog')} and utm_source is\
        {searchParams.get('utm_source')}
        </Suspense>
      </div>
    </div>
  );
}
