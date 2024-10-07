"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, ChevronDown, MapPin, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Navbar from "./UserNav";
import { FilterContent } from "./FilterContent";
import img from "@/app/rooms/img.png";

const events = [
  {
    id: 1,
    title: "Parker Guest House",
    description:
      "Relaxed rooms in a refined guesthouse with free breakfast & afternoon wine, plus a genteel lounge",
    date: "9/4/2024",
    location: "520 Church St, San Francisco, CA 94114",
    price: 150.0,
    rating: 4.8,
    image: img,
  },
  {
    id: 2,
    title: "Seaside Resort",
    description:
      "Luxurious beachfront resort with stunning ocean views, spa facilities, and gourmet dining options",
    date: "7/15/2024",
    location: "1234 Coastal Highway, Malibu, CA 90265",
    price: 350.0,
    rating: 4.9,
    image: img,
  },
  {
    id: 3,
    title: "Mountain Retreat Lodge",
    description:
      "Cozy mountain lodge with rustic charm, offering hiking trails, ski-in/ski-out access, and a fireplace lounge",
    date: "12/1/2024",
    location: "789 Pine Ridge Road, Aspen, CO 81611",
    price: 280.0,
    rating: 4.7,
    image: img,
  },
];

export default function RoomListing() {
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 xl:w-1/5">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <Collapsible
                open={isFilterOpen}
                onOpenChange={setIsFilterOpen}
                className="lg:hidden mb-4"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex justify-between w-full"
                  >
                    Filters
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isFilterOpen ? "transform rotate-180" : ""}`}
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <FilterContent
                    verifiedOnly={verifiedOnly}
                    setVerifiedOnly={setVerifiedOnly}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    endDate={endDate}
                    setEndDate={setEndDate}
                  />
                </CollapsibleContent>
              </Collapsible>
              <div className="hidden lg:block">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <FilterContent
                  verifiedOnly={verifiedOnly}
                  setVerifiedOnly={setVerifiedOnly}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  startDate={startDate}
                  setStartDate={setStartDate}
                  endDate={endDate}
                  setEndDate={setEndDate}
                />
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <h1 className="text-3xl font-bold mb-6">Available Rooms</h1>
            <div className="space-y-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                      <Image
                        src={event.image}
                        alt={event.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h2 className="text-2xl font-bold">{event.title}</h2>
                          <div className="flex items-center bg-purple-100 text-purple-800 rounded-full px-2 py-1">
                            <Star className="w-4 h-4 mr-1 fill-current" />
                            <span className="text-sm font-semibold">
                              {event.rating}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                            Available from {event.date}
                          </p>
                          <p className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                            {event.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        <div className="text-2xl font-bold text-purple-600">
                          ${event.price.toFixed(2)}{" "}
                          <span className="text-sm font-normal text-gray-600">
                            per night
                          </span>
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline">View Details</Button>
                          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
