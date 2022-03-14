import { TabListProps as FluentTabListProps, TabListState as FluentTabListState } from '@fluentui/react-tabs';

export type TabListCommons = {
  /**
   * Whether to render a rail below the TabList component.
   */
  rail?: boolean;
};

export type TabListProps = FluentTabListProps & TabListCommons;

export type TabListState = FluentTabListState & TabListCommons;
