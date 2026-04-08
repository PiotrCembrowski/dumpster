import Link from "next/link";

const navigation = {
  services: [
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">
                  P
                </span>
              </div>

              <div>
                <span className="text-lg font-semibold tracking-tight text-foreground block">
                  PrecisionLine
                </span>
                <span className="text-xs text-muted-foreground">
                  Parking Lot Striping
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Professional parking lot striping, ADA compliance markings, fire
              lane striping, and pavement marking services for commercial
              properties.
            </p>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PrecisionLine Striping
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Striping Services
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

          {/* Cities */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Service Areas
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
            PrecisionLine provides professional parking lot striping, ADA
            compliance striping, fire lane striping, and commercial pavement
            markings for businesses across Tulsa, Albuquerque, Omaha, Boise, and
            Wichita.
          </p>
        </div>
      </div>
    </footer>
  );
}
