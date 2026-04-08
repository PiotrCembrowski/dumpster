import Image from "next/image"
import { Home, Building2, Truck } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "Perfect for home renovations, cleanouts, and landscaping projects. We make waste removal easy for homeowners.",
    image: "/images/residential-service.jpg",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Reliable waste management solutions for construction sites, retail locations, and commercial properties.",
    image: "/images/commercial-service.jpg",
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Need a dumpster fast? We offer same-day delivery and pickup services to keep your project on schedule.",
    image: "/images/delivery-service.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            A comprehensive approach for every project
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-background hover:border-primary/50 transition-colors"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40" />
                <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">0{index + 1}</span>
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
      </div>
    </section>
  )
}
