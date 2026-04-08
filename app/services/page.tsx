import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Home,
  Building2,
  HardHat,
  Hammer,
  Leaf,
  Recycle,
  Check,
  ArrowRight,
  Phone,
} from "lucide-react"

export const metadata = {
  title: "Our Services | Dumpster Direct Services",
  description:
    "Explore our comprehensive dumpster rental services for residential, commercial, construction, and demolition projects. Fast delivery and competitive pricing.",
}

const services = [
  {
    icon: Home,
    title: "Residential Dumpster Rental",
    slug: "residential",
    description:
      "Perfect for home cleanouts, renovations, and landscaping projects. Our residential dumpsters fit conveniently in your driveway.",
    image: "/images/residential-service.jpg",
    features: [
      "Driveway-friendly sizes",
      "Flexible rental periods",
      "Clean and well-maintained dumpsters",
      "Quick delivery and pickup",
      "No hidden fees",
    ],
    idealFor: [
      "Home renovations",
      "Garage cleanouts",
      "Moving and decluttering",
      "Estate cleanouts",
      "Landscaping projects",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Dumpster Rental",
    slug: "commercial",
    description:
      "Reliable waste management solutions for businesses, retail locations, and commercial properties. Keep your operations running smoothly.",
    image: "/images/commercial-service.jpg",
    features: [
      "Multiple size options",
      "Scheduled pickups available",
      "Volume discounts",
      "Dedicated account manager",
      "24/7 customer support",
    ],
    idealFor: [
      "Retail renovations",
      "Office cleanouts",
      "Restaurant remodels",
      "Property management",
      "Warehouse cleanups",
    ],
  },
  {
    icon: HardHat,
    title: "Construction Dumpster Rental",
    slug: "construction",
    description:
      "Heavy-duty dumpsters designed to handle construction debris. From new builds to major renovations, we have you covered.",
    image: "/images/delivery-service.jpg",
    features: [
      "High weight capacity",
      "Reinforced construction",
      "On-site delivery",
      "Flexible scheduling",
      "Debris-specific options",
    ],
    idealFor: [
      "New construction",
      "Major renovations",
      "Roofing projects",
      "Concrete and masonry",
      "Site preparation",
    ],
  },
  {
    icon: Hammer,
    title: "Demolition Dumpster Rental",
    slug: "demolition",
    description:
      "Large capacity dumpsters for demolition projects. Handle heavy materials like concrete, brick, and structural debris.",
    image: "/images/services-hero.jpg",
    features: [
      "Extra-large capacity",
      "Heavy material approved",
      "Reinforced steel construction",
      "Extended rental periods",
      "Specialized disposal",
    ],
    idealFor: [
      "Building demolition",
      "Interior tear-outs",
      "Deck and patio removal",
      "Foundation work",
      "Large-scale cleanups",
    ],
  },
]

const additionalServices = [
  {
    icon: Leaf,
    title: "Yard Waste Removal",
    description:
      "Specialized dumpsters for landscaping debris, brush, branches, and organic waste from your outdoor projects.",
  },
  {
    icon: Recycle,
    title: "Recycling Services",
    description:
      "Eco-friendly disposal options with dedicated recycling for metal, concrete, and other recyclable materials.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0">
            <Image
              src="/images/services-hero.jpg"
              alt="Dumpster rental services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-background/90" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Our Services
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance mb-6">
                Comprehensive waste management solutions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From small home cleanouts to large-scale demolition projects, Dumpster
                Direct Services provides reliable, affordable dumpster rentals tailored
                to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/#contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:1-800-555-DUMP">
                    <Phone className="mr-2 h-5 w-5" />
                    1-800-555-DUMP
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-24 lg:py-32 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance mb-4">
                Dumpster rental services for every project
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose from our range of specialized services designed to meet the
                unique demands of your project.
              </p>
            </div>

            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary">
                        <service.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          Ideal For
                        </h4>
                        <ul className="space-y-3">
                          {service.idealFor.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button asChild>
                      <Link href="/#sizes">
                        View Dumpster Sizes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Specialized Solutions
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
                Additional services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {additionalServices.map((service) => (
                <div
                  key={service.title}
                  className="flex gap-6 p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
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

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-foreground text-balance mb-4">
              Ready to get started?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Contact us today for a free quote. Our team is ready to help you find
              the perfect dumpster solution for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="tel:1-800-555-DUMP">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
