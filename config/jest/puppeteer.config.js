module.exports = {
    launch: {
        dumpio: true,
        headless: process.env.HEADLESS !== 'false',
        defaultViewport: {
            width: 1920,
            height: 1080,
        },
    },
};
