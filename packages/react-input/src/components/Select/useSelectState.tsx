import * as React from 'react';
import type { SelectState } from './Select.types';
import { useControllableState, useMergedRefs, useId } from '@fluentui/react-utilities';
import type { MenuProps } from '@pongo-ui/react-menu';
import { MenuItemRadio } from '@pongo-ui/react-menu';
import { Chevron } from './Chevron';

export const useSelectState = (state: SelectState) => {
  const {
    defaultValue: originalDefaultValue,
    value: originalValue,
    appearance,
    danger,
    disabled,
    size,
    label,
    helperText,
    contentBefore,
    contentAfter,
    onCheckedValueChange,
  } = state;
  const { id } = state.select;

  const defaultValue = originalDefaultValue && { select: originalDefaultValue };
  const value = originalValue && { select: originalValue };

  const [currentValue, setCurrentValue] = useControllableState<{ select: string[] }>({
    defaultState: defaultValue,
    state: value,
    initialState: { select: ['segoe'] },
  });

  const [open, setOpen] = React.useState(false);

  const labelId = label ? useId('select-label', id) : undefined;
  const triggerRef = React.useRef<HTMLSelectElement>(null);

  const onChange: MenuProps['onCheckedValueChange'] = (ev, { checkedItems }) => {
    onCheckedValueChange?.(ev, { checkedItems: checkedItems });
    setCurrentValue({ select: checkedItems });
  };

  const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
    triggerRef?.current?.focus();
    setOpen(data.open);
  };

  const onSelectChange = () => {
    /** no op */
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
  state.root.currentValue = currentValue.select[0];

  state.menu.open = open;
  state.menu.onOpenChange = onOpenChange;

  state.menuList.onCheckedValueChange = onChange;
  state.menuList.checkedValues = currentValue;

  state.select.value = currentValue.select[0];
  state.select.onChange = onSelectChange;
  state.select.onMouseDown = onSelectMouseDown;
  state.select.onKeyDown = onSelectKeyDown;

  if (label) {
    state.root.label = label;
    state.root.labelId = labelId;
    state.select.id = labelId;
  }

  if (helperText) {
    state.root.helperText = helperText;
    // state.root.helperTextId = helperTextId;
    // state.input['aria-describedby'] = helperTextId;
  }

  state.root.contentBefore = contentBefore;

  // Default to the Chevron unless otherwise specified
  if (!contentAfter) {
    state.root.contentAfter = <Chevron visible={open} />;
  } else {
    state.root.contentAfter = contentAfter;
  }

  /**
   * Generates native html options for the select component based on the child Options provided.
   */
  const generateOptions = React.useMemo(() => {
    const options = [<option value="" disabled key="default"></option>];
    const children: any = state.root.children;
    const length: number = children?.length;

    if (length) {
      for (let i = 0; i < length; i++) {
        if (typeof children[i] === typeof MenuItemRadio) {
          options.push(
            <option value={children[i].props.value} disabled key={i}>
              {children[i].props.children}
            </option>,
          );
        }
      }
    }

    return options;
  }, [state.root.children]);

  state.select.children = generateOptions;

  return state;
};
