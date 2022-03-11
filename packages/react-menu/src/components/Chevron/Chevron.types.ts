import type { ComponentProps, ComponentState } from '@fluentui/react-utilities';
import { IconCommons, IconSlots } from '@pongo-ui/react-icon';

export type ChevronSlots = IconSlots;

export type ChevronCommons = {
  /**
   * Whether Menu is currently open.
   */
  open?: boolean;
} & IconCommons;

export type ChevronProps = ComponentProps<ChevronSlots> & ChevronCommons;

export type ChevronState = ComponentState<ChevronSlots> & ChevronCommons;
