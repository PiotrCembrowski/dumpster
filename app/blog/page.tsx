import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export const metadata = {
  title: "Blog | Dumpster Direct Services",
  description:
    "Expert tips, guides, and industry insights on dumpster rental, waste management, and construction projects.",
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Our Blog
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance mb-4">
                Tips, guides & industry insights
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay informed with the latest news, expert advice, and helpful
                resources for your next project.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
            </div>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4 text-balance">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {featuredPost.author.role}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground">Recent Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="h-full flex flex-col rounded-lg border border-border bg-background overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center rounded-md bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 text-balance">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                          <User className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {post.author.name}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-card border border-border p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-balance">
                    Subscribe to our newsletter
                  </h2>
                  <p className="text-muted-foreground">
                    Get the latest tips, guides, and industry news delivered straight
                    to your inbox. No spam, just valuable content.
                  </p>
                </div>
                <div>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 h-12 rounded-md border border-input bg-input px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <Button size="lg" type="submit">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-3">
                    By subscribing, you agree to our privacy policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-foreground text-balance mb-4">
              Ready to start your project?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Get a free quote today and see why thousands of customers trust
              Dumpster Direct Services.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
