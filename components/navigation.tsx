"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActiveLink = (href: string) => {
    return pathname === href
  }

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="font-bold text-xl text-foreground">Kinetic</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActiveLink("/") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/members"
              className={`transition-colors ${
                isActiveLink("/members") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Members
            </Link>
            <Link
              href="/messages"
              className={`transition-colors ${
                isActiveLink("/messages") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Messages
            </Link>
            <Link
              href="/collaborations"
              className={`transition-colors ${
                isActiveLink("/collaborations") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Collaborations
            </Link>
            <Link
              href="/gallery"
              className={`transition-colors ${
                isActiveLink("/gallery") ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }`}
            >
              Gallery
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              <Link
                href="/"
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink("/") ? "text-primary font-medium bg-primary/10" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/members"
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink("/members")
                    ? "text-primary font-medium bg-primary/10"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Members
              </Link>
              <Link
                href="/messages"
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink("/messages")
                    ? "text-primary font-medium bg-primary/10"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Messages
              </Link>
              <Link
                href="/collaborations"
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink("/collaborations")
                    ? "text-primary font-medium bg-primary/10"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Collaborations
              </Link>
              <Link
                href="/gallery"
                className={`block px-3 py-2 transition-colors ${
                  isActiveLink("/gallery")
                    ? "text-primary font-medium bg-primary/10"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
