import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { InputWrapperCommons } from '../InputWrapper';
import { InputWrapper } from '../InputWrapper';
import { MenuPopover, MenuList } from '@pongo-ui/react-menu';

export type SelectSlots = {
  /**
   * The root of the Input. This is the wrapper component that handles it's appearance.
   */
  root: NonNullable<Slot<typeof InputWrapper>>;

  /**
   * Select that displays the active value of the Select component and handles accessability.
   */
  select: NonNullable<Slot<'select'>>;

  /**
   * The wrapper component that manages state for a popup MenuList and MenuTrigger
   */
  menu: any;

  /**
   * Wrapper for the Menu trigger element.
   */
  menuTrigger: any;

  /**
   *  Wrapper for `MenuList` used to add styling and interaction support.
   */
  menuPopover: NonNullable<Slot<typeof MenuPopover>>;

  /**
   * Wrapper for `MenuItems`. This is what handles the items context.
   */
  menuList: NonNullable<Slot<typeof MenuList>>;
};

type SelectCommons = {
  /**
   * The starting value for a uncontrolled Input. If `true` then the Input will be enabled.
   * Mutually exclusive with `value` prop.
   *
   * @defaultValue ''
   */
  defaultValue?: string[];

  /**
   * The current value for a controlled Input. If `true` then the Input will be enabled.
   * Mutually exclusive with `defaultValue` prop.
   */
  value?: string[];

  /**
   * Callback to be called when the value changes.
   */
  onCheckedValueChange?: (ev: React.MouseEvent | React.KeyboardEvent, data: { checkedItems: string[] }) => void;

  /**
   * The content to render before the Select.
   */
  contentBefore?: string | number | JSX.Element;

  /**
   * The content to render after the Select.
   */
  contentAfter?: string | number | JSX.Element;

  /**
   * The helper text to render below the Input.
   */
  helperText?: string;

  /**
   * The label for the Input.
   */
  label?: string;

  /**
   * The placeholder text for the Input.
   */
  placeholder?: string;
};

export type SelectProps = ComponentProps<Partial<SelectSlots>> & SelectCommons & InputWrapperCommons;

export type SelectState = ComponentState<SelectSlots> & SelectCommons & InputWrapperCommons;
