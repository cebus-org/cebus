import type { ToolbarContextValues, ToolbarState } from './Toolbar.types';

export function useToolbarContextValues(state: ToolbarState): ToolbarContextValues {
  const { appearance = 'primary' } = state;

  const toolbar = {
    appearance,
  };

  return { toolbar };
}
