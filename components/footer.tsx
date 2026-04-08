import Link from "next/link"

const navigation = {
  services: [
    { name: "Residential", href: "/services#residential" },
    { name: "Commercial", href: "/services#commercial" },
    { name: "Construction", href: "/services#construction" },
    { name: "Demolition", href: "/services#demolition" },
  ],
  sizes: [
    { name: "10 Yard", href: "/#sizes" },
    { name: "20 Yard", href: "/#sizes" },
    { name: "30 Yard", href: "/#sizes" },
    { name: "40 Yard", href: "/#sizes" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Blog", href: "/blog" },
    { name: "Tulsa, OK", href: "/locations/tulsa" },
    { name: "FAQ", href: "/contact#faq" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">D</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Dumpster Direct
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              Professional dumpster rental services for all your construction, 
              renovation, and cleanup needs. Fast delivery, competitive pricing.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dumpster Direct Services.<br />
              All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Dumpster Sizes</h3>
            <ul className="space-y-3">
              {navigation.sizes.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-foreground mt-6 mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
