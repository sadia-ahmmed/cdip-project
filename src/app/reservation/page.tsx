"use client";

import Navbar from "../components/Navbar";
import ReservationHeader from "./components/ReservationHeader";
import Form from "./components/Form";

export default function Reservation() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <Navbar />
        {/* NAVBAR END */}
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* HEADER */}
            <ReservationHeader />
            {/* HEADER */} {/* FORM */}
            <Form />
          </div>
        </div>
      </main>
    </main>
  );
}
