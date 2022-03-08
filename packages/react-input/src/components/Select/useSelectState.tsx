import * as React from 'react';
import type { SelectState } from './Select.types';
import type { MenuProps } from '@pongo-ui/react-menu';
import { Chevron } from './Chevron';

export const useSelectState = (state: SelectState) => {
  const { appearance, danger, disabled, size, label, helperText, contentBefore, contentAfter } = state;

  const [open, setOpen] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState<Record<string, string[]>>({
    font: [''],
  });

  const onCheckedValueChange: MenuProps['onCheckedValueChange'] = (ev, { name, checkedItems }) => {
    setCurrentValue({ [name]: checkedItems });
  };

  const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
    setOpen(data.open);
  };

  state.root.appearance = appearance;
  state.root.danger = danger;
  state.root.disabled = disabled;
  state.root.size = size;
  state.root.contentBefore = contentBefore;
  state.root.contentAfter = contentAfter;
  state.root.value = currentValue.font[0];

  state.menu.open = open;
  state.menu.onOpenChange = onOpenChange;

  state.menuList.onCheckedValueChange = onCheckedValueChange;
  state.menuList.checkedValues = currentValue;

  state.select.tabIndex = 0;
  state.select.value = currentValue.font;
  state.select.children = (
    <>
      <option value="" disabled selected></option>
      <option value="segoe">segoe</option>
      <option value="calibri">calibri</option>
      <option value="arial">arial</option>
    </>
  );

  if (label) {
    state.root.label = label;
    // state.root.labelId = labelId;
    // state.input.id = labelId;
  }

  // if (helperText) {
  //   state.root.helperText = helperText;
  //   // state.root.helperTextId = helperTextId;
  //   // state.input['aria-describedby'] = helperTextId;
  // }

  state.root.contentBefore = contentBefore;

  // Default to the Chevron unless otherwise specified
  if (!contentAfter) {
    state.root.contentAfter = <Chevron visible={open} />;
  } else {
    state.root.contentAfter = contentAfter;
  }

  return state;
};
