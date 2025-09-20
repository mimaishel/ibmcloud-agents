import { type RouteConfig, index, route } from "@react-router/dev/routes";
import { flatRoutes } from "./util/routes";

export default [
  ...flatRoutes
  // ...Object.keys(routesPages).map((routePath) => route(routePath, routesPages[routePath]))
  // route("agents/base-agent/", "routes/base-agent.tsx"),
  // route("agents/account-admin-agent", "routes/ibm-cloud-account-admin-agent.tsx"),
] satisfies RouteConfig;
