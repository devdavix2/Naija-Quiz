<<<<<<< HEAD
let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

=======
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
<<<<<<< HEAD
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
=======
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
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
