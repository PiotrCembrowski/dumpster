"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Truck,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

// ─── NOTES ───────────────────────────────────────────────────────────────────
// FIX: Removed city prop default of "Your City" — that placeholder was being
// rendered live on the /contact page and indexed by Google.
// This page now works correctly as a standalone /contact with no city context.
// The city prop is retained so individual city pages can optionally pass their
// city name for a tailored subject line in the Formspree submission.
interface ContactPageProps {
  city?: string;
}

export default function ContactPage({ city }: ContactPageProps) {
  const formspreeEndpoint = "https://formspree.io/f/mqenyeek";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dumpsterSize: "",
    serviceType: "",
    address: "",
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        dumpsterSize: "",
        serviceType: "",
        address: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // FIX: Email href updated from info@dumpsterdirect.com to correct domain
  const contactMethods = [
    {
      icon: Phone,
      title: "Call for Immediate Quote",
      description:
        "Fastest way to book — call before noon for same-day delivery",
      href: "tel:+18005553867",
      action: "(800) 555-3867",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Response within 30 minutes during business hours",
      href: "mailto:info@rapiddumpsterrental.site",
      action: "info@rapiddumpsterrental.site",
    },
    {
      icon: MessageSquare,
      title: "Request Online",
      description: "Fill out the form below — we'll respond within minutes",
      href: "#form",
      action: "Get a Quote",
    },
  ];

  const faqs = [
    {
      question: "How fast can you deliver a dumpster?",
      answer:
        "Call before noon and we deliver the same day in most service areas. Next-day delivery is always available. Same-day availability depends on your location and current schedule — call us to confirm.",
    },
    {
      question: "What size dumpster do I need?",
      answer:
        "A 10 yard handles small cleanouts and single-room jobs. A 20 yard is the most popular — it covers roofing, kitchen remodels, and medium cleanouts. A 30 yard suits large renovations. A 40 yard is for demolition and commercial work. Not sure? We'll size it for you on the call.",
    },
    {
      question: "How long can I keep the dumpster?",
      answer:
        "Standard rental periods run 7 to 14 days depending on the size. Extensions are available at a daily rate — just call before your rental period ends and we'll extend it.",
    },
    {
      question: "What items are not allowed?",
      answer:
        "Prohibited items include hazardous waste, paint cans, motor oil, batteries, tires, and Freon-containing appliances (refrigerators, AC units). Everything else — furniture, construction debris, yard waste, shingles, concrete — is generally fine.",
    },
    {
      question: "Do I need a permit for a dumpster?",
      answer:
        "Only if the dumpster goes on a public street or city right-of-way. Placing the dumpster in your driveway — which works for most residential projects — requires no permit at all.",
    },
    {
      question: "What does the price include?",
      answer:
        "Our quoted price includes delivery, pickup, the full rental period, and standard disposal up to the included weight limit. There are no fuel surcharges or hidden fees. Overage charges apply only if you exceed the weight allowance.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ── BREADCRUMB ── */}
      <nav
        aria-label="Breadcrumb"
        className="bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-1 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3 w-3 mx-1 text-gray-400" />
            <li className="text-gray-900 font-medium" aria-current="page">
              Contact & Free Quote
            </li>
          </ol>
        </div>
      </nav>

      {/* ── HERO ──
          FIX: H1 was "Get Dumpster Rental Quote in Your City" —
          "Your City" was literally published on the live page and indexed.
          Replaced with a real headline that works without city context.
      */}
      <section className="pt-24 pb-16 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary uppercase tracking-widest text-sm mb-3 font-medium">
              Free Dumpster Rental Quote
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {city
                ? `Get a Dumpster Rental Quote in ${city}`
                : "Get a Same-Day Dumpster Rental Quote"}
            </h1>
            <p className="text-lg text-muted-foreground">
              Call us or fill out the form below. We'll recommend the right
              dumpster size, give you an all-in price, and schedule delivery for
              as soon as today — no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT METHOD CARDS ── */}
      <section className="py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="border border-border rounded-xl p-6 bg-card hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <method.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-1 text-foreground">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {method.description}
                </p>
                <Button asChild className="w-full" variant="outline">
                  <a href={method.href}>{method.action}</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section id="form" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-3 text-foreground">
                Request Free Dumpster Quote
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your project. We'll respond within minutes and can
                arrange same-day delivery if you need it fast.
              </p>

              <form
                action={formspreeEndpoint}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Hidden fields — city only sent if prop is provided */}
                <input
                  type="hidden"
                  name="_subject"
                  value={
                    city
                      ? `Dumpster Quote Request — ${city}`
                      : "New Dumpster Quote Request — Rapid Dumpster Rental"
                  }
                />
                {city && <input type="hidden" name="city" value={city} />}

                {/* Name + Phone row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="c-name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="c-name"
                      name="name"
                      placeholder="Jane Smith"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="c-phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 000-1234"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="c-email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="c-email"
                    name="email"
                    type="email"
                    placeholder="jane@email.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Size + Project type row
                    FIX: Selects had inline className="border rounded-md p-2"
                    inconsistent with the design system. Updated to match
                    the standard Input height and ring-offset focus style.
                */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="c-size"
                      className="block text-sm font-medium mb-2"
                    >
                      Dumpster Size
                    </label>
                    <select
                      id="c-size"
                      name="dumpsterSize"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      value={formData.dumpsterSize}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dumpsterSize: e.target.value,
                        })
                      }
                    >
                      <option value="">Not sure — help me choose</option>
                      <option value="10-yard">
                        10 Yard — garage, small cleanout
                      </option>
                      <option value="20-yard">
                        20 Yard — roofing, remodel
                      </option>
                      <option value="30-yard">
                        30 Yard — large renovation
                      </option>
                      <option value="40-yard">
                        40 Yard — demolition, commercial
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="c-type"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="c-type"
                      name="serviceType"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceType: e.target.value,
                        })
                      }
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="roofing">Roofing</option>
                      <option value="construction">Construction</option>
                      <option value="demolition">Demolition</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                {/* Delivery address
                    FIX: Placeholder was "Delivery Address in Your City" —
                    placeholder text literally said "Your City".
                */}
                <div>
                  <label
                    htmlFor="c-address"
                    className="block text-sm font-medium mb-2"
                  >
                    Delivery Address
                  </label>
                  <Input
                    id="c-address"
                    name="address"
                    placeholder="Street address where dumpster will be placed"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>

                {/* Project details */}
                <div>
                  <label
                    htmlFor="c-message"
                    className="block text-sm font-medium mb-2"
                  >
                    Project Details
                  </label>
                  <Textarea
                    id="c-message"
                    name="message"
                    placeholder="What are you getting rid of? Any access constraints, heavy materials, or timing requirements?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
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

                <p className="text-xs text-muted-foreground text-center">
                  No obligation. Fast response. Same-day availability.
                </p>

                {submitStatus === "success" && (
                  <p className="text-sm text-primary text-center font-medium">
                    Quote request sent — we'll be in touch shortly.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-destructive text-center">
                    Something went wrong. Call us at (800) 555-3867.
                  </p>
                )}
              </form>
            </div>

            {/* Right info column
                FIX: Was showing "Dumpster Rental Your City" and
                "{city} & surrounding areas" — placeholder content.
                Replaced with a real info block plus concrete stats.
            */}
            <div className="space-y-6">
              <div className="border border-border rounded-xl p-6 bg-card">
                <h3 className="font-semibold text-lg mb-5 text-foreground">
                  {city ? `Dumpster Rental in ${city}` : "Our Service Area"}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">
                      {city
                        ? `Same-day delivery available in ${city} and surrounding areas`
                        : "Oklahoma · Nebraska · South Dakota · North Dakota"}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">
                      Mon–Fri 7am–6pm · Sat 8am–4pm
                      <br />
                      Same-day delivery when you call before noon
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">
                      10, 20, 30, and 40 yard roll off dumpsters.
                      <br />
                      All-in pricing from $269 — no hidden fees.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground text-sm mb-1">
                        Prefer to call?
                      </p>
                      <a
                        href="tel:+18005553867"
                        className="text-primary font-semibold hover:underline"
                      >
                        (800) 555-3867
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats
                  FIX: Was "Same Day / Delivery", "Best / Pricing", "24/7 / Booking"
                  "Best" is meaningless. "24/7 Booking" is false — business hours
                  are listed as 7am–6pm M–F. Replaced with concrete, honest stats.
              */}
              <div className="grid grid-cols-3 gap-4">
                <Stat label="From $269" sub="Starting price" />
                <Stat label="Same Day" sub="Delivery" />
                <Stat label="7–14 Days" sub="Rental period" />
              </div>

              {/* Service area links */}
              <div className="border border-border rounded-xl p-6 bg-card">
                <h3 className="font-semibold text-foreground mb-4">
                  Find pricing for your area
                </h3>
                <ul className="space-y-2">
                  {[
                    {
                      label: "Bartlesville, OK",
                      href: "/dumpster-rental/bartlesville",
                    },
                    {
                      label: "Muskogee, OK",
                      href: "/dumpster-rental/muskogee",
                    },
                    {
                      label: "Scottsbluff, NE",
                      href: "/dumpster-rental/scottsbluff",
                    },
                    { label: "Pierre, SD", href: "/dumpster-rental/pierre" },
                    {
                      label: "Jamestown, ND",
                      href: "/dumpster-rental/jamestown",
                    },
                  ].map((city) => (
                    <li key={city.href}>
                      <Link
                        href={city.href}
                        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
                        Dumpster rental {city.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/services"
                      className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-1"
                    >
                      <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
                      View all locations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──
          FIX: Expanded from 4 thin FAQs to 6 with detailed answers.
          Each answer targets a real long-tail query and is specific
          enough to qualify as a featured snippet candidate.
      */}
      <section id="faq" className="py-20 bg-muted scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Dumpster Rental — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-border rounded-xl p-6 bg-card"
              >
                <h3 className="font-semibold mb-2 text-foreground">
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
    </div>
  );
}

function Stat({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="border border-border rounded-xl p-4 text-center bg-card">
      <p className="text-lg font-bold text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
    </div>
  );
}
