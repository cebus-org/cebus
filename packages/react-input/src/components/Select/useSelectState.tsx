import * as React from 'react';
import type { SelectState } from './Select.types';
import { useControllableState, useMergedRefs, useId } from '@fluentui/react-utilities';
import type { MenuProps } from '@pongo-ui/react-menu';
import { Chevron } from '@pongo-ui/react-menu';

export const useSelectState = (state: SelectState) => {
  const {
    defaultValue: originalDefaultValue,
    value: originalValue,
    appearance,
    danger,
    disabled,
    size,
    label,
    contentBefore,
    contentAfter,
    onCheckedValueChange,
  } = state;
  const { id } = state.selectValue;

  const defaultValue = originalDefaultValue && { select: originalDefaultValue };
  const value = originalValue && { select: originalValue };

  const [currentValue, setCurrentValue] = useControllableState<{ select: string[] }>({
    defaultState: defaultValue,
    state: value,
    initialState: { select: [] },
  });

  const [open, setOpen] = React.useState(false);

  const labelId = label ? useId('select-label', id) : undefined;
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const onChange: MenuProps['onCheckedValueChange'] = (ev, { checkedItems }) => {
    onCheckedValueChange?.(ev, { checkedItems: checkedItems });
    setCurrentValue({ select: checkedItems });
  };

  const onOpenChange: MenuProps['onOpenChange'] = (e, data) => {
    triggerRef?.current?.focus();
    setOpen(data.open);
  };

  state.selectValue.ref = useMergedRefs(state.selectValue.ref, triggerRef);
  state.selectValue.tabIndex = 0;

  state.root.appearance = appearance;
  state.root.danger = danger;
  state.root.disabled = disabled;
  state.root.size = size;
  state.root.contentBefore = contentBefore;
  state.root.contentAfter = contentAfter;
  state.root.currentValue = currentValue.select[0];

  state.menu.open = open;
  state.menu.onOpenChange = onOpenChange;
  state.menu.onCheckedValueChange = onChange;
  state.menu.checkedValues = currentValue;

  if (label) {
    state.root.label = label;
    state.root.labelId = labelId;
    state.selectValue.id = labelId;
  }

  state.root.contentBefore = contentBefore;

  // Default to the Chevron unless otherwise specified
  if (!contentAfter) {
    state.root.contentAfter = <Chevron open={open} />;
  } else {
    state.root.contentAfter = contentAfter;
  }

  state.selectValue.children = currentValue.select;
  state.selectValue['aria-expanded'] = open;

  return state;
};
