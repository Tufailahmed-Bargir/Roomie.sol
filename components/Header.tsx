"use client";

import { Button } from "@/components/ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet, Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  const session = useSession();
  return (
    <header className="px-4 lg:px-6 h-20 flex items-center justify-between backdrop-blur-md bg-white/30 dark:bg-gray-800/30 sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="#">
        <Wallet className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" />
        <span className="ml-2 text-xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
          roomie.sol
        </span>
      </Link>
      <nav className="hidden items-center md:flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          href="#how-it-works"
        >
          How It Works
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          href="/rooms"
        >
          Rooms
        </Link>
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700  transition-all duration-300 shadow-lg hover:shadow-xl">
          <WalletMultiButton style={{ borderRadius: "10px" }} />
        </span>
        {session?.data ? (
          <Button onClick={() => signOut()}>Logout</Button>
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </nav>
      <Button
        className="md:hidden"
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
    </header>
  );
}
