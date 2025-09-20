import type { ReactNode } from 'react';
import { useLocation, Link } from 'react-router';
import { Button, Column, Row } from '@carbon/react';

import { pathKeysToPage } from '~/util/routes';
import { docPages, transformDocsPageKey } from '~/util/toc';

import type { TocEntry } from '@stefanprobst/rehype-extract-toc';

type ColSingleSizeType = { span: number, offset?: number };
type ColSizeType = {
  sm: ColSingleSizeType,
  md: ColSingleSizeType,
  lg: ColSingleSizeType,
}

const TOC = ({ toc }: { toc: TocEntry[] }) => {
  const tocNavigate = (id: string | undefined) => {
    document.getElementById(id ?? '')?.scrollIntoView();
    window.location.hash = id ?? '';
  }

  return (
    <aside className="toc">
      <ol className="toc__list">
        {/* Only supporting upto and including h3. */}
        {toc?.map(({depth, value, id, children}) => (
          <>
            <li id={`toc-link-${id}`} className="toc__item">
              <a onClick={() => tocNavigate(id)} className="toc__item_link">{value}</a>
            </li>
            {children && (
              children.map(({depth, value, id}) => (
                <li id={`toc-link-${id}`} style={{ marginLeft: '1rem' }} className="toc__item">
                  <a onClick={() => tocNavigate(id)} className="toc__item_link">{value}</a>
                </li>
              ))
            )}
          </>
        ))}
      </ol>
    </aside>
  )
}

export default function DocsPageContainer({ children }: { children: ReactNode }) {
  const loc = useLocation();
  // match location path to docs page.
  const pageKey = pathKeysToPage[`${loc.pathname}${loc.pathname !== '/' ? '/' : ''}`];
  // match page to toc content.
  const toc = docPages[transformDocsPageKey(pageKey)][0];

  // static var of column responsive sizes.
  const colSizes = {
    sm: 4,
    md: 8,
    lg: 12,
    // xlg: 12,
  };

  return (
    <Row>
      <Column className="docs-page-container-row__readme" {...colSizes}>
        {children}
      </Column>
      <Column className="docs-page-container-row__toc">
        <TOC toc={toc?.children ?? []} />
      </Column>
    </Row>
  );
}
