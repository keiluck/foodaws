/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove the export output since we need server-side features
    experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'prisma']
    }
}

module.exports = nextConfig
