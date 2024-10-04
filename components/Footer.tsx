import { Wallet } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full py-6 bg-white dark:bg-gray-800 shadow-inner">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Wallet className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
            <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
              roomie.sol
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link className="text-xs sm:text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs sm:text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-xs sm:text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#">
              FAQ
            </Link>
          </nav>
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © 2024 roomie.sol. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}