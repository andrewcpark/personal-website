import React from "react";
import vendOmaticImg from "/public/assets/projects/vendOMatic.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const vendOMatic = () => {
  return (
    <div className="w-full mb-20">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={vendOmaticImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2"> Vend-O-Matic</h2>
          <h3> React / Node / NoSQL </h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2> Project Overview </h2>
          <br />
          <p>
            {" "}
            My overall plan was to create a simple simulation of a vending
            machine that would return requested data from mutiple endpoints. For
            this application, I used React to create the UI, Node and Express
            for the server and middleware, and lastly, a NoSQL
            database(MongoDB)to store the data.
            <br />
            <br />
            <span className="font-bold"> Use Cases </span>
            <br />
            Since this was a simulation for a physical vending machine, the UI
            was kept minimal with a series of buttons to fetch the requested
            data. The main use cases were to insert and delete coins, get
            inventory of the vending machine, and purchase beverages. Most of
            the data returned were stored in the response header and were logged
            to the console.
            <br />
            <br />
            <span className="font-bold"> API </span>
            <br />
            The backend logic was organized using Express including the routing
            and receiving of APIs to the neccessary middleware. From there using
            Mongoose, each middleware was connected to the NoSQL database with
            the appropiate logic.
            <br />
            <br />
            <span className="font-bold"> Database </span>
            <br />I used a NoSQL database(MongoDB) for its ease of use and
            setup. For future scalability, a NoSQL database can easily
            accomadate more inventory with minimal code updates needed. However,
            if the database was serving multiple machines and the priority was
            inventory management, a SQL database may be more suited for the
            occasion.
          </p>
          <a
            href="https://github.com/andrewcpark/vend-o-matic"
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
                <RiRadioButtonFill className="pr-1" /> Node{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Express{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> MongoDB{" "}
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                {" "}
                <RiRadioButtonFill className="pr-1" /> Heroku{" "}
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

export default vendOMatic;
