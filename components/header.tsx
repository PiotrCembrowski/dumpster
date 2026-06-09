"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

// ─── FIX: All locations now use correct /dumpster-rental/ URLs ───────────────
// Removed fake placeholder cities (OKC, Houston, Austin, Kansas City)
// that had no pages. Added all 5 new cities built this session.
const locations = [
  { name: "Tulsa, OK", href: "/dumpster-rental/tulsa-ok" },
  { name: "Dallas, TX", href: "/dumpster-rental/dallas" },
  { name: "Bartlesville, OK", href: "/dumpster-rental/bartlesville-ok" },
  { name: "Muskogee, OK", href: "/dumpster-rental/muskogee-ok" },
  { name: "Scottsbluff, NE", href: "/dumpster-rental/scottsbluff-ne" },
  { name: "Pierre, SD", href: "/dumpster-rental/pierre-sd" },
  { name: "Jamestown, ND", href: "/dumpster-rental/jamestown-nd" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ── LOGO ── FIX: Brand name corrected to "Rapid Dumpster Rental" */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">
                R
              </span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Rapid Dumpster Rental
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#sizes"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Dumpster Sizes
            </Link>
            <Link
              href="/#process"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>

            {/* ── LOCATIONS DROPDOWN ── FIX: All 7 real city pages listed */}
            <NavigationMenu.Root className="relative">
              <NavigationMenu.List>
                <NavigationMenu.Item>
                  <NavigationMenu.Trigger className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Locations
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute top-full left-0 mt-2 w-56 rounded-md border border-border bg-card shadow-lg">
                    <ul className="py-2">
                      {locations.map((location) => (
                        <li key={location.href}>
                          <NavigationMenu.Link asChild>
                            <Link
                              href={location.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                            >
                              {location.name}
                            </Link>
                          </NavigationMenu.Link>
                        </li>
                      ))}
                      {/* Link to all locations hub page */}
                      <li className="border-t border-border mt-1 pt-1">
                        <NavigationMenu.Link asChild>
                          <Link
                            href="/locations"
                            className="block px-4 py-2 text-sm font-medium text-primary hover:bg-secondary transition-colors"
                          >
                            View all locations →
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    </ul>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </NavigationMenu.Root>

            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* ── CTA ── FIX: Phone number standardised to (800) 555-3867 */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="tel:+18005553867"
              className="flex items-center gap-2 text-sm text-primary"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">(800) 555-3867</span>
            </a>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* ── MOBILE MENU TOGGLE ── */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/services"
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#sizes"
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dumpster Sizes
            </Link>
            <Link
              href="/#process"
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>

            {/* Mobile locations accordion — FIX: all 7 real cities */}
            <div>
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground"
              >
                Locations
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    locationsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {locationsOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {locations.map((location) => (
                    <Link
                      key={location.href}
                      href={location.href}
                      className="block text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {location.name}
                    </Link>
                  ))}
                  <Link
                    href="/locations"
                    className="block text-sm font-medium text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View all locations →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-border">
              <a
                href="tel:+18005553867"
                className="flex items-center gap-2 text-sm text-primary mb-3"
              >
                <Phone className="h-4 w-4" />
                {/* FIX: Consistent phone number format */}
                <span className="font-medium">(800) 555-3867</span>
              </a>
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
