/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Task 5: permanent redirect from the duplicate "what size dumpster"
      // post to the canonical 2026 version.
      {
        source: "/blog/what-size-dumpster-do-i-need",
        destination: "/blog/what-size-dumpster-do-i-need-2026",
        permanent: true,
      },
      // Phase 1: standardize the Jamestown slug — the historical "-nd" variant
      // 301s to the canonical /dumpster-rental/jamestown.
      {
        source: "/dumpster-rental/jamestown-nd",
        destination: "/dumpster-rental/jamestown",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
