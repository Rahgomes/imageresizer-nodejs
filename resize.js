const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const filepath = process.argv[2];

const dirname = path.dirname(filepath);

const [filename, extension] = path.basename(filepath).split(".");

const destination = `C://${dirname}/redimensionado`;

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

const sizes = [128, 64, 48, 32, 24, 16];

sizes.forEach(size => {
    sharp(`${filename}.${extension}`)
        .clone()
        .resize({ width: size })
        .toFile(`${destination}/${filename}-${size}.${extension}`)
        .then(info => console.log(info))
        .catch(error => console.log(error));
});
