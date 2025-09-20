import type { Route } from "./+types/home";

import BaseAgentREADME from '../docs/agents/base-agent.mdx';

import { components } from '~/theme/carbon';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IBM Cloud MCP Agents | Base Agent" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <BaseAgentREADME components={components}/>
  );
}
