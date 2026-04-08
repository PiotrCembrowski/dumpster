import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dumpster.jpg"
          alt="Professional dumpster rental service"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
          Fast & Reliable Waste Solutions
        </p>
        
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-foreground mb-8">
          <span className="block text-balance">Turn your waste</span>
          <span className="block mt-2 text-primary">into progress</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
          Professional dumpster rental services for construction, renovation, 
          and cleanup projects. Same-day delivery available across the region.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-base px-8">
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-base px-8">
            View Dumpster Sizes
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">50K+</p>
            <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">24hr</p>
            <p className="text-sm text-muted-foreground mt-1">Fast Delivery</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-primary">98%</p>
            <p className="text-sm text-muted-foreground mt-1">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  )
}
