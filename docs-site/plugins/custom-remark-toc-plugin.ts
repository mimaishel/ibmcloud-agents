// import { visit } from "unist-util-visit";
// import type { Plugin } from "unified";
// import type { Node, Parent, Literal } from "unist";

// interface TOCItem {
//   depth: number;
//   value: string;
//   id?: string;
// };

// export const customExtractToc: Plugin<[], Parent> = () => {
//   return (tree, _) => {
//     const toc: TOCItem[] = [];
//     visit(tree, 'heading', (node: any) => {
//       const headingText = node.children
//         .filter((content: any) => content.type === 'text' || content.type === 'inlineCode')
//         .map((content: any) => content.value)
//         .join(' ');

//       if (headingText) {
//         toc.push({
//           depth: node.depth,
//           value: headingText,
//           id: node.data?.id
//         });
//       }
//     });

//     tree.children.unshift({
//       type: 'mdxjsEsm',
//       data: `export const toc = ${JSON.stringify(toc)}`
//     });
//   }
// };
