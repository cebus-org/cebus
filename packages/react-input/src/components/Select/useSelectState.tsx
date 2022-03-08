import * as React from 'react';
import type { SelectState } from './Select.types';
import { useControllableState, useEventCallback, useMergedRefs, useId } from '@fluentui/react-utilities';
import type { MenuProps } from '@pongo-ui/react-menu';
import { Chevron } from './Chevron';

export const useSelectState = (state: SelectState) => {
  const { appearance, danger, disabled, size, label, helperText, contentBefore, contentAfter } = state;
  const { id } = state.select;

  const [open, setOpen] = React.useState(false);
  const labelId = label ? useId('select-label', id) : undefined;
  const triggerRef = React.useRef<any>(null);
  const [currentValue, setCurrentValue] = React.useState<Record<string, string[]>>({
    font: [''],
  });

  const onCheckedValueChange: MenuProps['onCheckedValueChange'] = (ev, { name, checkedItems }) => {
    setCurrentValue({ [name]: checkedItems });
  };

  const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
    triggerRef.current.focus();
    setOpen(data.open);
  };

  const onSelectChange = () => {
    // no op
  };

  const onSelectMouseDown = (ev: React.MouseEvent<HTMLSelectElement, MouseEvent>) => {
    ev.preventDefault();
  };

  const onSelectKeyDown = (ev: React.KeyboardEvent<HTMLSelectElement>) => {
    // Prevent select tag from opening using keyboard commands
    switch (ev.key) {
      case 'ArrowUp': {
        ev.preventDefault();
      }
      case 'ArrowDown': {
        ev.preventDefault();
      }
    }
  };

  state.select.ref = useMergedRefs(state.select.ref, triggerRef);
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

  state.select.value = currentValue.font[0];
  state.select.onChange = onSelectChange;
  state.select.onMouseDown = onSelectMouseDown;
  state.select.onKeyDown = onSelectKeyDown;

  state.select.children = (
    <>
      <option value="" disabled></option>
      <option value="segoe">segoe</option>
      <option value="calibri">calibri</option>
      <option value="arial">arial</option>
    </>
  );

  if (label) {
    state.root.label = label;
    state.root.labelId = labelId;
    state.select.id = labelId;
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

  const generateOptions = () => {
    console.log(state.root.children);
  };

  generateOptions();

  return state;
};
