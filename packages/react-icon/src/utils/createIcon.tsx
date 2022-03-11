import * as React from 'react';
import { renderIcon, useIcon, useIconStyles } from '../components/Icon';
import type { IconProps } from '../Icon';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import type { CreateIconProps } from './createIcon.types';

export const createIcon = (props: CreateIconProps) => {
  const { path, displayName, defaultProps } = props;

  const IconComponent: ForwardRefComponent<IconProps> = React.forwardRef((iconProps, ref) => {
    const mergedProps = { children: path, ...iconProps, ...defaultProps };
    const state = useIcon(mergedProps, ref);

    useIconStyles(state);

    return renderIcon(state);
  });

  IconComponent.displayName = `${displayName}Icon`;

  return React.memo(IconComponent);
};
