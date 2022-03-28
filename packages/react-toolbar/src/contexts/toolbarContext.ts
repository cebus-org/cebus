import { createContext, useContextSelector } from '@fluentui/react-context-selector';
import { Context, ContextSelector } from '@fluentui/react-context-selector';

export type ToolbarContextValue = {
  appearance: 'subtle' | 'primary';
};

const ToolbarContext: Context<ToolbarContextValue> = createContext<ToolbarContextValue>({
  appearance: 'primary',
});

export const ToolbarProvider = ToolbarContext.Provider;

export const useToolbarContext = <T>(selector: ContextSelector<ToolbarContextValue, T>) =>
  useContextSelector(ToolbarContext, selector);
