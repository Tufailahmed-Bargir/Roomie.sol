import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              Book Your Dream Stay with Crypto
            </h1>
            <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
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
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-1" />
              4.9 Star Rating
            </span>
            <span className="hidden sm:inline">•</span>
            <span>10,000+ Bookings</span>
            <span className="hidden sm:inline">•</span>
            <span>100+ Locations</span>
          </div>
        </div>
      </div>
    </section>
  )
}