import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { ColorTokens } from '@cebus/react-theme';

export type AvatarSlots = {
  /**
   * The root of the Avatar.
   */
  root: Slot<'span'>;

  /**
   * The initials to display within the avatar or use as a fallback. Initials come from the name prop.
   */
  initials?: Slot<'span'>;

  /**
   * The image to display for the Avatar.
   */
  image?: Slot<'img'>;
};

export type AvatarCommons = {
  /**
   * The name of the user to display or use as a fallback when using an image.
   *
   * @defaultValue "?"
   */
  name?: string;

  /**
   * The shape of the Avatar.
   *
   * @defaultValue circular
   */
  shape?: 'circular' | 'square';

  /**
   * The size of the Avatar.
   *
   * @defaultValue medium
   */
  size?: 'small' | 'medium' | 'large' | 'extra-large';

  /**
   * The color to render the background of the icon. By default the color will be chosen based on the name prop.
   */
  color?: keyof ColorTokens;
};

export type AvatarProps = ComponentProps<AvatarSlots> & AvatarCommons;

export type AvatarState = ComponentState<AvatarSlots> & AvatarCommons;
