/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  });
  
module.exports = withMDX({
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});

module.exports = withContentlayer({ ...nextConfig });

