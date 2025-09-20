import type { Route } from "./+types/home";

import AccountAdminAgent from '../docs/agents/ibm-cloud-account-admin-agent.mdx';

import { components } from "~/theme/carbon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IBM Cloud MCP Agents | Cloud Account Admin Agent" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <AccountAdminAgent components={components} />
  );
}
