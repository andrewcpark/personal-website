import React from "react";
import bluefinImg from "/public/assets/projects/bluefin-page.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const bluefin = () => {
  return (
    <div className="w-full mb-20">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={bluefinImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2"> Bluefin </h2>
          <h3> React / Zillow API / Google Maps API </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2> Project Overview </h2>
          <br />
          <p>
            A real estate property finder app using React where users can search
            active listings by requesting the Zillow API and displaying on an
            interactive map provided by the Google Maps API.
            <br />
            <br />
            <span className="font-bold"> React </span>
            <br />
            I built the frontend of this application using React in order to
            design and implement resuable components. I also used libraries such
            as React Hooks to declare state in components and React Router to
            configure routes and navigation. Using React DOM, I used this
            opporuntity to create a portal and a modal component when a user
            clicks on a specific listing card.
            <br />
            <br />
            <span className="font-bold"> API </span>
            <br />
            This application utilizes two third-party APIs, Google Maps and the
            Zillow API. When a user submits a query, the app first calls the
            Zillow API in order to get all the available listings. Once the
            listings are received, the data is then passed onto the Google Maps
            component rendering each listing on the map based on their
            coordinates. The listings data are also used to display a list of
            the listing cards.
            <br />
            <br />
            <span className="font-bold"> CSS </span>
            <br />
            For this application, I utilized pure CSS to style the components
            instead of using a framework I am fond of such as Tailwind CSS.
            Through this exercise, I brushed up on CSS fundamentals and
            responsive designs implementing media queries.
          </p>
          <a
            href="https://bluefin.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8"> Demo </button>
          </a>
          <a
            href="https://github.com/andrewcpark/bluefin"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4"> Github </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2"> Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> JavaScript{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> React{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Zillow API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vercel
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer"> Back </p>
        </Link>
      </div>
    </div>
  );
};

export default bluefin;
