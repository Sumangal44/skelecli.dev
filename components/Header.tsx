"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal } from "lucide-react"
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
        <Terminal className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg md:text-xl">SkeleCLI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/portfolio">Home</Link>
          <Link href="/services">Feaatures</Link>
          <Link href="/about">Docs</Link>
          <Link href="/contact">Changelog</Link>
          <Link href="/skills">Contribute</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden border-t">
          <Link href="/portfolio" className="block px-4 py-2 hover:bg-accent">
            Home
          </Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-accent">
            Features
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-accent">
            Docs
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-accent">
            Changelog
          </Link>
          <Link href="/skills" className="block px-4 py-2 hover:bg-accent">
            Contribute
          </Link>
        </nav>
      )}
    </header>
  );
}
