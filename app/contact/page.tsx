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

interface ContactPageProps {
  city?: string;
}

export default function ContactPage({ city = "Your City" }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dumpsterSize: "",
    serviceType: "",
    address: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Phone,
      title: "Call For Immediate Quote",
      description: "Fastest way to book your dumpster",
      href: "tel:+18005553867",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a quote within 1-2 hours",
      href: "mailto:info@dumpsterdirect.com",
      action: "Send Email",
    },
    {
      icon: MessageSquare,
      title: "Request Online",
      description: "Quick online quote form",
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
        "Hazardous materials, tires, batteries, chemicals, and paint are typically restricted.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <p className="text-primary uppercase tracking-widest text-sm mb-3">
              Dumpster Rental {city}
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get Dumpster Rental Quote in {city}
            </h1>

            <p className="text-lg text-muted-foreground">
              Fast dumpster rental service in {city}. Same-day delivery
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
                className="border rounded-xl p-6 bg-card hover:border-primary transition"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <method.icon className="text-primary" />
                </div>

                <h3 className="font-semibold text-lg mb-1">{method.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
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

      {/* Form Section */}
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
                <div className="border rounded-xl p-8 text-center">
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
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                    />

                    <Input
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>

                  <Input
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <select
                      className="border rounded-md p-2"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dumpsterSize: e.target.value,
                        })
                      }
                    >
                      <option>Select Dumpster Size</option>
                      <option>10 Yard</option>
                      <option>20 Yard</option>
                      <option>30 Yard</option>
                      <option>40 Yard</option>
                    </select>

                    <select
                      className="border rounded-md p-2"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceType: e.target.value,
                        })
                      }
                    >
                      <option>Project Type</option>
                      <option>Residential</option>
                      <option>Construction</option>
                      <option>Commercial</option>
                    </select>
                  </div>

                  <Input
                    placeholder={`Delivery Address in ${city}`}
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
              <div className="border rounded-xl p-6 bg-card">
                <h3 className="font-semibold mb-4">Dumpster Rental {city}</h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin />
                    <p>{city} & surrounding areas</p>
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
                <Stat label="Same Day" sub="Delivery" />
                <Stat label="Best" sub="Pricing" />
                <Stat label="24/7" sub="Booking" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dumpster Rental FAQ
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-xl p-6 bg-card">
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

function Stat({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="border rounded-xl p-4 text-center">
      <p className="text-xl font-bold">{label}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}
