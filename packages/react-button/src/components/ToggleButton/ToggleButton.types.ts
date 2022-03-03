import type { ButtonProps, ButtonState } from '../Button/Button.types';

type ToggleButtonCommons = {
  /**
   * The controlled state of whether the ToggleButton is checked.
   *
   * @defaultValue false
   */
  checked: boolean;
};

export type ToggleButtonProps = ButtonProps &
  Partial<ToggleButtonCommons> & {
    /**
     * The uncontrolled state of whether the ToggleButton is checked.
     *
     * @defaultValue false
     */
    defaultChecked?: boolean;
  };

export type ToggleButtonState = ButtonState & ToggleButtonCommons;
