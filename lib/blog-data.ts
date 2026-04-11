export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-dumpster-rental-cost",
    title: "How Much Does a Dumpster Rental Cost in 2026?",
    excerpt:
      "Wondering how much a dumpster rental costs? Learn pricing, factors, and how to save money on your next dumpster rental.",
    content: `
      <p>Dumpster rental costs vary depending on size, location, and rental duration. Understanding pricing helps you avoid surprises and get the best deal.</p>

      <h2>Average Dumpster Rental Prices</h2>
      <ul>
        <li>10 Yard Dumpster: $250 - $450</li>
        <li>20 Yard Dumpster: $350 - $550</li>
        <li>30 Yard Dumpster: $450 - $650</li>
        <li>40 Yard Dumpster: $550 - $850</li>
      </ul>

      <h2>What Affects Dumpster Pricing</h2>
      <ul>
        <li>Location</li>
        <li>Dumpster size</li>
        <li>Rental duration</li>
        <li>Weight limits</li>
        <li>Debris type</li>
      </ul>

      <h2>How to Save Money</h2>
      <ul>
        <li>Choose the right dumpster size</li>
        <li>Avoid overfilling</li>
        <li>Schedule efficiently</li>
      </ul>

      <p>Contact Dumpster Direct Services today for a fast quote.</p>
    `,
    image: "/images/blog/dumpster-cost.jpg",
    category: "Pricing",
    author: {
      name: "Michael Davis",
      role: "Project Consultant",
    },
    publishedAt: "2026-04-01",
    readTime: "6 min read",
  },

  {
    slug: "what-size-dumpster-do-i-need",
    title: "What Size Dumpster Do I Need? Complete Guide",
    excerpt:
      "Not sure which dumpster size to rent? This guide helps you choose the right dumpster for your project.",
    content: `
      <p>Choosing the right dumpster size ensures your project runs smoothly and avoids additional costs.</p>

      <h2>10 Yard Dumpster</h2>
      <ul>
        <li>Small cleanouts</li>
        <li>Garage cleanups</li>
      </ul>

      <h2>20 Yard Dumpster</h2>
      <ul>
        <li>Roofing projects</li>
        <li>Home renovations</li>
      </ul>

      <h2>30 Yard Dumpster</h2>
      <ul>
        <li>Construction debris</li>
        <li>Large home cleanouts</li>
      </ul>

      <h2>40 Yard Dumpster</h2>
      <ul>
        <li>Commercial jobs</li>
        <li>Demolition projects</li>
      </ul>

      <p>Need help choosing? Contact Dumpster Direct Services today.</p>
    `,
    image: "/images/blog/dumpster-size.jpg",
    category: "Guides",
    author: {
      name: "Jessica Parker",
      role: "Rental Specialist",
    },
    publishedAt: "2026-03-28",
    readTime: "7 min read",
  },

  {
    slug: "what-can-you-put-in-a-dumpster",
    title: "What Can You Put in a Dumpster? Full Guide",
    excerpt:
      "Learn what items are allowed in a dumpster and what items are prohibited before renting.",
    content: `
      <p>Knowing what you can throw away in a dumpster prevents delays and extra charges.</p>

      <h2>Allowed Items</h2>
      <ul>
        <li>Household junk</li>
        <li>Construction debris</li>
        <li>Furniture</li>
        <li>Yard waste</li>
      </ul>

      <h2>Prohibited Items</h2>
      <ul>
        <li>Hazardous chemicals</li>
        <li>Paint</li>
        <li>Batteries</li>
        <li>Tires</li>
      </ul>

      <p>Always check with Dumpster Direct Services for restrictions.</p>
    `,
    image: "/images/blog/what-can-you-throw.jpg",
    category: "Guides",
    author: {
      name: "Robert Miller",
      role: "Operations Manager",
    },
    publishedAt: "2026-03-20",
    readTime: "5 min read",
  },

  {
    slug: "dumpster-rental-for-home-cleanout",
    title: "Dumpster Rental for Home Cleanouts: Complete Guide",
    excerpt:
      "Planning a home cleanout? Learn how a dumpster rental makes the process fast and easy.",
    content: `
      <p>Home cleanouts generate a lot of waste. Renting a dumpster simplifies disposal.</p>

      <h2>Best Dumpster Sizes for Cleanouts</h2>
      <ul>
        <li>10 yard for small cleanouts</li>
        <li>20 yard for medium homes</li>
        <li>30 yard for large homes</li>
      </ul>

      <h2>Benefits of Dumpster Rental</h2>
      <ul>
        <li>Convenience</li>
        <li>Time saving</li>
        <li>Cost efficient</li>
      </ul>

      <p>Contact Dumpster Direct Services today.</p>
    `,
    image: "/images/blog/home-cleanout.jpg",
    category: "Residential",
    author: {
      name: "Amanda Lewis",
      role: "Customer Support",
    },
    publishedAt: "2026-03-12",
    readTime: "6 min read",
  },

  {
    slug: "construction-dumpster-rental-guide",
    title: "Construction Dumpster Rental: Everything You Need to Know",
    excerpt:
      "Learn how construction dumpster rentals work and which size is best for your job.",
    content: `
      <p>Construction projects create heavy debris. Renting a dumpster keeps your site clean.</p>

      <h2>Best Dumpsters for Construction</h2>
      <ul>
        <li>20 yard dumpster</li>
        <li>30 yard dumpster</li>
        <li>40 yard dumpster</li>
      </ul>

      <h2>Common Construction Debris</h2>
      <ul>
        <li>Drywall</li>
        <li>Wood</li>
        <li>Roofing materials</li>
        <li>Concrete</li>
      </ul>

      <p>Dumpster Direct Services offers fast delivery.</p>
    `,
    image: "/images/blog/construction-dumpster.jpg",
    category: "Construction",
    author: {
      name: "Daniel White",
      role: "Construction Specialist",
    },
    publishedAt: "2026-03-05",
    readTime: "8 min read",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
