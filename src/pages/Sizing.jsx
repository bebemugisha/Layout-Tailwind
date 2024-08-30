import React from "react";
import Header from "../components/Header";
import Image from "../assets/images/subhome.jpeg.jpeg";

function Sizing() {
  return (
    <>
      <Header />
      <h1 className="text-center text-4xl p-8">SIZING</h1>
      <div className="text-2xl">
        <div className="flex ">
          <img
            className="w-64 h-64 m-8 rounded-full"
            src={Image}
            alt=""
            srcset=""
          />
          <p className="font-mono m-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
        </div>
        <br />

        <div className=" ">
          <img
            className=" float-right w-52 h-52 rounded-lg m-8  "
            src={Image}
            alt=""
            srcset=""
          />

          <p className="font-mono m-10 p-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
        </div>
        <br />
        <div className="flex">
          <img
            className="m-8 w-40 h-40 rounded-3xl"
            src={Image}
            alt=""
            srcset=""
          />

          <p className="font-mono m-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
        </div>
        <br />
        <div className="">
          <img
            className="w-32 h-32 float-right m-8 rounded-xl"
            src={Image}
            alt=""
            srcset=""
          />

          <p className="font-mono m-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
        </div>
        <br />
        <div className=" w-24 min-w-full bg-slate-500 ">
          <p className="text-center">Min-Width-Full</p>
        </div>
        <br />
        <div className=" max-w-md bg-slate-500 ">
          <p className="text-center">Max-Width-Full</p>
        </div>
        <br />
        <div className=" h-64 h-24 bg-orange-600 rounded-lg text-center h-auto">
          H-Auto
        </div>
        <br />
        <div className=" h-64 h-24 bg-blue-600 rounded-lg text-center h-screen">
          H-Screen
        </div>
        <br />
        <div className=" flex space-x-8 ">
          <div className="h-8 bg-blue-700 rounded-full w-8 "></div>
          <h1>h-8</h1>

          <div className="h-12 bg-lime-400 rounded-full w-12 "></div>
          <h1>h-12</h1>

          <div className="h-16 bg-slate-700 rounded-full w-16 "></div>
          <h1>h-16</h1>

          <div className="h-24 bg-amber-700 rounded-full w-24 "></div>
          <h1>h-24</h1>
        </div>
      </div>
    </>
  );
}

export default Sizing;
