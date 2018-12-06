const bundles = require('./bundles');

(async () => {
    console.log('Initiating build of modern and legacy bundles...\n');
    await bundles();

    console.log('Build completed!');
})();
