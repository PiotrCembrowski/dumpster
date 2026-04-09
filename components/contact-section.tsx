"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Truck } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dumpster Quote Request:", formData);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Dumpster Rental Quote
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Get Fast Dumpster Rental in Wichita, KS
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Looking for a reliable roll off dumpster rental in Wichita? We
              provide fast delivery, affordable pricing, and flexible rental
              periods for construction, home cleanouts, roofing, demolition, and
              commercial projects.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Service Area */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Service Area
                  </h3>
                  <p className="text-muted-foreground">
                    Wichita, Kansas & Nearby Cities
                    <br />
                    Same-Day Dumpster Delivery Available
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Call for Immediate Service
                  </h3>
                  <p className="text-muted-foreground">
                    Speak with a dumpster rental specialist
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Request Quote Online
                  </h3>
                  <p className="text-muted-foreground">
                    Fast response within minutes
                  </p>
                </div>
              </div>

              {/* Hours */}
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
                    Emergency & Same-Day Delivery Available
                  </p>
                </div>
              </div>

              {/* Delivery */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Fast Delivery
                  </h3>
                  <p className="text-muted-foreground">
                    Same-day & next-day dumpster rentals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Request Free Dumpster Quote
            </h3>

            <p className="text-sm text-muted-foreground mb-6">
              Tell us about your project and we'll recommend the right dumpster
              size.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
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
                <label className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <Textarea
                  rows={4}
                  placeholder="Example: 20 yard dumpster for home renovation in Wichita..."
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

            {/* Trust Text */}
            <p className="text-xs text-muted-foreground mt-4 text-center">
              No obligation. Fast response. Same-day availability.
            </p>
          </div>
        </div>

        {/* SEO Footer Text */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            We provide roll off dumpster rentals for residential cleanouts,
            construction debris, roofing projects, demolition waste, yard
            cleanup, and commercial jobs. Choose from 10 yard, 20 yard, 30 yard,
            and 40 yard dumpsters with fast delivery and reliable pickup in
            Wichita and surrounding areas.
          </p>
        </div>
      </div>
    </section>
  );
}
