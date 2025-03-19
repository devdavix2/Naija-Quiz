/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Keep only essential experiments
    webpackBuildWorker: true,
    // Remove these as they're now default in Next.js 15
    // parallelServerBuildTraces: true,
    // parallelServerCompiles: true,
  },
  // Add if using static export
  output: process.env.NEXT_OUTPUT_MODE === 'export' ? 'export' : undefined,
  // Add if using app router
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true
}

// Merge with user config
let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

function mergeConfig(base, user) {
  return user ? {
    ...base,
    ...user,
    webpack: (config, options) => {
      if (base.webpack) config = base.webpack(config, options)
      if (user.webpack) config = user.webpack(config, options)
      return config
    }
  } : base
}

export default mergeConfig(nextConfig, userConfig)
