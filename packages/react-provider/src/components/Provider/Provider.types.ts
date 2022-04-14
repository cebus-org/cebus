import type { FluentProviderProps, FluentProviderState, FluentProviderSlots } from '@fluentui/react-provider';
import { Theme } from '@cebus/react-theme';

export type ProviderSlots = FluentProviderSlots;

export type ProviderProps = Omit<FluentProviderProps, 'theme'> & { theme: Partial<Theme> };

export type ProviderState = Omit<FluentProviderState, 'theme'> & { theme: Theme | Partial<Theme> | undefined };
