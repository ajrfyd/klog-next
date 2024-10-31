/** @type {import('next').NextConfig} */
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
// import removeImports from 'next-remove-imports';
// import createMDX from '@next/mdx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  sassOptions: {
    includePaths: [join(__dirname, 'src/styles')],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // async rewrites() {
  //   return [
  //     {
  //       source: '/posts/:path*',
  //       destination: 'http://localhost:5000/posts/:path*', // Nest.js 서버 주소
  //     },
  //   ];
  // },
};

// const withMDX = createMDX({
//   options: {
//     rehypePlugins: [],
//   },
// });

// export const ri = removeImports({});

// export default withMDX(nextConfig);
export default nextConfig;
