"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Clock,
  Truck,
  Check,
  ArrowRight,
  Home,
  Building2,
  HardHat,
  Hammer,
  Star,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Residential Dumpster Rental",
    description:
      "Perfect for Tulsa homeowners tackling renovation projects, garage cleanouts, or yard cleanup.",
  },
  {
    icon: Building2,
    title: "Commercial Services",
    description:
      "Supporting Tulsa businesses with reliable waste management for retail, office, and industrial properties.",
  },
  {
    icon: HardHat,
    title: "Construction Dumpsters",
    description:
      "Heavy-duty dumpsters for Tulsa construction sites, new builds, and major renovation projects.",
  },
  {
    icon: Hammer,
    title: "Demolition Cleanup",
    description:
      "Large capacity dumpsters for demolition debris, concrete, and heavy construction materials.",
  },
]

const serviceAreas = [
  "Downtown Tulsa",
  "Midtown",
  "Brookside",
  "Cherry Street",
  "Utica Square",
  "Tulsa Hills",
  "Broken Arrow",
  "Owasso",
  "Jenks",
  "Bixby",
  "Sand Springs",
  "Sapulpa",
  "Catoosa",
  "Claremore",
  "Coweta",
  "Glenpool",
]

const testimonials = [
  {
    name: "Mike Robertson",
    location: "Broken Arrow, OK",
    rating: 5,
    text: "Used Dumpster Direct for our kitchen remodel. Same-day delivery, fair pricing, and the pickup was right on schedule. Will definitely use again!",
  },
  {
    name: "Sarah Mitchell",
    location: "Midtown Tulsa",
    rating: 5,
    text: "As a contractor, I need reliable dumpster service. These guys have never let me down. Great customer service and competitive rates.",
  },
  {
    name: "Tom Henderson",
    location: "Jenks, OK",
    rating: 5,
    text: "Cleaned out my parents' estate and needed a large dumpster fast. They delivered within hours and made the whole process stress-free.",
  },
]

const dumpsterSizes = [
  {
    size: "10",
    name: "10 Yard Dumpster",
    dimensions: '12\' L × 8\' W × 3.5\' H',
    capacity: "4 pickup truck loads",
    idealFor: "Small cleanouts, minor renovations",
    price: "279",
  },
  {
    size: "20",
    name: "20 Yard Dumpster",
    dimensions: '22\' L × 8\' W × 4.5\' H',
    capacity: "8 pickup truck loads",
    idealFor: "Medium renovations, roofing",
    price: "349",
    popular: true,
  },
  {
    size: "30",
    name: "30 Yard Dumpster",
    dimensions: '22\' L × 8\' W × 6\' H',
    capacity: "12 pickup truck loads",
    idealFor: "Large projects, new construction",
    price: "429",
  },
  {
    size: "40",
    name: "40 Yard Dumpster",
    dimensions: '22\' L × 8\' W × 8\' H',
    capacity: "16 pickup truck loads",
    idealFor: "Major demolition, commercial",
    price: "529",
  },
]

const faqs = [
  {
    question: "How fast can you deliver a dumpster in Tulsa?",
    answer:
      "We offer same-day delivery throughout Tulsa and surrounding areas when you order before 10 AM. Next-day delivery is guaranteed for all orders placed before 4 PM.",
  },
  {
    question: "Do I need a permit for a dumpster in Tulsa?",
    answer:
      "If the dumpster is placed on your private property (driveway, yard), no permit is needed. For street placement in Tulsa, a permit from the City of Tulsa is required. We can help guide you through the permit process.",
  },
  {
    question: "What areas around Tulsa do you serve?",
    answer:
      "We serve all of Tulsa County and surrounding areas including Broken Arrow, Owasso, Jenks, Bixby, Sand Springs, Sapulpa, Catoosa, Claremore, and more. Contact us if you're unsure about your location.",
  },
  {
    question: "What materials can I put in the dumpster?",
    answer:
      "Most household and construction debris is accepted including furniture, appliances, wood, drywall, roofing materials, and yard waste. Hazardous materials, tires, batteries, and certain electronics are not permitted.",
  },
]

