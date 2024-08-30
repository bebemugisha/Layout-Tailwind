import React from "react";
import Header from "../components/Header";

function Spacing() {
  return (
    <>
      <Header />

      <div>
        <h1 className="text-center font-mono text-4xl ">SPACING </h1>

        <p className="m-8  text-2xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing Ipsum, aut Neque
          laborum modi vel deserunt autem, voluptatibus nobis adipiscialiquid, a
          aspernatur perferendis sapiente enim non harum!
          <br />
          Eos, eum dolore.
        </p>
      </div>
      <div className="flex space-x-10 px-48  m-24">
        <div className="pt-6 bg-red-500 rounded-lg w-24 h-24 ">pt-6</div>
        <div className="pr-4 bg-green-500 rounded-lg w-24 h-24 ">pr-4</div>
        <div className="pb-8 bg-slate-500 rounded-lg w-24 h-24 ">pb-8</div>
        <div className="pl-8  bg-amber-500 rounded-lg w-24 h-24 ">pl-2</div>
      </div>
    </>
  );
}

export default Spacing;
