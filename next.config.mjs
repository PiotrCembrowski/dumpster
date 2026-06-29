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
    ]
  },
}

export default nextConfig
