
import React from "react";
import Navbar from "@/components/Navbar";
import BrandKit from "@/components/BrandKit";
import Footer from "@/components/Footer";

export default function BrandKitPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BrandKit />
      </main>
      <Footer />
    </div>
  );
}
