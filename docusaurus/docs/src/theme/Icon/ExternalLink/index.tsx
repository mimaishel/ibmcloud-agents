import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/ExternalLink';

import { Launch } from '@carbon/icons-react';

// References symbol in docusaurus-theme-classic/src/inlineSvgSprites.ts
// See why: https://github.com/facebook/docusaurus/issues/5865
const svgSprite = '#theme-svg-external-link';

export default function IconExternalLink({
  width = 13.5,
  height = 13.5,
}: Props): ReactNode {
  return <Launch style={{ marginLeft: '0.3rem', marginBottom: '0.1rem' }} width={width} height={height} />
}
