import { useEffect, useState, type ReactNode } from "react";
import type { CarbonIconType } from "@carbon/react/icons";
import { Link } from "react-router";
import {
  Header,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  Link as CarbonLink,
} from "@carbon/react";

import { LogoGithub, Asleep, Light, Devices } from "@carbon/react/icons";

import type { PathType, RoutesType, SiteNameType } from '~/types/config';

interface ThemeType {
  label: string,
  value: string,
  icon: ReactNode,
};

const iconSize = 25;
const iconClassName = 'theme-switcher__icon';
const themePreferenceKey = 'ibm-cloud-docs-theme-preference';

const themePreferenceConversion: Record<string, number> = {
  'system': 0,
  'white': 1,
  'g100': 2,
};

const themes: ThemeType[] = [
  { label: 'System', value: 'system', icon: <Devices size={iconSize} className={iconClassName}/>},
  { label: 'Light', value: 'white', icon: <Light size={iconSize} className={iconClassName}/>},
  { label: 'Dark', value: 'g100', icon: <Asleep size={iconSize} className={iconClassName}/>},
];

const themePreferenceFetch = () => {
  const themePreference = localStorage.getItem(themePreferenceKey);
  return themePreference && themePreferenceConversion[themePreference] ? themePreferenceConversion[themePreference] : 0;
}

interface LeftNavComputedItemsProps {
  routes: RoutesType
};
const LeftNavComputedItems = ({ routes }: LeftNavComputedItemsProps) => {
  const staticSideMenuProps = {
    defaultExpanded: true,
  };

  interface RecursiveComputedItemProps {
    path: PathType & { prevPath: string }
  };
  const RecursiveComputedItem = ({ path }: RecursiveComputedItemProps) => (
    <>
      {Object.entries(path?.paths ?? []).map(([k, v]) => {
        const newPath = path.prevPath.endsWith('/') ? `${path.prevPath}${k}` : `${path.prevPath}/${k}`;
        return (
          <>
            {v?.paths && (
              <SideNavMenu title={path.breadcrumbLabel} {...staticSideMenuProps}>
                <RecursiveComputedItem path={{...v, prevPath: newPath}} />
              </SideNavMenu>
            )}
            {!v?.paths && (
              <SideNavMenuItem element={Link} to={path.prevPath !== '/' ? `/${newPath.endsWith('/') ? newPath.slice(0, -1) : newPath}` : newPath.endsWith('/') ? newPath.slice(0, -1) : newPath}>
                {v.breadcrumbLabel}
              </SideNavMenuItem>
            )}
          </>
        );
      })}
    </>
  )

  return (
    <SideNavItems>
      {Object.entries(routes).map(([k, v]) => (
        <>
          {v?.paths && (
            <SideNavMenu title={v.breadcrumbLabel} {...staticSideMenuProps}>
              <RecursiveComputedItem path={{...v, prevPath: k}} />
            </SideNavMenu>
          )}
          {!v?.paths && (
            <SideNavMenuItem element={Link} to={k !== '/' ? `/${k}` : k}>
              {v.breadcrumbLabel}
            </SideNavMenuItem>
          )}
        </>
      ))}
    </SideNavItems>
  );
}

interface HeaderNavProps {
  routes: RoutesType,
  githubUrl: string,
  siteName: SiteNameType
};
const HeaderNav = ({ routes, githubUrl, siteName }: HeaderNavProps) => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(true);

  const handleClickSideNavExpand = () => {
    setIsSideNavExpanded((prev) => !prev);
  };

  const [selectedTheme, setSelectedTheme] = useState(0);
  const handleThemeChange = () => {
    setSelectedTheme((prev) => (prev + 1) % themes.length)
  }

  useEffect(() => setSelectedTheme(themePreferenceFetch()), []);

  useEffect(() => {
    const themeVal = themes[selectedTheme].value;
    document.documentElement.setAttribute('data-carbon-theme', themeVal);
    localStorage.setItem(themePreferenceKey, themeVal);
  }, [selectedTheme])

  return (
    <Header aria-label="Carbon Tutorial" className="header-area">
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        // isCollapsible
        onClick={handleClickSideNavExpand}
        isActive={isSideNavExpanded}
      />

      <HeaderName prefix={siteName.prefix}>
        {siteName.postfixBold}
      </HeaderName>

      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Theme Switcher" tooltipAlignment="end" onClick={handleThemeChange}>
          {themes[selectedTheme].icon}
        </HeaderGlobalAction>
        <CarbonLink href={githubUrl} target="_blank">
          <HeaderGlobalAction className="github-external-action" aria-label="Github Repo" tooltipAlignment="end">
            <LogoGithub className="github-external-action__icon" size={25} />
          </HeaderGlobalAction>
        </CarbonLink>
      </HeaderGlobalBar>

      <SideNav
        aria-label="Side navigation"
        expanded={isSideNavExpanded}
        // isPersistent
        onOverlayClick={handleClickSideNavExpand}
        href="#main-content"
        onSideNavBlur={handleClickSideNavExpand}
        // isFixedNav={false}
        // isRail
      >
        <LeftNavComputedItems routes={routes} />
      </SideNav>
    </Header>
  )
}

export default HeaderNav;