export default function TulsaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dumpsterSize: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="absolute inset-0 h-[600px] lg:h-[700px]">
          <Image
            src="/images/locations/tulsa-skyline.jpg"
            alt="Tulsa Oklahoma skyline"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium tracking-widest uppercase text-sm">
                Tulsa, Oklahoma
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Dumpster Rental in Tulsa, OK
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Fast, reliable dumpster rental services for Tulsa and the surrounding
              metro area. Same-day delivery available for residential, commercial,
              and construction projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild>
                <a href="#quote">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:1-800-555-DUMP">
                  <Phone className="mr-2 h-5 w-5" />
                  1-800-555-DUMP
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">Same Day</p>
                <p className="text-sm text-muted-foreground">Delivery Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+ Years</p>
                <p className="text-sm text-muted-foreground">Serving Tulsa</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5,000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
              Dumpster rental services in Tulsa
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re a homeowner, contractor, or business owner in Tulsa,
              we have the right dumpster solution for your project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-border bg-background p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Dumpster Sizes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
              Tulsa dumpster rental pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose the size that fits your
              project needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dumpsterSizes.map((dumpster) => (
              <div
                key={dumpster.size}
                className={`relative rounded-lg border ${
                  dumpster.popular
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                } p-6`}
              >
                {dumpster.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-primary mb-1">
                    {dumpster.size}
                  </p>
                  <p className="text-sm text-muted-foreground">Yard Dumpster</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Dimensions: </span>
                    <span className="text-foreground">{dumpster.dimensions}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Capacity: </span>
                    <span className="text-foreground">{dumpster.capacity}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Ideal for: </span>
                    <span className="text-foreground">{dumpster.idealFor}</span>
                  </div>
                </div>
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground">Starting at</p>
                  <p className="text-3xl font-bold text-foreground">
                    ${dumpster.price}
                  </p>
                </div>
                <Button
                  className="w-full"
                  variant={dumpster.popular ? "default" : "outline"}
                  asChild
                >
                  <a href="#quote">Get Quote</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Service Areas
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
                Serving Tulsa and surrounding communities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We proudly serve the entire Tulsa metropolitan area, including all of
                Tulsa County and neighboring communities. Our local team knows the
                area and can deliver quickly to any location.
              </p>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                  <Truck className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Local Tulsa Team</h4>
                  <p className="text-sm text-muted-foreground">
                    Our drivers and support staff are based right here in Tulsa,
                    ensuring fast response times and local expertise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Fast Delivery</h4>
                  <p className="text-sm text-muted-foreground">
                    Same-day delivery available throughout the Tulsa metro. Order
                    before 10 AM for delivery today.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Areas We Serve
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                Don&apos;t see your area listed? Contact us - we likely serve your
                location too!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
              What Tulsa customers say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Get Started
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
                Request a free quote for Tulsa dumpster rental
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fill out the form and our Tulsa team will get back to you within 2
                hours during business hours with a customized quote for your project.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Call Us Direct</h4>
                    <p className="text-muted-foreground">1-800-555-DUMP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Mon-Fri: 7AM-6PM | Sat: 8AM-4PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Tulsa Office</h4>
                    <p className="text-muted-foreground">
                      4521 E 51st St, Tulsa, OK 74135
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 lg:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Thank you for your request!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Our Tulsa team will contact you shortly with a customized quote.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(918) 555-1234"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Delivery Address in Tulsa Area *
                    </label>
                    <Input
                      id="address"
                      type="text"
                      placeholder="123 Main St, Tulsa, OK"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dumpsterSize"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Dumpster Size
                    </label>
                    <select
                      id="dumpsterSize"
                      value={formData.dumpsterSize}
                      onChange={(e) =>
                        setFormData({ ...formData, dumpsterSize: e.target.value })
                      }
                      className="flex h-10 w-full rounded-md border border-input bg-input px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a size</option>
                      <option value="10">10 Yard - $279</option>
                      <option value="20">20 Yard - $349 (Most Popular)</option>
                      <option value="30">30 Yard - $429</option>
                      <option value="40">40 Yard - $529</option>
                      <option value="unsure">Not Sure - Help Me Choose</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project - type of debris, timeline, etc..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Get My Free Tulsa Quote
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to be contacted about your request.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Tulsa dumpster rental FAQs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-foreground mb-4 text-balance">
            Ready to rent a dumpster in Tulsa?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get started today with fast, reliable dumpster rental service. Same-day
            delivery available throughout the Tulsa metro area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="#quote">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:1-800-555-DUMP">
                <Phone className="mr-2 h-5 w-5" />
                Call 1-800-555-DUMP
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
