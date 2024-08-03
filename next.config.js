import createMDX from "@next/mdx";
import Shiki from "@shikijs/rehype";
import { transformerNotationDiff, transformerMetaHighlight } from "@shikijs/transformers";
import Mango from "./src/utils/mango.json" assert { type: "json" };

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: ["imgs.search.brave.com", "utfs.io", "avatars.githubusercontent.com"],
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        Shiki,
        { theme: "poimandres", langs: [Mango], transformers: [transformerMetaHighlight(), transformerNotationDiff()] },
      ],
    ],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
