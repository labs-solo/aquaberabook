module.exports = {
    env: {
        BUILD_VERSION: (process.env.GITHUB_SHA ?? '').slice(0, 7),
        GITBOOK_ASSETS_PREFIX: process.env.GITBOOK_ASSETS_PREFIX,
        GITBOOK_ICONS_URL: process.env.GITBOOK_ICONS_URL,
        GITBOOK_ICONS_TOKEN: process.env.GITBOOK_ICONS_TOKEN,
    },

    webpack(config, { dev, webpack }) {
        config.resolve.fallback = {
            ...config.resolve.fallback,

            // Required for `swagger2openapi` to work:
            fs: false,
            path: false,
            http: false,
        };

        // Enable verbose logging in development mode
        if (dev) {
            config.plugins.push(
                new webpack.DefinePlugin({
                    __VERBOSE_LOGGING__: true,
                })
            );
        }

        return config;
    },

    async headers() {
        return [
            // Cache all static assets for 1 year
            {
                source: '/~gitbook/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },

    assetPrefix: process.env.GITBOOK_ASSETS_PREFIX,
    poweredByHeader: false,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.gitbook.io',
            },
        ],
    },
};
