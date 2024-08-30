import React from "react";
import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <>
      <nav className="bg-slate-400">
        <br />
        <br />
        <div className=" p-8 px-2">
          <img className="rounded-full w-24" src={Logo} alt="" />
        </div>
        <ul className="flex px-28 text-white  -space-y-24 font-thin  tracking-wider space-x-4 text-lg ">
          <li className="">
            <a href="/"></a>
          </li>

          <li className=" hover:text-blue-500">
            <a href="/customization">Customization</a>
          </li>

          <li className=" hover:text-blue-500">
            <a href="/layout">Layout</a>
          </li>
          <li className=" hover:text-blue-500">
            <a href="/spacing">Spacing</a>
          </li>
          <li className=" hover:text-blue-500">
            <a href="/Sizing">Sizing</a>
          </li>
          <li className=" hover:text-blue-500">
            <a href="/typography">Typography</a>
          </li>
          <li className=" hover:text-blue-500">
            <a href="/border">Border</a>
          </li>
          <li className=" hover:text-blue-500">
            <a href="/table">Table</a>
          </li>
          <li className=" hover:text-blue-500">
            <a href="/background">Background</a>
          </li>
          <li className=" hover:text-blue-500">
            <a href="/frex">Frex</a>
          </li>
          <li className=" hover:text-blue-500">
            <a href="/transition">Transition</a>
          </li>
          <li className=" hover:text-blue-500">
            <a href="/transform">Transform</a>
          </li>
          <li className=" hover:text-blue-500">
            <a href="/interactivity">Interactivity</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
