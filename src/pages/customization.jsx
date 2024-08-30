import React from "react";
import Header from "../components/Header";

function customization() {
  return (
    //about screen, plugins, preset,color,spacing,content
    <>
      <Header />

      <h1 className="text-center font-mono text-4xl">CUSTOMIZATION</h1>
      <br />
      <br />

      <div>
        <p className="text-xs sm:text-base md:text-lg lg:text-3xl">
          Hello long Sentence
        </p>

        <div>
          <p className="mb-1">Hello long sentence</p>
          <p>Another long sentence</p>
        </div>
      </div>
    </>
  );
}

export default customization;
