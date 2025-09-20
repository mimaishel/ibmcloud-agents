import React from "react";
import { OrderedList, UnorderedList, ListItem, Link, CodeSnippet, Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from "@carbon/react";

import type { MDXComponents } from 'mdx/types';

// to avoid collisions with <code> which for blocks is wrapped in <pre>.
const PreBlock = ({ children, ...props }: any) => {
  const codeChild = React.Children.only(children);
  return (
    <CodeSnippet type="multi" feedback="Copied to clipboard" {...props} style={{ margin: '0.5rem 0', maxInlineSize: 'none' }}>
      {codeChild.props.children}
    </CodeSnippet>
  );
}

export const components: MDXComponents = {
  ul: (properties: any) => <UnorderedList {...properties} style={{ paddingLeft: '1.2rem', margin: '0.5rem 0' }} />,
  ol: (properties: any) => <OrderedList {...properties} style={{ paddingLeft: '1.8rem', margin: '0.5rem 0' }}/>,
  li: (properties: any) => <ListItem {...properties} />,
  a: (properties: any) => <Link {...properties} />,
  code: (properties: any) => <CodeSnippet type="inline" feedback="Copied to clipboard" {...properties} />,
  pre: (properties: any) => <PreBlock {...properties}/>,
  // h1: (properties: any) => <h1 {...properties} style={{ marginTop: '0.5rem', marginBottom: '1rem' }} />,
  // h2: (properties: any) => <h2 {...properties} style={{ marginTop: '1.5rem', marginBottom: '1rem' }} />,
  table: (props: any) => <Table {...props} style={{margin: '0.5rem 0'}}/>,
  thead: (props: any) => <TableHead {...props} />,
  tbody: (props: any) => <TableBody {...props} />,
  th: (props: any) => <TableHeader {...props} />,
  tr: (props: any) => <TableRow {...props} />,
  td: (props: any) => <TableCell {...props} />,
  img: (props: any) => <img {...props} style={{ maxWidth: '100%', padding: '0.5rem 0' }} />
}
