import { Phone, CalendarCheck, Truck, CheckCircle2 } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Get a Quote",
    description: "Call us or fill out our online form for a free, no-obligation quote tailored to your project needs.",
  },
  {
    icon: CalendarCheck,
    number: "2",
    title: "Schedule Delivery",
    description: "Choose your preferred delivery date and time. We offer flexible scheduling including same-day service.",
  },
  {
    icon: Truck,
    number: "3",
    title: "Fill It Up",
    description: "Load your dumpster with debris at your own pace. Our team will place it in the most convenient location.",
  },
  {
    icon: CheckCircle2,
    number: "4",
    title: "We Handle the Rest",
    description: "When you're done, give us a call. We'll pick up the dumpster and dispose of the waste responsibly.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Simple, hassle-free process
          </h2>
        </div>

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
      </div>
    </section>
  )
}
