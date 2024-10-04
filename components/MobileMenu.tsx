import { Button } from "@/components/ui/button"
import Link from "next/link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="md:hidden bg-white dark:bg-gray-800 p-4 absolute top-20 left-0 right-0 z-40">
      <nav className="flex flex-col gap-4">
        <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#features" onClick={onClose}>
          Features
        </Link>
        <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#how-it-works" onClick={onClose}>
          How It Works
        </Link>
        <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="/rooms" onClick={onClose}>
          Rooms
        </Link>
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
          Connect Wallet
        </Button>
      </nav>
    </div>
  )
}