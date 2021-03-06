## API Report File for "@cebus/react-toolbar"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ARIAButtonSlotProps } from '@fluentui/react-aria';
import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';

// @public (undocumented)
export const renderToolbar: (state: ToolbarState, contextValues: ToolbarContextValues) => JSX.Element;

// @public (undocumented)
export const renderToolbarButton: (state: ToolbarButtonState) => JSX.Element;

// @public
export const Toolbar: ForwardRefComponent<ToolbarProps>;

// @public
export const ToolbarButton: ForwardRefComponent<ToolbarButtonProps>;

// Warning: (ae-forgotten-export) The symbol "ToolbarButtonCommons" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type ToolbarButtonProps = ComponentProps<ToolbarButtonSlots> & ToolbarButtonCommons;

// @public (undocumented)
export type ToolbarButtonSlots = {
    root: Slot<ARIAButtonSlotProps>;
};

// @public (undocumented)
export type ToolbarButtonState = ComponentState<ToolbarButtonSlots> & ToolbarButtonCommons;

// @public (undocumented)
export type ToolbarContextValues = {
    toolbar: ToolbarContextValue;
};

// Warning: (ae-forgotten-export) The symbol "ToolbarCommons" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type ToolbarProps = ComponentProps<ToolbarSlots> & ToolbarCommons;

// @public (undocumented)
export type ToolbarSlots = {
    root: Slot<'header'>;
};

// @public (undocumented)
export type ToolbarState = ComponentState<ToolbarSlots> & ToolbarCommons;

// @public (undocumented)
export const useToolbar: (props: ToolbarProps, ref: React_2.Ref<HTMLElement>) => ToolbarState;

// @public (undocumented)
export const useToolbarButton: (props: ToolbarButtonProps, ref: React_2.Ref<HTMLElement>) => ToolbarButtonState;

// @public (undocumented)
export const useToolbarButtonStyles: (state: ToolbarButtonState) => ToolbarButtonState;

// @public (undocumented)
export const useToolbarStyles: (state: ToolbarState) => ToolbarState;

// Warnings were encountered during analysis:
//
// lib/components/Toolbar/Toolbar.types.d.ts:27:5 - (ae-forgotten-export) The symbol "ToolbarContextValue" needs to be exported by the entry point index.d.ts

// (No @packageDocumentation comment for this package)

```
