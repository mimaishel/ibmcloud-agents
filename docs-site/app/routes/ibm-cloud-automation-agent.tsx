import type { Route } from "./+types/home";

import AutomationAgent from '../docs/agents/ibm-cloud-automation-agent.mdx';

import { components } from "~/theme/carbon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IBM Cloud MCP Agents | Cloud Automation Agent" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <AutomationAgent components={components}/>
  );
}