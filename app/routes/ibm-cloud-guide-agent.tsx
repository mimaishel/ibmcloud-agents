import type { Route } from "./+types/home";

import GuideAgent from '../docs/agents/ibm-cloud-guide-agent.mdx';

import { components } from "~/theme/carbon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IBM Cloud MCP Agents | Cloud Guide Agent" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <GuideAgent components={components}/>
  );
}
