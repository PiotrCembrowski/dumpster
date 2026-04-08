import { Phone, CalendarCheck, Paintbrush, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Request a Free Striping Quote",
    description:
      "Call us or fill out our online form for a fast, free parking lot striping estimate. We provide pricing for ADA striping, fire lanes, and full lot layouts.",
  },
  {
    icon: CalendarCheck,
    number: "2",
    title: "Schedule Your Striping Service",
    description:
      "Choose a convenient date for your parking lot striping project. Most commercial striping jobs are completed within 24–48 hours.",
  },
  {
    icon: Paintbrush,
    number: "3",
    title: "Professional Line Striping",
    description:
      "Our crew completes your parking lot striping using durable traffic-grade paint, ensuring clean, compliant, long-lasting markings.",
  },
  {
    icon: CheckCircle2,
    number: "4",
    title: "Final Inspection & Completion",
    description:
      "We verify ADA compliance, layout accuracy, and paint quality to ensure your parking lot is safe, professional, and ready for traffic.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-border" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
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

        {/* Bottom SEO Text */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground">
            We provide professional parking lot striping, ADA compliant
            markings, fire lane striping, and pavement marking services for
            retail centers, office buildings, warehouses, and apartment
            complexes.
          </p>
        </div>
      </div>
    </section>
  );
}
