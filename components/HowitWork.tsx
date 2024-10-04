export function HowItWorksSection() {
    return (
      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              title="Connect Your Wallet"
              description="Link your Solana wallet securely to start browsing and booking rooms with ease."
            />
            <StepCard
              number={2}
              title="Choose Your Room"
              description="Browse our curated selection of rooms and select the perfect one for your stay."
            />
            <StepCard
              number={3}
              title="Confirm and Pay"
              description="Confirm your booking and pay securely with Solana or other supported cryptocurrencies."
            />
          </div>
        </div>
      </section>
    )
  }
  
  interface StepCardProps {
    number: number
    title: string
    description: string
  }
  
  function StepCard({ number, title, description }: StepCardProps) {
    return (
      <div className="flex flex-col items-center space-y-4">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl sm:text-2xl font-bold">
          {number}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">{description}</p>
      </div>
    )
  }