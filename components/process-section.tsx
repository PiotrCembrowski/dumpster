import { Phone, CalendarCheck, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Get a Free Dumpster Rental Quote",
    description:
      "Call us or request a quote online for affordable dumpster rental pricing. Our team helps you choose the right roll off dumpster for construction, home cleanouts, or commercial projects.",
  },
  {
    icon: CalendarCheck,
    number: "2",
    title: "Schedule Dumpster Delivery",
    description:
      "Choose your preferred delivery date and time. We offer flexible scheduling including same-day dumpster delivery for urgent cleanup and construction needs.",
  },
  {
    icon: Truck,
    number: "3",
    title: "Fill Your Roll Off Dumpster",
    description:
      "Load your dumpster with construction debris, household junk, or renovation materials. Keep the dumpster for your rental period and work at your own pace.",
  },
  {
    icon: CheckCircle2,
    number: "4",
    title: "We Pick Up & Dispose",
    description:
      "Once you're finished, we'll pick up the dumpster and handle disposal responsibly. Fast pickup keeps your project site clean and hassle-free.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Dumpster Rental Process
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            How Our Dumpster Rental Service Works
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Renting a dumpster is simple. We provide fast delivery, flexible
            rental periods, and reliable pickup for residential, construction,
            and commercial dumpster rental projects.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-border" />
              )}

              {/* Step */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>

                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-background border-2 border-primary text-xs font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom SEO Content */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            Our dumpster rental service includes roll off dumpster delivery,
            flexible rental periods, and fast pickup. We provide residential
            dumpster rental, construction dumpsters, and commercial waste
            solutions across multiple service areas.
          </p>
        </div>
      </div>
    </section>
  );
}
