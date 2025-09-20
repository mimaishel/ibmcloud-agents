import { Breadcrumb, BreadcrumbItem } from "@carbon/react";
import { useMemo } from "react";
import { useLocation, Link } from "react-router";

import config from "~/docs.config";
import type { PathType } from "~/types/config";

// type uiBreadcrumbs = {
//   breadcrumbLabel: string,
//   href: string
// }[];

const BreadCrumbs = () => {
  const loc = useLocation();
  const pathNames = loc.pathname.split('/');
  pathNames.shift();

  const routes = config.routes;
  const breadcrumbs = useMemo(() => {
    const crumbs = [];
    let pathObj: PathType | null = null;
    for (let i = 0; i < pathNames.length - 1; i += 1) {
      const pathName = `${pathNames[i]}/`;
      pathObj = pathObj && pathObj?.paths ? pathObj.paths[pathName] : routes[pathName];

      crumbs.push({ breadcrumbLabel: pathObj?.breadcrumbLabel });
    }
    return crumbs;
  }, [pathNames]);

  return (
    <Breadcrumb className="breadcrumbs">
      <BreadcrumbItem>
        <Link to="/">Home</Link>
      </BreadcrumbItem>
      {breadcrumbs.map(({ breadcrumbLabel }, idx) => (
        <BreadcrumbItem key={`breadcrumb-${idx}`} isCurrentPage>
          {breadcrumbLabel}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}

export default BreadCrumbs;
