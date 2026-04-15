import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog-data";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | Dumpster Direct Services",
    };
  }

  return {
    title: `${post.title} | Dumpster Direct Services Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

  return (
    <>
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-background/95" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <span className="inline-flex items-center rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {post.author.name}
                  </p>
                  <p className="text-xs">{post.author.role}</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 lg:py-16 bg-card">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_auto] gap-12">
              <article
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground
                  prose-strong:text-foreground
                  prose-ul:my-4 prose-ol:my-4
                  prose-li:my-1"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Sidebar */}
              <aside className="lg:w-64 space-y-8">
                {/* Share */}
                <div className="sticky top-24">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share this article
                  </h3>
                  <div className="flex gap-2">
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background hover:bg-secondary transition-colors"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background hover:bg-secondary transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background hover:bg-secondary transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start gap-6 p-6 rounded-lg border border-border bg-card">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary flex-shrink-0">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Written by
                </p>
                <h3 className="text-lg font-semibold text-foreground">
                  {post.author.name}
                </h3>
                <p className="text-sm text-primary mb-2">{post.author.role}</p>
                <p className="text-sm text-muted-foreground">
                  Part of the Dumpster Direct Services team, dedicated to
                  helping customers find the best waste management solutions for
                  their projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-foreground">
                Related Articles
              </h2>
              <Link
                href="/blog"
                className="text-sm text-primary hover:underline inline-flex items-center"
              >
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="h-full flex flex-col rounded-lg border border-border bg-background overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center rounded-md bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {new Date(relatedPost.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 text-balance">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-foreground text-balance mb-4">
              Need a dumpster for your project?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Get a free quote today and let our team help you find the perfect
              solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/#sizes">View Dumpster Sizes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
