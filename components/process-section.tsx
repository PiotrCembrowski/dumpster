<<<<<<< HEAD
import { Phone, CalendarCheck, Paintbrush, CheckCircle2 } from "lucide-react";
=======
import { Phone, CalendarCheck, Truck, CheckCircle2 } from "lucide-react";
>>>>>>> seo-optimization

const steps = [
  {
    icon: Phone,
    number: "1",
<<<<<<< HEAD
    title: "Request a Free Striping Quote",
    description:
      "Call us or fill out our online form for a fast, free parking lot striping estimate. We provide pricing for ADA striping, fire lanes, and full lot layouts.",
=======
    title: "Get a Free Dumpster Rental Quote",
    description:
      "Call us or request a quote online for affordable dumpster rental pricing. Our team helps you choose the right roll off dumpster for construction, home cleanouts, or commercial projects.",
>>>>>>> seo-optimization
  },
  {
    icon: CalendarCheck,
    number: "2",
<<<<<<< HEAD
    title: "Schedule Your Striping Service",
    description:
      "Choose a convenient date for your parking lot striping project. Most commercial striping jobs are completed within 24–48 hours.",
=======
    title: "Schedule Dumpster Delivery",
    description:
      "Choose your preferred delivery date and time. We offer flexible scheduling including same-day dumpster delivery for urgent cleanup and construction needs.",
>>>>>>> seo-optimization
  },
  {
    icon: Paintbrush,
    number: "3",
<<<<<<< HEAD
    title: "Professional Line Striping",
    description:
      "Our crew completes your parking lot striping using durable traffic-grade paint, ensuring clean, compliant, long-lasting markings.",
=======
    title: "Fill Your Roll Off Dumpster",
    description:
      "Load your dumpster with construction debris, household junk, or renovation materials. Keep the dumpster for your rental period and work at your own pace.",
>>>>>>> seo-optimization
  },
  {
    icon: CheckCircle2,
    number: "4",
<<<<<<< HEAD
    title: "Final Inspection & Completion",
    description:
      "We verify ADA compliance, layout accuracy, and paint quality to ensure your parking lot is safe, professional, and ready for traffic.",
=======
    title: "We Pick Up & Dispose",
    description:
      "Once you're finished, we'll pick up the dumpster and handle disposal responsibly. Fast pickup keeps your project site clean and hassle-free.",
>>>>>>> seo-optimization
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Parking Lot Striping Process
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Simple & Professional Parking Lot Striping
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our streamlined striping process ensures fast turnaround, ADA
            compliance, and professional parking lot markings for commercial
            properties.
=======
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
>>>>>>> seo-optimization
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

<<<<<<< HEAD
=======
              {/* Step */}
>>>>>>> seo-optimization
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

<<<<<<< HEAD
=======
                {/* Title */}
>>>>>>> seo-optimization
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>

<<<<<<< HEAD
=======
                {/* Description */}
>>>>>>> seo-optimization
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
        {/* Bottom SEO Text */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            We provide professional parking lot striping, ADA compliant
            markings, fire lane striping, and pavement marking services for
            retail centers, office buildings, warehouses, and apartment
            complexes.
=======
        {/* Bottom SEO Content */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            Our dumpster rental service includes roll off dumpster delivery,
            flexible rental periods, and fast pickup. We provide residential
            dumpster rental, construction dumpsters, and commercial waste
            solutions across multiple service areas.
>>>>>>> seo-optimization
          </p>
        </div>
      </div>
    </section>
  );
}
