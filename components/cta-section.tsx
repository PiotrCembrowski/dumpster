import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground mb-6 text-balance">
          Ready to get started?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Contact us today for a free quote. Our team is standing by to help you find 
          the perfect dumpster solution for your project.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" variant="secondary" className="text-base px-8">
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Phone className="mr-2 h-5 w-5" />
            1-800-555-DUMP
          </Button>
        </div>
      </div>
    </section>
  )
}
