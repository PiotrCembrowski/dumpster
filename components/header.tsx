"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">D</span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Dumpster Direct
            </span>
          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/#sizes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dumpster Sizes
            </Link>
            <Link href="/#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <a href="tel:1-800-555-DUMP" className="flex items-center gap-2 text-sm text-primary">
              <Phone className="h-4 w-4" />
              <span className="font-medium">1-800-555-DUMP</span>
            </a>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link href="/services" className="block text-sm text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <Link href="/#sizes" className="block text-sm text-muted-foreground hover:text-foreground">
              Dumpster Sizes
            </Link>
            <Link href="/#process" className="block text-sm text-muted-foreground hover:text-foreground">
              How It Works
            </Link>
            <Link href="/blog" className="block text-sm text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <div className="pt-3 border-t border-border">
              <a href="tel:1-800-555-DUMP" className="flex items-center gap-2 text-sm text-primary mb-3">
                <Phone className="h-4 w-4" />
                <span className="font-medium">1-800-555-DUMP</span>
              </a>
              <Button asChild className="w-full">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
