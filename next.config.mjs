/** @type {import('next').NextConfig} */
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import removeImports from 'next-remove-imports';
import createMDX from '@next/mdx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'src/styles')],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [],
  },
});

export const ri = removeImports({});

export default withMDX(nextConfig);
