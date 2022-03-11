import type { IconProps } from '../index';

export type CreateIconProps = {
  /**
   * The path to generate within the svg.
   */
  path: JSX.Element;

  /**
   * The default props to provide to the svg wrapper.
   */
  defaultProps?: IconProps;

  /**
   * The display name of the icon
   */
  displayName: string;
};
