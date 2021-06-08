module.exports = {
    eslint: true,
    future: { webpack5: true },
    webpack: (config) => {
        // Unset client-side javascript that only works server-side
        config.resolve.fallback = { fs: false, module: false };

        return config;
    },
    images: {
        domains: ['upload.wikimedia.org']
    }
};
