import React from "react";
import Logo from "../assets/images/logo.png";
import Header from "../components/Header";

function Layout() {
  return (
    <>
      <Header />
      <h1 className="text-center font-mono text-4xl">LAYOUT</h1>
      <br />
      <br />
      <div className=" ">
        <div className="container flex  ">
          <div className="w-24 h24 bg-red-600  border-white rounded-lg">01</div>
          <div className="w-24 h24 bg-red-600  border-white rounded-lg">02</div>
          <div className="w-24 h24 bg-red-600  border-white rounded-lg">03</div>
          <div className="w-24 h24 bg-red-600  border-white rounded-lg">04</div>
          <div className="w-24 h24 bg-red-600  border-white rounded-lg">05</div>
        </div>
      </div>

      <section className="flex">
        <div className="p-8">
          <div className=" relative w-64 h-64 p-8 bg-red-500 rounded-lg">
            <div className=" absolute w-24 h-24 bg-green-500 rounded-lg"></div>
          </div>
        </div>
        <div className="p-8">
          <div className=" static w-64 h-64 p-8 bg-red-500 rounded-lg">
            <div className=" relative w-24 h-24 bg-green-500 rounded-lg"></div>
          </div>
        </div>
        <div className="p-8">
          <div className=" relative w-64 h-64 p-8 bg-red-500 rounded-lg">
            <div className=" absolute w-24 h-24 bg-green-500 rounded-lg"></div>
          </div>
        </div>
      </section>
      <div className="decoration-slice bg-gradient-to-b from-yellow-400 to-red-500 py-24 -inset-x-10">
        <h1 className="px-96 ">Hello World</h1>
        <br />
      </div>
    </>
  );
}

export default Layout;
