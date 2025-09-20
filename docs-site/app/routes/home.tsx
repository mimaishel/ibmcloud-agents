import type { Route } from "./+types/home";

import HomeREADME from '../docs/home.mdx';
import DocsPageContainer from "~/containers/DocsPageContainer";
import { components } from '~/theme/carbon';

import { pathKeysToPage } from "~/util/routes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IBM Cloud MCP Agents | Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <HomeREADME components={components}/>
  );
}
