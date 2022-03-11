import * as React from 'react';
import { renderIcon, useIcon, useIconStyles } from '../components/Icon';
import type { IconProps } from '../Icon';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import type { CreateIconProps } from './createIcon.types';

export const createIcon = (props: CreateIconProps) => {
  const { svg, displayName } = props;

  const IconComponent: ForwardRefComponent<IconProps> = React.forwardRef((iconProps, ref) => {
    const mergedProps = { children: svg, ...iconProps };
    const state = useIcon(mergedProps as IconProps, ref);

    useIconStyles(state);

    return renderIcon(state);
  });

  IconComponent.displayName = `${displayName}Icon`;

  return React.memo(IconComponent);
};
