'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Calendar, MapPin, User } from 'lucide-react'
import img from './img.png'
import Image from 'next/image'
// Mock data for events
const events = [
  {
    id: 1,
    title: "Parker Guest House",
    performer: "Relaxed rooms in a refined guesthouse with free breakfast & afternoon wine, plus a genteel lounge",
    date: "9/4/2024",
    location: "520 Church St, San Francisco, CA 94114",
    price: 10.00,
    image: img
  },
  {
    id: 1,
    title: "Parker Guest House",
    performer: "Relaxed rooms in a refined guesthouse with free breakfast & afternoon wine, plus a genteel lounge",
    date: "9/4/2024",
    location: "520 Church St, San Francisco, CA 94114",
    price: 10.00,
    image: img
  },
  {
    id: 1,
    title: "Parker Guest House",
    performer: "Relaxed rooms in a refined guesthouse with free breakfast & afternoon wine, plus a genteel lounge",
    date: "9/4/2024",
    location: "520 Church St, San Francisco, CA 94114",
    price: 10.00,
    image: img
  },
]

export default function EventListingPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 })
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.performer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white p-6 border-r">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Verified only</span>
            <Switch checked={verifiedOnly} onCheckedChange={setVerifiedOnly} />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Price Range</h3>
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                placeholder="0"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                className="w-20"
              />
              <span>-</span>
              <Input
                type="number"
                placeholder="5000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                className="w-20"
              />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-2">Dates</h3>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mb-2"
            />
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">Apply</Button>
            <Button variant="outline" className="flex-1">Reset</Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Input
            type="text"
            placeholder="Search by event title or seller"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Search</Button>
        </div>

        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="flex flex-col md:flex-row overflow-hidden">
              <div className="w-full md:w-1/3">
                <Image src={img} alt={event.title} className="w-full h-48 object-cover" />
              </div>
              <CardContent className="flex-1 p-6">
                <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {event.performer}
                  </p>
                  <p className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </p>
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col justify-between p-6 bg-gray-50">
                <div className="text-2xl font-bold mb-4">${event.price.toFixed(2)}</div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">View Event</Button>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Buy</Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}