/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'src', 'styles'),
            path.join(__dirname, 'src', 'pages', '**'),
            path.join(__dirname, 'src', 'components', '**', '**'),
        ],
    },
}
