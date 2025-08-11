import React, {type ReactNode} from 'react';
import type {Props} from '@theme/Icon/Menu';

import { Menu } from '@carbon/icons-react';

export default function IconMenu({
  width = 30,
  height = 30,
  className,
  ...restProps
}: Props): ReactNode {
  return (
    // <svg
    //   className={className}
    //   width={width}
    //   height={height}
    //   viewBox="0 0 30 30"
    //   aria-hidden="true"
    //   {...restProps}>
    //   <path
    //     stroke="currentColor"
    //     strokeLinecap="round"
    //     strokeMiterlimit="10"
    //     strokeWidth="2"
    //     d="M4 7h22M4 15h22M4 23h22"
    //   />
    // </svg>
    <Menu width={width} height={height} className={className} style={{ marginRight: '0.5rem' }} />
  );
}
