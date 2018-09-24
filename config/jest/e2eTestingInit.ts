export const isDebugging = ():any => {
    const debuggingMode = {
        puppeteer: {
            headless: false,
            slowMo: 80,
            args: ['--window-size=1920,1080']
        },
        jasmine: 16000
    };

    return process.env.NODE_ENV === 'debug' ? debuggingMode : false;
}
