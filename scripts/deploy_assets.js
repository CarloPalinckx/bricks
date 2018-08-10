const Storage = require('@google-cloud/storage');
const path = require('path');
const fs = require('fs');
const recurseFs = require('recursive-readdir');
const { ASSETS_BUCKET_NAME } = process.env;

const storage = new Storage({
    keyFilename: `${path.resolve(__dirname)}/../gcp.json`,
});

const bucket = storage.bucket(ASSETS_BUCKET_NAME);
const assetsFolder = 'assets';

recurseFs(assetsFolder, (error, files) => {
    if (error) {
        console.error(`couldn't scan ${assetsFolderName}`, error);
    }

    files.forEach(file => {
        const destination = file.indexOf(assetsFolder) === 0 ? file.slice(assetsFolder.length, file.length) : file;

        bucket
            .upload(file, {
                destination,
                gzip: true,
                public: true,
                metadata: {
                    cacheControl: 'public, max-age=0',
                },
            })
            .then(() => {
                console.log(`${file} uploaded to ${ASSETS_BUCKET_NAME}${destination}.`);
            })
            .catch(err => {
                console.error('ERROR:', err);
            });
    });
});
