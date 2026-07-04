"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Truck } from "lucide-react";

export function ContactSection() {
  const formspreeEndpoint = "https://formspree.io/f/mqenyeek";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    size: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const payload = new FormData(e.currentTarget);
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Failed to submit.");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", size: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ── LEFT SIDE ── */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Dumpster Rental Quote
            </p>

            {/*
              FIX: H2 said "Get Fast Dumpster Rental in Wichita, KS" — the
              single most damaging line on the entire site. Google read this
              heading and assigned the homepage's geographic authority to a
              city we don't serve, suppressing all other city rankings.
              Replaced with a generic, conversion-focused headline.
            */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Get a Same-Day Dumpster Quote — We'll Size It for You
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Call us or fill out the form and we'll recommend the right
              dumpster size for your project, give you a firm all-in price, and
              schedule delivery for as soon as today.
            </p>

            {/* Contact info blocks */}
            <div className="space-y-6">
              {/* Service Area
                  FIX: Was "Wichita, Kansas & Nearby Cities" — removed entirely.
                  Updated to describe the real multi-state service footprint
                  without naming specific cities (per instruction).
              */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Service Area
                  </h3>
                  <p className="text-muted-foreground">
                    Oklahoma · Nebraska · South Dakota · North Dakota
                    <br />
                    Same-day delivery available in all service areas
                  </p>
                </div>
              </div>

              {/* Phone
                  FIX: Was "Speak with a dumpster rental specialist" with no
                  number shown — a contact block with no contact information.
                  Phone number and click-to-call link added.
              */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Call for Immediate Service
                  </h3>
                  <a
                    href="tel:+18005553867"
                    className="text-primary font-semibold hover:underline text-lg"
                  >
                    (800) 555-3867
                  </a>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    Mon–Fri 7am–6pm · Sat 8am–4pm
                  </p>
                </div>
              </div>

              {/* Email
                  FIX: Was "Fast response within minutes" with no address shown.
                  Updated to show the actual contact email matching the domain.
              */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <a
                    href="mailto:info@rapiddumpsterrental.site"
                    className="text-primary hover:underline"
                  >
                    info@rapiddumpsterrental.site
                  </a>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    Responses within 30 minutes during business hours
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
                    Mon – Fri: 7:00 AM – 6:00 PM
                    <br />
                    Sat: 8:00 AM – 4:00 PM
                    <br />
                    Emergency & same-day delivery available
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
                    Call before noon for same-day drop-off.
                    <br />
                    Next-day delivery always available.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── FORM ── */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Request Free Dumpster Quote
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Tell us about your project and we'll recommend the right size and
              give you an all-in price — no obligation.
            </p>

            <form
              action={formspreeEndpoint}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Dumpster Quote Request — Rapid Dumpster Rental"
              />

              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="jane@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </label>
                <Input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  // FIX: Placeholder was "(316) 555-1234" — a Wichita area code.
                  // Replaced with a neutral format example.
                  placeholder="(555) 000-1234"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              {/*
                FIX: Size selector added. The original form had no structured
                size field — every submission arrived as a freeform message,
                making lead qualification slower. A select input gives the
                team immediate context and pre-qualifies the lead without
                extra back-and-forth.
              */}
              <div>
                <label
                  htmlFor="contact-size"
                  className="block text-sm font-medium mb-2"
                >
                  Dumpster Size Needed
                </label>
                <select
                  id="contact-size"
                  name="size"
                  value={formData.size}
                  onChange={(e) =>
                    setFormData({ ...formData, size: e.target.value })
                  }
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Not sure — help me choose</option>
                  <option value="10-yard">
                    10 Yard — small cleanout, garage
                  </option>
                  <option value="20-yard">
                    20 Yard — roofing, kitchen remodel
                  </option>
                  <option value="30-yard">
                    30 Yard — large renovation, full cleanout
                  </option>
                  <option value="40-yard">
                    40 Yard — demolition, commercial
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-2"
                >
                  Project Details
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Describe your project — what are you throwing away, where is delivery, and when do you need it?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Get Free Dumpster Quote"}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              No obligation. Fast response. Same-day availability.
            </p>

            {submitStatus === "success" && (
              <p className="text-sm text-center mt-3 text-primary font-medium">
                Quote request sent — we'll be in touch shortly.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-sm text-center mt-3 text-destructive">
                Something went wrong. Call us directly at (800) 555-3867.
              </p>
            )}
          </div>
        </div>

        {/*
          FIX: Bottom paragraph said "...pickup in Wichita and surrounding areas."
          Removed Wichita entirely. Replaced with generic service description
          that covers use cases and sizes without city references.
        */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            We provide 10, 20, 30, and 40 yard roll off dumpster rentals for
            residential cleanouts, roofing projects, construction debris,
            demolition waste, yard cleanup, and commercial jobs. Same-day
            delivery available. Call before noon to get a dumpster on-site
            today.
          </p>
        </div>
      </div>
    </section>
  );
}
