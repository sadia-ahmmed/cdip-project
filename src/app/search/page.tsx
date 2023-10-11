"use client";
import { useState } from "react";
import Link from "next/link";
import SeearchHeader from "./components/SearchHeader";
import SearchSidebar from "./components/SearchSidebar";
import ResturantCar from "./components/ResturantCar";
import SeearchNavbar from "./components/SearchNavbar";
import { Product, ProductList } from "../ProductList";

export default function Search() {
  return (
    <>
      <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
          {/* NAVBAR */}
          <SeearchNavbar />
          {/* HEADER */}
          <SeearchHeader />
          <div className="flex py-4 m-auto w-2/3 justify-between items-start">
            {/* SEARCH SIDE BAR */}
            <SearchSidebar />
            {/* SEARCH SIDE BAR */}
            <div className="w-5/6">
              {/* RESAURANT CAR */}

              <ResturantCar products={ProductList} />

              {/* RESAURANT CAR */}
            </div>
          </div>
        </main>
      </main>
    </>
  );
}
