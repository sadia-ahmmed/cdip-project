"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ResturantCard from "./components/ResturantCard";

export interface Product {
  productName: string;
  price: number;
  reviewno: number;
  bookingno: number;
  country: string;
  type: string;
}
export interface ProductList {
  products: Product[];
}
export default function Home() {
  const [product, setProduct] = useState<Product[]>([
    {
      productName: "Product A",
      price: 300,
      reviewno: 35,
      bookingno: 4,
      type: "Arabian",
      country: "Edmonton",
    },
    {
      productName: "Product B",
      price: 500,
      reviewno: 13,
      bookingno: 7,
      type: "French",
      country: "British Columbia",
    },
  ]);

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <Header />
          {/* HEADER */}
          {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {/* CARD */}
            <ResturantCard products={product} />
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
