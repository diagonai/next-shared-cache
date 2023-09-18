/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    experimental: {
        incrementalCacheHandlerPath: require.resolve('./cache-handler'),
        isrFlushToDisk: false,
    },
};

module.exports = nextConfig;
