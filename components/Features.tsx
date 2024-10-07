import { Shield, Coins, Key } from "lucide-react";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          Why Choose roomie.sol?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 dark:text-purple-400" />
            }
            title="Secure Transactions"
            description="All bookings are secured by Solana blockchain technology, ensuring unparalleled safety and transparency."
          />
          <FeatureCard
            icon={
              <Coins className="h-10 w-10 sm:h-12 sm:w-12 text-indigo-600 dark:text-indigo-400" />
            }
            title="Crypto Payments"
            description="Pay for your stay using Solana or other supported cryptocurrencies, embracing the future of finance."
          />
          <FeatureCard
            icon={
              <Key className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 dark:text-purple-400" />
            }
            title="Smart Contracts"
            description="Experience an automated and trustless booking process through cutting-edge smart contracts."
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-purple-50 dark:bg-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
      {icon}
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">
        {description}
      </p>
    </div>
  );
}
