import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeExtractToc from "@stefanprobst/rehype-extract-toc";
import rehypeExtractTocExport from "@stefanprobst/rehype-extract-toc/mdx";
import mdxMermaid from 'mdx-mermaid'

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [
        remarkGfm,
        [mdxMermaid, {output: 'svg'}],
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeExtractToc,
        rehypeExtractTocExport
      ]
    }), reactRouter(), tsconfigPaths()
  ],
});
