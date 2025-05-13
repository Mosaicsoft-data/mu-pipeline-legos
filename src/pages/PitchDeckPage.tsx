
import React from "react";
import SlideDeck from "@/components/SlideDeck";

export default function PitchDeckPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mu-Pipelines Pitch Deck</h1>
        <div className="relative">
          <SlideDeck />
        </div>
      </div>
    </div>
  );
}
