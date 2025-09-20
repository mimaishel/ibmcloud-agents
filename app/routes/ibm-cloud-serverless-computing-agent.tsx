import type { Route } from "./+types/home";

import ServerlessAgent from '../docs/agents/ibm-cloud-serverless-computing-agent.mdx';

import { components } from "~/theme/carbon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IBM Cloud MCP Agents | Cloud Serverless Agent" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <ServerlessAgent components={components} />
  );
}
