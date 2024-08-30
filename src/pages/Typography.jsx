import React from "react";
import Header from "../components/Header";

function Typography() {
  return (
    <>
      <Header />
      <div>
        <h1 className="text-center font-mono text-4xl underline">TYPOGRAPHY</h1>
        <br />
        <h1 className="text-center font-mono text-4xl">Font Family</h1>
        <br />
        <div className="m-8 bg-yellow-400 rounded-lg">
          <p className="font-sans ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
          <br />

          <p className=" font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
          <br />

          <p className="font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
        </div>
        <br />
        <h1 className="text-center font-mono text-4xl">Font Size</h1>

        <div className="m-8 bg-slate-400 rounded-lg">
          <p class="text-xs text-yellow-400">The First Paragraph </p>
          <p class="text-sm text-black">The First Paragraph</p>
          <p class="text-base text-slate-700 ">The First Paragraph </p>
          <p class="text-lg text-gray-700">The First Paragraph</p>
          <p class="text-xl text-green-400">The First Paragraph</p>
          <p class="text-2xl text-red-400">The First Paragraph </p>
          <p class="text-3xl text-orange-400 ">The First Paragraph </p>
          <p class="text-4xl text-neutral-700">The First Paragraph</p>
          <p class="text-5xl text-amber-400 ">The First Paragraph </p>
          <p class="text-6xl text-teal-400">The First Paragraph </p>
          <p class="text-7xl text-lime-400">The First Paragraph </p>
          <p class="text-8xl text-cyan-400">The First Paragraph</p>
          <p class="text-9xl text-sky-400">The First Paragraph </p>
        </div>
        <br />
        <h1 className="text-center font-mono text-4xl">Font STYLE</h1>
        <br />
        <div className="bg-blue-300 rounded-lg">
          <p class="italic m-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>

          <p class="non-italic m-8 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
        </div>

        <h1 className="text-center font-mono text-4xl">Font WEIGHT</h1>
        <br />
        <div className="bg-cyan-500 rounded-lg ">
          <p className="m-8 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>

          <p className="m-8 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>

          <p className="m-8 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>

          <p className="m-8 font-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>

          <p className="m-8 font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>

          <br />
        </div>
        <h1 className="text-center font-mono text-4xl rounded-lg">
          Font Variant Numeric
        </h1>

        <div className="flex m-8  space-x-4 bg-blue-500">
          <p className="ordinal w-8 h-8 bg-blue-500 rounded-full">1st</p>
          <br />
          <p className="slashed-zero  w-8 h-8 bg-blue-500 rounded-full">0</p>
          <br />
          <p className="lining-nums  w-24 h-24 bg-blue-500 rounded-lg">
            1234567890
          </p>
          <br />
          <p className="oldstyle-nums  w-22 h-22 bg-blue-500 rounded-xl">
            1234567890
          </p>
          <br />
          <p className="proportional-nums  w-12 h-12 bg-blue-500 rounded-2xl">
            12121
          </p>
          <br />
          <p className="tabular-nums  w-12 h-12 bg-blue-500 rounded-lg">
            90909
          </p>
          <br />
          <p className="diagonal-fractions  w-24 h-24 bg-blue-500 rounded-lg">
            <br />
            1/2 3/4 5/6
          </p>
        </div>

        <h1 className="text-center font-mono text-4xl rounded-lg">
          LETTER SPACING
        </h1>

        <div className="m-8 flex space-x-4 font-mono bg-lime-500">
          <p class="tracking-tighter text-lg">The Second Paragraph</p>
          <p class="tracking-tight text-lg ">The Second Paragraph</p>
          <p class="tracking-normal text-lg ">The Second Paragraph</p>
          <p class="tracking-wide  text-lg">The Second Paragraph</p>
          <p class="tracking-wider text-lg ">The Second Paragraph</p>
          <p class="tracking-widest text-lg ">The Second Paragraph</p>
        </div>

        <h1 className="text-center font-mono text-4xl">LINE HEIGHT</h1>

        <div className="bg-pink-500 rounded-lg">
          <p className="m-8 leading-none font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
          <p className="m-8  leading-tight font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
          <p className="m-8  leading-snug font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
          <p className="m-8  leading-normal font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
          <p className="m-8  leading-relaxed font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
          <p className="m-8  leading-loose  font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
            doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
          </p>
        </div>
        <h1 className="text-center font-mono text-4xl">LIST STYLE TYPE</h1>

        <div className="bg-rose-400 rounded-lg">
          <ul className="m-8  list-disc font-mono ">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsum, ab ullam nisi ducimus esse, dolorum totam id
              beatae veritatis doloribus? Enim, sint molestias eum saepe quas
              eaque minus sequi.
            </li>
          </ul>
          <ul className="m-8  list-decimal font-mono ">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsum, ab ullam nisi ducimus esse, dolorum totam id
              beatae veritatis doloribus? Enim, sint molestias eum saepe quas
              eaque minus sequi.
            </li>
          </ul>
          <ul className="m-8  list-none font-mono ">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsum, ab ullam nisi ducimus esse, dolorum totam id
              beatae veritatis doloribus? Enim, sint molestias eum saepe quas
              eaque minus sequi.
            </li>
          </ul>
        </div>
        <h1 className="text-center font-mono text-4xl">LIST STYLE POSITION</h1>
        <div className="bg-blue-400 rounded-lg">
          <ul className="m-8   list-disc list-inside bg-rose-400 font-mono ">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsum, ab ullam nisi ducimus esse, dolorum totam id
              beatae veritatis doloribus? Enim, sint molestias eum saepe quas
              eaque minus sequi.
            </li>
          </ul>
          <ul className="m-8 list-disc list-outside bg-rose-400 font-mono ">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsum, ab ullam nisi ducimus esse, dolorum totam id
              beatae veritatis doloribus? Enim, sint molestias eum saepe quas
              eaque minus sequi.
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-center font-mono text-4xl">PLACEHOLDER COLOR</h1>
          <div className="m-8 space-y-4 text-center">
            <input
              className="placeholder-pink-500 "
              placeholder="bebe@example.com"
            />
            <input
              className="placeholder-green-500"
              placeholder="leilla@example.com"
            />
          </div>
        </div>
        <h1 className="text-center font-mono text-4xl">PLACEHOLDER OPACITY</h1>

        <div className="m-8 text-center space-x-4 ">
          <input
            className="placeholder-pink-500 placeholder-opacity-100 "
            placeholder="bebe@example.com"
          />
          <input
            className="placeholder-green-500 placeholder-opacity-50"
            placeholder="leilla@example.com"
          />
          <input
            className="placeholder-slate-500 placeholder-opacity-15 "
            placeholder="bebe@example.com"
          />
          <input
            className="placeholder-red-600 placeholder-opacity-5"
            placeholder="leilla@example.com"
          />
        </div>
      </div>
      <h1 className="text-center font-mono text-4xl">TEXT ALIGNMENT</h1>
      <br />

      <div className="font-mono bg-slate-500 rounded-lg">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
          doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
        </p>
        <br />
        <p className="text-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
          doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
        </p>
        <br />
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
          doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
        </p>
        <br />
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
          doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
        </p>
      </div>
      <br />

      <h1 className="text-center font-mono text-4xl">TEXT COLOR</h1>
      <br />
      <div className="m-8 leading-relaxed font-mono bg-slate-500 rounded-lg">
        <p className="text-sky-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
          doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
        </p>
        <p className="text-sky-500 opacity-30">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ipsum, ab ullam nisi ducimus esse, dolorum totam id beatae veritatis
          doloribus? Enim, sint molestias eum saepe quas eaque minus sequi.
        </p>
      </div>
    </>
  );
}

export default Typography;
