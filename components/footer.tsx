import Link from "next/link";

const navigation = {
  services: [
<<<<<<< HEAD
    { name: "Parking Lot Striping", href: "/parking-lot-striping" },
    { name: "ADA Compliance Striping", href: "/ada-striping" },
    { name: "Fire Lane Striping", href: "/fire-lane-striping" },
    { name: "Warehouse Striping", href: "/warehouse-striping" },
  ],
  cities: [
    { name: "Tulsa Parking Lot Striping", href: "/tulsa" },
    { name: "Albuquerque Striping", href: "/albuquerque" },
    { name: "Omaha Parking Lot Striping", href: "/omaha" },
    { name: "Boise Parking Lot Striping", href: "/boise" },
    { name: "Wichita Striping", href: "/wichita" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Free Quote", href: "/contact" },
=======
    { name: "Residential Dumpster Rental", href: "/services#residential" },
    { name: "Commercial Dumpster Rental", href: "/services#commercial" },
    { name: "Construction Dumpster Rental", href: "/services#construction" },
    { name: "Demolition Dumpster Rental", href: "/services#demolition" },
  ],
  sizes: [
    { name: "10 Yard Dumpster Rental", href: "/#sizes" },
    { name: "20 Yard Dumpster Rental", href: "/#sizes" },
    { name: "30 Yard Dumpster Rental", href: "/#sizes" },
    { name: "40 Yard Dumpster Rental", href: "/#sizes" },
  ],
  locations: [
    { name: "Tulsa Dumpster Rental", href: "/locations/tulsa" },
    { name: "Omaha Dumpster Rental", href: "/locations/omaha" },
    { name: "Boise Dumpster Rental", href: "/locations/boise" },
    { name: "Wichita Dumpster Rental", href: "/locations/wichita" },
  ],
  company: [
    { name: "About Dumpster Direct", href: "/about" },
    { name: "Dumpster Rental Blog", href: "/blog" },
    { name: "FAQ", href: "/contact#faq" },
    { name: "Contact", href: "/contact" },
    { name: "Get Free Quote", href: "/contact" },
>>>>>>> seo-optimization
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<<<<<<< HEAD
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
=======
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
>>>>>>> seo-optimization
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">
<<<<<<< HEAD
                  P
=======
                  D
>>>>>>> seo-optimization
                </span>
              </div>

              <div>
                <span className="text-lg font-semibold tracking-tight text-foreground block">
<<<<<<< HEAD
                  PrecisionLine
                </span>
                <span className="text-xs text-muted-foreground">
                  Parking Lot Striping
=======
                  Dumpster Direct
                </span>
                <span className="text-xs text-muted-foreground">
                  Dumpster Rental Services
>>>>>>> seo-optimization
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
<<<<<<< HEAD
              Professional parking lot striping, ADA compliance markings, fire
              lane striping, and pavement marking services for commercial
              properties.
            </p>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PrecisionLine Striping
=======
              Fast and reliable dumpster rental services for residential,
              commercial, and construction projects. Same-day dumpster delivery
              available in multiple cities.
            </p>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dumpster Direct Services
>>>>>>> seo-optimization
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
<<<<<<< HEAD
              Striping Services
=======
              Dumpster Services
>>>>>>> seo-optimization
            </h3>

            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Cities */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Service Areas
=======
          {/* Sizes */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Dumpster Sizes
>>>>>>> seo-optimization
            </h3>

            <ul className="space-y-3">
              {navigation.cities.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Company
=======
          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Service Areas
>>>>>>> seo-optimization
            </h3>

            <ul className="space-y-3">
              {navigation.locations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
=======
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h3>

            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
>>>>>>> seo-optimization

            <h3 className="text-sm font-semibold text-foreground mt-6 mb-4">
              Legal
            </h3>

            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom SEO Text */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
<<<<<<< HEAD
            PrecisionLine provides professional parking lot striping, ADA
            compliance striping, fire lane striping, and commercial pavement
            markings for businesses across Tulsa, Albuquerque, Omaha, Boise, and
            Wichita.
=======
            Dumpster Direct provides residential dumpster rental, construction
            dumpster rental, commercial dumpsters, and same-day dumpster
            delivery in Tulsa, Omaha, Boise, Wichita, and surrounding areas.
>>>>>>> seo-optimization
          </p>
        </div>
      </div>
    </footer>
  );
}
