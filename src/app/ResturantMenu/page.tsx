"use client";

import Navbar from "../components/Navbar";
import DetailsHeader from "../details/components.tsx/DetailsHeader";
import ResturantNavbar from "../details/components.tsx/ResturantNavbar";
import Menu from "./components/Menu";
import MenuCard from "./components/MenuCard";

export default function ResturantMenu() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR */} {/* HEADER */}
        <DetailsHeader />
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <ResturantNavbar />
            {/* RESAURANT NAVBAR */} {/* MENU */}
            <Menu />
            {/* MENU */}
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
