"use client";

import { ProductList } from "@/app/ProductList";
import DetailsDescription from "../components.tsx/DetailsDescription";
import DetailsHeader from "../components.tsx/DetailsHeader";
import DetailsNavbar from "../components.tsx/DetailsNavbar";
import Ratings from "../components.tsx/Ratings";
import ReservationCard from "../components.tsx/ReservationCard";
import ResturantNavbar from "../components.tsx/ResturantNavbar";
import ReviewCard from "../components.tsx/ReviewCard";

export default function Details(props: ProductList) {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <DetailsNavbar />
        {/* NAVBAR */} {/* HEADER */}
        <DetailsHeader />
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <ResturantNavbar />
            {/* RESAURANT NAVBAR */} {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milesstone Grill</h1>
            </div>
            {/* TITLE */} {/* RATING */}
            <Ratings />
            {/* RATING */} {/* DESCRIPTION */}
            <DetailsDescription />
            {/* DESCRIPTION */} {/* IMAGES */}
            {/* IMAGES */} {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                What 100 people are saying
              </h1>
              <div>
                {/* REVIEW CARD */}
                <ReviewCard />
                {/* REVIEW CARD */}
              </div>
            </div>
            {/* REVIEWS */}
          </div>
          <ReservationCard />
        </div>
        {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */}{" "}
        {/* RESERVATION
    CARD PORTION */}
      </main>
    </main>
  );
}
