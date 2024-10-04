'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wallet, Search, Calendar, Key, Shield, Coins, Star, ChevronRight } from "lucide-react"
import Link from "next/link"

export  default function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      <header className="px-4 lg:px-6 h-20 flex items-center backdrop-blur-md bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Wallet className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          <span className="ml-2 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            roomie.sol
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="/rooms">
            Rooms
          </Link>
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Connect Wallet
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                  Book Your Dream Stay with Crypto
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 dark:text-gray-300 md:text-xl">
                  Experience the future of travel with roomie.sol. Secure, fast, and decentralized room bookings powered by Solana.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <form className="flex space-x-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-xl">
                  <Input className="flex-1 rounded-full border-none bg-transparent" placeholder="Where do you want to stay?" type="text" />
                  <Button type="submit" className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  4.9 Star Rating
                </span>
                <span>•</span>
                <span>10,000+ Bookings</span>
                <span>•</span>
                <span>100+ Locations</span>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              Why Choose roomie.sol?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 p-6 bg-purple-50 dark:bg-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <Shield className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Secure Transactions</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  All bookings are secured by Solana blockchain technology, ensuring unparalleled safety and transparency.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-indigo-50 dark:bg-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <Coins className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Crypto Payments</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Pay for your stay using Solana or other supported cryptocurrencies, embracing the future of finance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-purple-50 dark:bg-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                <Key className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Smart Contracts</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Experience an automated and trustless booking process through cutting-edge smart contracts.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Connect Your Wallet</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Link your Solana wallet securely to start browsing and booking rooms with ease.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Choose Your Room</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Browse our curated selection of rooms and select the perfect one for your stay.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Confirm and Pay</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Confirm your booking and pay securely with Solana or other supported cryptocurrencies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white mb-6">
              Ready to Experience the Future of Travel?
            </h2>
            <p className="mx-auto max-w-[700px] text-lg text-purple-100 mb-8">
              Join thousands of satisfied travelers who have embraced the ease and security of booking with roomie.sol.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-purple-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg py-6 px-10">
              Get Started Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white dark:bg-gray-800 shadow-inner">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <Wallet className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                roomie.sol
              </span>
            </div>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#">
                FAQ
              </Link>
            </nav>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © 2024 roomie.sol. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}