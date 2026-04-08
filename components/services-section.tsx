import Image from "next/image";
import { Home, Building2, Truck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Dumpster Rental",
    description:
      "Affordable residential dumpster rentals for home cleanouts, remodeling, yard waste, and garage cleanups. Perfect for homeowners needing fast and reliable waste removal.",
    image: "/images/residential-service.jpg",
    alt: "Residential dumpster rental for home renovation and cleanup",
  },
  {
    icon: Building2,
    title: "Commercial & Construction Dumpster Rental",
    description:
      "Reliable roll off dumpster rentals for construction sites, commercial properties, roofing projects, and contractor jobs. Flexible rental periods and fast delivery.",
    image: "/images/commercial-service.jpg",
    alt: "Construction dumpster rental at commercial job site",
  },
  {
    icon: Truck,
    title: "Same-Day Dumpster Delivery",
    description:
      "Need a dumpster fast? We offer same-day dumpster rental and pickup services to keep your construction, renovation, or cleanup project on schedule.",
    image: "/images/delivery-service.jpg",
    alt: "Same day dumpster delivery truck dropping off roll off dumpster",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Dumpster Rental Services
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Dumpster Rental Services for Every Project
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We provide residential, commercial, and construction dumpster
            rentals with fast delivery, flexible rental periods, and affordable
            pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-background hover:border-primary/50 transition-colors"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-background/40" />

                {/* Icon */}
                <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom SEO Text */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            Our roll off dumpster rental services are ideal for residential
            cleanouts, construction projects, demolition jobs, roofing projects,
            and commercial waste removal. We offer multiple dumpster sizes with
            fast delivery and reliable pickup.
          </p>
        </div>
      </div>
    </section>
  );
}
