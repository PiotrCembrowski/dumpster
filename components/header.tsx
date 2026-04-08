"use client";

import { useState } from "react";
import Link from "next/link";
<<<<<<< HEAD
import { Menu, X, Phone, MapPin } from "lucide-react";
=======
import { Menu, X, Phone } from "lucide-react";
>>>>>>> seo-optimization
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">
<<<<<<< HEAD
                P
              </span>
            </div>

            <div className="leading-tight">
              <span className="block text-lg font-semibold tracking-tight text-foreground">
                PrecisionLine
              </span>
              <span className="text-xs text-muted-foreground">
                Parking Lot Striping
=======
                D
              </span>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Dumpster Direct
              </span>
              <span className="text-xs text-muted-foreground">
                Dumpster Rental Services
>>>>>>> seo-optimization
              </span>
            </div>
          </Link>

<<<<<<< HEAD
          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Striping Services
            </Link>

            <Link
              href="/#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Parking Lot Services
            </Link>

            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Striping Blog
            </Link>

            {/* Cities */}
            <div className="relative group">
              <div className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer">
                <MapPin className="h-4 w-4" />
                Service Areas
              </div>

              <div className="absolute hidden group-hover:block bg-background shadow-lg border rounded-lg mt-2 w-56 p-3 space-y-2">
                <Link
                  href="/tulsa"
                  className="block text-sm hover:text-primary"
                >
                  Tulsa Parking Lot Striping
                </Link>

                <Link
                  href="/albuquerque"
                  className="block text-sm hover:text-primary"
                >
                  Albuquerque Striping
                </Link>

                <Link
                  href="/omaha"
                  className="block text-sm hover:text-primary"
                >
                  Omaha Parking Lot Striping
                </Link>

                <Link
                  href="/boise"
                  className="block text-sm hover:text-primary"
                >
                  Boise Parking Lot Striping
                </Link>

                <Link
                  href="/wichita"
                  className="block text-sm hover:text-primary"
                >
                  Wichita Striping
                </Link>
              </div>
            </div>
=======
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/dumpster-rental"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Dumpster Rental
            </Link>

            <Link
              href="/#sizes"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Dumpster Sizes
            </Link>

            <Link
              href="/#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>

            <Link
              href="/#process"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>

            <Link
              href="/locations"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Locations
            </Link>

            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
>>>>>>> seo-optimization

            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

<<<<<<< HEAD
          {/* Phone + CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 text-sm text-primary"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">(555) 123-4567</span>
            </a>

            <Button asChild>
              <Link href="/contact">Free Quote</Link>
=======
          {/* CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="tel:1-800-555-DUMP"
              className="flex items-center gap-2 text-sm text-primary"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">Call For Dumpster Quote</span>
            </a>

            <Button asChild>
              <Link href="/contact">Get Dumpster Quote</Link>
>>>>>>> seo-optimization
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
<<<<<<< HEAD
            <Link href="/services" className="block text-sm">
              Striping Services
            </Link>

            <Link href="/blog" className="block text-sm">
              Striping Blog
            </Link>

            <div className="pt-3 border-t border-border">
              <div className="text-xs text-muted-foreground mb-2">
                Service Areas
              </div>

              <Link href="/tulsa" className="block text-sm">
                Tulsa
              </Link>

              <Link href="/albuquerque" className="block text-sm">
                Albuquerque
              </Link>

              <Link href="/omaha" className="block text-sm">
                Omaha
              </Link>

              <Link href="/boise" className="block text-sm">
                Boise
              </Link>

              <Link href="/wichita" className="block text-sm">
                Wichita
              </Link>
            </div>

            <div className="pt-3 border-t border-border">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-sm text-primary mb-3"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">(555) 123-4567</span>
              </a>

              <Button asChild className="w-full">
                <Link href="/contact">Free Quote</Link>
=======
            <Link
              href="/dumpster-rental"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              Dumpster Rental
            </Link>

            <Link
              href="/#sizes"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              Dumpster Sizes
            </Link>

            <Link
              href="/#services"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>

            <Link
              href="/#process"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              How It Works
            </Link>

            <Link
              href="/locations"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              Locations
            </Link>

            <Link
              href="/blog"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-border">
              <a
                href="tel:1-800-555-DUMP"
                className="flex items-center gap-2 text-sm text-primary mb-3"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">Call For Dumpster Quote</span>
              </a>

              <Button asChild className="w-full">
                <Link href="/contact">Get Dumpster Quote</Link>
>>>>>>> seo-optimization
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
