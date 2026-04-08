"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Truck, 
  CheckCircle2,
  MessageSquare
} from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "1-800-555-DUMP",
    href: "tel:1-800-555-DUMP",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    value: "info@dumpsterdirect.com",
    href: "mailto:info@dumpsterdirect.com",
    action: "Send Email",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with support in real-time",
    value: "Available Mon-Fri, 7am-6pm",
    href: "#",
    action: "Start Chat",
  },
]

const faqs = [
  {
    question: "How quickly can I get a dumpster delivered?",
    answer: "We offer same-day delivery in most service areas when you order before 10 AM. Next-day delivery is available for all orders placed before 4 PM.",
  },
  {
    question: "What can I put in the dumpster?",
    answer: "Most household and construction debris is accepted, including furniture, appliances, wood, drywall, roofing materials, and yard waste. Hazardous materials, tires, and certain electronics are not permitted.",
  },
  {
    question: "How long can I keep the dumpster?",
    answer: "Standard rental periods are 7-14 days depending on the dumpster size. Extended rentals are available at a daily rate. Contact us for long-term project pricing.",
  },
  {
    question: "Do I need a permit?",
    answer: "Permits are typically required if the dumpster will be placed on a public street. If it's on your private property, no permit is usually needed. We can help you determine requirements for your area.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    dumpsterSize: "",
    projectDate: "",
    address: "",
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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Get in touch with our team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our dumpster rental services? Need help choosing the 
              right size? Our friendly team is ready to assist you with your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div 
                key={method.title}
                className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {method.description}
                </p>
                <p className="text-foreground font-medium mb-4">
                  {method.value}
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href={method.href}>{method.action}</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Request a Free Quote
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you within 2 hours during business hours.
              </p>

              {submitted ? (
                <div className="rounded-lg border border-primary/30 bg-primary/10 p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Thank you for your request!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We&apos;ve received your information and will contact you shortly with a quote.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Type
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-input px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="construction">Construction</option>
                        <option value="demolition">Demolition</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="dumpsterSize" className="block text-sm font-medium text-foreground mb-2">
                        Dumpster Size
                      </label>
                      <select
                        id="dumpsterSize"
                        value={formData.dumpsterSize}
                        onChange={(e) => setFormData({ ...formData, dumpsterSize: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-input px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a size</option>
                        <option value="10">10 Yard</option>
                        <option value="20">20 Yard</option>
                        <option value="30">30 Yard</option>
                        <option value="40">40 Yard</option>
                        <option value="unsure">Not Sure - Help Me Choose</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="projectDate" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Delivery Date
                      </label>
                      <Input
                        id="projectDate"
                        type="date"
                        value={formData.projectDate}
                        onChange={(e) => setFormData({ ...formData, projectDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                        Delivery Address
                      </label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="123 Main St, City"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project - what type of debris, timeline, any special requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Get My Free Quote
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted regarding your request.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Location Card */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Our Location
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Address</h4>
                      <p className="text-muted-foreground text-sm">
                        123 Industrial Parkway, Suite 100<br />
                        Metro City, ST 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Business Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 7:00 AM - 6:00 PM<br />
                        Saturday: 8:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                      <Truck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Service Area</h4>
                      <p className="text-muted-foreground text-sm">
                        We serve the greater Metro City area including<br />
                        surrounding counties within a 50-mile radius.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-lg border border-border bg-secondary aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">
                    Interactive map coming soon
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <p className="text-2xl font-bold text-primary">2hr</p>
                  <p className="text-xs text-muted-foreground">Avg Response</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-xs text-muted-foreground">Satisfaction</p>
                </div>
                <div className="rounded-lg border border-border bg-card p-4 text-center">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-xs text-muted-foreground">Emergency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our dumpster rental services.
            </p>
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

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Still have questions?
            </p>
            <Button asChild>
              <a href="tel:1-800-555-DUMP">Call Us: 1-800-555-DUMP</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
