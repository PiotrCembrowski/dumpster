"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Dumpster Rental Contact
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Get Your Free Dumpster Rental Quote
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Need a roll off dumpster for construction, home cleanouts, or
              commercial projects? Contact us today for fast delivery,
              affordable pricing, and reliable dumpster rental services.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Service Area
                  </h3>
                  <p className="text-muted-foreground">
                    Wichita, Kansas & Surrounding Areas
                    <br />
                    Same-Day Dumpster Delivery Available
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">
                    Call for Same-Day Dumpster Rental
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">
                    Request Dumpster Pricing & Availability
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Mon - Fri: 7:00 AM - 6:00 PM
                    <br />
                    Sat: 8:00 AM - 4:00 PM
                    <br />
                    Same-Day Delivery Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Request a Free Dumpster Quote
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              Tell us about your project and we'll recommend the best dumpster
              size.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Full Name
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
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
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
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(316) 555-1234"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
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
                  placeholder="Example: 20 yard dumpster for home renovation in Wichita..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Get Free Dumpster Quote
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom SEO Text */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground">
            We provide residential dumpster rentals, construction dumpsters,
            demolition dumpsters, and commercial roll off dumpster rentals with
            fast delivery and competitive pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
