import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-6">
          Ready to Experience the Future of Travel?
        </h2>
        <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-purple-100 mb-8">
          Join thousands of satisfied travelers who have embraced the ease and security of booking with roomie.sol.
        </p>
        <Button className="bg-white text-purple-600 hover:bg-purple-100 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg py-4 sm:py-6 px-6 sm:px-10">
          Get Started Now
          <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </section>
  )
}