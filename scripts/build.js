const bundles = require('./bundles');

(async () => {
    console.log('Initiating build...\n');
    await bundles();

    console.log('Build completed!');
})();
