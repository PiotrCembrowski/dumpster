import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Phone,
  CalendarCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Get a Free Dumpster Rental Quote",
    description:
      "Call us or request a quote online. Tell us your project type and we'll recommend the right size — 10, 20, 30, or 40 yard — and give you an all-in price with no hidden fees.",
  },
  {
    icon: CalendarCheck,
    number: "2",
    title: "Schedule Your Delivery",
    description:
      "Pick a delivery date that works for your project. Call before noon for same-day delivery, or schedule a specific morning or afternoon window for the following day.",
  },
  {
    icon: Truck,
    number: "3",
    title: "Fill Your Roll Off Dumpster",
    description:
      "Load your dumpster with construction debris, household junk, roofing shingles, yard waste, or renovation materials. Your rental period runs 7 to 14 days — work at your own pace.",
  },
  {
    icon: CheckCircle2,
    number: "4",
    title: "We Pick Up and Dispose",
    description:
      "Call when you're done and we'll pick up the dumpster within 24 hours. We handle all disposal and haul-away — your project site is clean and you're finished.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Dumpster Rental Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            How Our Dumpster Rental Service Works
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Four steps from call to clean site. Same-day delivery available when
            you call before noon — no complicated scheduling, no surprise
            charges on pickup.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-border" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon + step number */}
                <div className="relative mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-background border-2 border-primary text-xs font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section
            FIX: Original paragraph was pure boilerplate — "Our dumpster rental
            service includes roll off dumpster delivery, flexible rental periods..."
            — identical in structure to the bottom text on three other sections.
            Replaced with a two-column block: a clear next-step CTA on the left,
            and quick-answer FAQ items on the right that pre-empt the most common
            objections after reading the process steps.
        */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-start">
            {/* CTA column */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Most bookings take under five minutes. Call us or request a
                quote online and we'll handle the rest — sizing, scheduling,
                delivery, and pickup.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="tel:+18005553867"
                    className="flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    (800) 555-3867
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick FAQ column — reduces friction before the first call */}
            <div className="space-y-4">
              {[
                {
                  q: "How fast can you deliver?",
                  a: "Call before noon and we deliver the same day in most areas. Next-day delivery is always available.",
                },
                {
                  q: "Do I need a permit?",
                  a: "Not if the dumpster sits on your driveway. A permit is only required for placement on a public street.",
                },
                {
                  q: "What can't go in the dumpster?",
                  a: "Paint, batteries, tires, Freon appliances, and hazardous chemicals. Everything else is generally fine.",
                },
              ].map((item) => (
                <div key={item.q} className="border-l-2 border-primary pl-4">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {item.q}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
