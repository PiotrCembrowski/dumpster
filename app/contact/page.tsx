"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Truck,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const CITY = "Your City"; // later dynamic for multi-city scaling

const contactMethods = [
  {
    icon: Phone,
    title: "Call For Immediate Quote",
    description: "Fastest way to book your dumpster",
    value: "Call Now",
    href: "tel:+18005553867",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a quote within 1-2 hours",
    value: "info@dumpsterdirect.com",
    href: "mailto:info@dumpsterdirect.com",
    action: "Send Email",
  },
  {
    icon: MessageSquare,
    title: "Request Online",
    description: "Quick online quote form",
    value: "Available 24/7",
    href: "#form",
    action: "Get Quote",
  },
];

const faqs = [
  {
    question: "How fast can you deliver a dumpster?",
    answer:
      "We offer same-day dumpster delivery in most areas. In some cases, we can deliver within a few hours depending on availability.",
  },
  {
    question: "What size dumpster do I need?",
    answer:
      "Most home cleanouts use a 20-yard dumpster. Roofing and construction projects typically require 30-yard or 40-yard dumpsters.",
  },
  {
    question: "How long can I keep the dumpster?",
    answer:
      "Standard rental includes 7-10 days. Extended rentals are available at low daily rates.",
  },
  {
    question: "What items are not allowed?",
    answer:
      "Hazardous materials, tires, batteries, chemicals, and paint are typically restricted. Contact us for details.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dumpsterSize: "",
    serviceType: "",
    address: "",
    projectDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-primary uppercase tracking-widest text-sm mb-3">
              Dumpster Rental {CITY}
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get A Dumpster Rental Quote in {CITY}
            </h1>

            <p className="text-lg text-muted-foreground">
              Fast dumpster rental service in {CITY}. Same-day delivery
              available. Affordable pricing for residential, construction, and
              commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 border-b">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="border rounded-lg p-6 bg-card hover:border-primary transition"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <method.icon className="text-primary" />
                </div>

                <h3 className="font-semibold text-lg mb-1">{method.title}</h3>

                <p className="text-muted-foreground text-sm mb-3">
                  {method.description}
                </p>

                <Button asChild className="w-full">
                  <a href={method.href}>{method.action}</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact */}
      <section id="form" className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Get Free Dumpster Quote
              </h2>

              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll contact you within minutes.
              </p>

              {submitted ? (
                <div className="border rounded-lg p-8 text-center">
                  <CheckCircle2 className="mx-auto mb-4 text-primary" />

                  <h3 className="text-xl font-semibold mb-2">
                    Quote Request Sent
                  </h3>

                  <p className="text-muted-foreground">
                    Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />

                    <Input
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <Input
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <select
                      className="border rounded-md p-2"
                      value={formData.dumpsterSize}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dumpsterSize: e.target.value,
                        })
                      }
                    >
                      <option>Dumpster Size</option>
                      <option>10 Yard</option>
                      <option>20 Yard</option>
                      <option>30 Yard</option>
                      <option>40 Yard</option>
                    </select>

                    <select
                      className="border rounded-md p-2"
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceType: e.target.value,
                        })
                      }
                    >
                      <option>Service Type</option>
                      <option>Residential</option>
                      <option>Construction</option>
                      <option>Commercial</option>
                    </select>
                  </div>

                  <Input
                    placeholder="Delivery Address"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: e.target.value,
                      })
                    }
                  />

                  <Textarea
                    placeholder="Project Details"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                  />

                  <Button type="submit" size="lg" className="w-full">
                    Get Free Quote
                  </Button>
                </form>
              )}
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <div className="border rounded-lg p-6 bg-card">
                <h3 className="font-semibold mb-4">Dumpster Rental {CITY}</h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin />
                    <p>{CITY} & surrounding areas</p>
                  </div>

                  <div className="flex gap-3">
                    <Clock />
                    <p>Same Day Delivery Available</p>
                  </div>

                  <div className="flex gap-3">
                    <Truck />
                    <p>Fast & Affordable Dumpster Rentals</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 text-center">
                  <p className="text-xl font-bold">Same Day</p>
                  <p className="text-xs text-muted-foreground">Delivery</p>
                </div>

                <div className="border rounded-lg p-4 text-center">
                  <p className="text-xl font-bold">Best</p>
                  <p className="text-xs text-muted-foreground">Pricing</p>
                </div>

                <div className="border rounded-lg p-4 text-center">
                  <p className="text-xl font-bold">24/7</p>
                  <p className="text-xs text-muted-foreground">Booking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dumpster Rental FAQ
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-6 bg-card">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
