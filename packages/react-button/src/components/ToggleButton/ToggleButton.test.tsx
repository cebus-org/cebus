import React from 'react';
import { ToggleButton } from './ToggleButton';
import { ToggleButtonProps } from './ToggleButton.types';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';
import { jest } from '@jest/globals';
import userEvent from '@testing-library/user-event';

describe('ToggleButton', () => {
  isConformant({
    Component: ToggleButton as React.FunctionComponent<ToggleButtonProps>,
    displayName: 'ToggleButton',
  });

  describe('renders', () => {
    it('renders correctly', () => {
      const result = render(<ToggleButton>Test Button</ToggleButton>);
      expect(result.container).toMatchSnapshot();
    });

    it('renders as anchor correctly', () => {
      const result = render(
        <ToggleButton as="a" href="https://www.bing.com">
          Test Button
        </ToggleButton>,
      );

      const anchor = result.getByRole('button');
      expect(anchor.tagName).toBe('A');

      expect(result.container).toMatchSnapshot();
    });

    it('renders tag name correctly', () => {
      const { getByRole } = render(<ToggleButton>Test Button</ToggleButton>);
      const button = getByRole('button');

      expect(button.tagName).toBe('BUTTON');
    });
  });

  describe('Focus', () => {
    it('can be focused', () => {
      const { getByRole } = render(<ToggleButton>Test Button</ToggleButton>);
      const button = getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      userEvent.tab();
      expect(document.activeElement).toEqual(button);
    });

    it('does not focus when disabled', () => {
      const { getByRole } = render(<ToggleButton disabled>Test Button</ToggleButton>);
      const button = getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      userEvent.tab();
      expect(document.activeElement).not.toEqual(button);
    });
  });

  describe('State changes', () => {
    it('triggers a callback when clicked', () => {
      const onClick = jest.fn();
      const { getByRole } = render(<ToggleButton onClick={onClick}>Test Button</ToggleButton>);

      userEvent.click(getByRole('button'));
      expect(onClick).toHaveBeenCalled();
    });

    it('does not trigger a callback when disabled and clicked', () => {
      const onClick = jest.fn();
      const { getByRole } = render(
        <ToggleButton disabled onClick={onClick}>
          Test Button
        </ToggleButton>,
      );

      userEvent.click(getByRole('button'));
      expect(onClick).not.toHaveBeenCalled();
    });

    describe('aria-pressed', () => {
      it('(uncontrolled) - Triggers a change in `aria-pressed` when clicked', () => {
        const { getAllByRole } = render(
          <>
            <ToggleButton defaultChecked={false}>Test Button</ToggleButton>
            <ToggleButton defaultChecked>Test Button</ToggleButton>
          </>,
        );
        const [initiallyUnchecked, initiallyChecked] = getAllByRole('button');

        expect(initiallyUnchecked.getAttribute('aria-pressed')).toBe('false');
        userEvent.click(initiallyUnchecked);
        expect(initiallyUnchecked.getAttribute('aria-pressed')).toBe('true');
        userEvent.click(initiallyUnchecked);
        expect(initiallyUnchecked.getAttribute('aria-pressed')).toBe('false');

        expect(initiallyChecked.getAttribute('aria-pressed')).toBe('true');
        userEvent.click(initiallyChecked);
        expect(initiallyChecked.getAttribute('aria-pressed')).toBe('false');
        userEvent.click(initiallyChecked);
        expect(initiallyChecked.getAttribute('aria-pressed')).toBe('true');
      });

      it('(controlled) - Does not trigger a change in `aria-pressed` when clicked', () => {
        const { getAllByRole } = render(
          <>
            <ToggleButton checked={false}>Test Button</ToggleButton>
            <ToggleButton checked>Test Button</ToggleButton>
          </>,
        );
        const [unchecked, checked] = getAllByRole('button');

        expect(unchecked.getAttribute('aria-pressed')).toBe('false');
        userEvent.click(unchecked);
        expect(unchecked.getAttribute('aria-pressed')).toBe('false');

        expect(checked.getAttribute('aria-pressed')).toBe('true');
        userEvent.click(checked);
        expect(checked.getAttribute('aria-pressed')).toBe('true');
      });
    });

    it('(disabled) - Does not trigger a change in `aria-pressed` when clicked', () => {
      const { getAllByRole } = render(
        <>
          <ToggleButton disabled>Test Button</ToggleButton>
          <ToggleButton defaultChecked disabled>
            Test Button
          </ToggleButton>
        </>,
      );
      const [unchecked, checked] = getAllByRole('button');

      expect(unchecked.getAttribute('aria-pressed')).toBe('false');
      userEvent.click(unchecked);
      expect(unchecked.getAttribute('aria-pressed')).toBe('false');

      expect(checked.getAttribute('aria-pressed')).toBe('true');
      userEvent.click(checked);
      expect(checked.getAttribute('aria-pressed')).toBe('true');
    });
  });
  it('triggers a change in `aria-checked` when clicked if it is uncontrolled', () => {
    const { getAllByRole } = render(
      <>
        <ToggleButton defaultChecked={false} role="checkbox">
          This is a toggle button
        </ToggleButton>
        <ToggleButton defaultChecked role="checkbox">
          This is a toggle button
        </ToggleButton>
        <ToggleButton defaultChecked={false} role="menuitemcheckbox">
          This is a toggle button
        </ToggleButton>
        <ToggleButton defaultChecked role="menuitemcheckbox">
          This is a toggle button
        </ToggleButton>
      </>,
    );
    const [initiallyUncheckedCheckbox, initiallyCheckedCheckbox] = getAllByRole('checkbox');
    const [initiallyUncheckedMenuItemCheckbox, initiallyCheckedMenuItemCheckbox] = getAllByRole('menuitemcheckbox');

    expect(initiallyUncheckedCheckbox.getAttribute('aria-checked')).toBe('false');
    userEvent.click(initiallyUncheckedCheckbox);
    expect(initiallyUncheckedCheckbox.getAttribute('aria-checked')).toBe('true');
    userEvent.click(initiallyUncheckedCheckbox);
    expect(initiallyUncheckedCheckbox.getAttribute('aria-checked')).toBe('false');

    expect(initiallyCheckedCheckbox.getAttribute('aria-checked')).toBe('true');
    userEvent.click(initiallyCheckedCheckbox);
    expect(initiallyCheckedCheckbox.getAttribute('aria-checked')).toBe('false');
    userEvent.click(initiallyCheckedCheckbox);
    expect(initiallyCheckedCheckbox.getAttribute('aria-checked')).toBe('true');

    expect(initiallyUncheckedMenuItemCheckbox.getAttribute('aria-checked')).toBe('false');
    userEvent.click(initiallyUncheckedMenuItemCheckbox);
    expect(initiallyUncheckedMenuItemCheckbox.getAttribute('aria-checked')).toBe('true');
    userEvent.click(initiallyUncheckedMenuItemCheckbox);
    expect(initiallyUncheckedMenuItemCheckbox.getAttribute('aria-checked')).toBe('false');

    expect(initiallyCheckedMenuItemCheckbox.getAttribute('aria-checked')).toBe('true');
    userEvent.click(initiallyCheckedMenuItemCheckbox);
    expect(initiallyCheckedMenuItemCheckbox.getAttribute('aria-checked')).toBe('false');
    userEvent.click(initiallyCheckedMenuItemCheckbox);
    expect(initiallyCheckedMenuItemCheckbox.getAttribute('aria-checked')).toBe('true');
  });

  it('does not trigger a change in `aria-checked` when clicked if it is controlled', () => {
    const { getAllByRole } = render(
      <>
        <ToggleButton checked={false} role="checkbox">
          This is a toggle button
        </ToggleButton>
        <ToggleButton checked role="checkbox">
          This is a toggle button
        </ToggleButton>
        <ToggleButton checked={false} role="menuitemcheckbox">
          This is a toggle button
        </ToggleButton>
        <ToggleButton checked role="menuitemcheckbox">
          This is a toggle button
        </ToggleButton>
      </>,
    );
    const [uncheckedCheckbox, checkedCheckbox] = getAllByRole('checkbox');
    const [uncheckedMenuItemCheckbox, checkedMenuItemCheckbox] = getAllByRole('menuitemcheckbox');

    expect(uncheckedCheckbox.getAttribute('aria-checked')).toBe('false');
    userEvent.click(uncheckedCheckbox);
    expect(uncheckedCheckbox.getAttribute('aria-checked')).toBe('false');

    expect(checkedCheckbox.getAttribute('aria-checked')).toBe('true');
    userEvent.click(checkedCheckbox);
    expect(checkedCheckbox.getAttribute('aria-checked')).toBe('true');

    expect(uncheckedMenuItemCheckbox.getAttribute('aria-checked')).toBe('false');
    userEvent.click(uncheckedMenuItemCheckbox);
    expect(uncheckedMenuItemCheckbox.getAttribute('aria-checked')).toBe('false');

    expect(checkedMenuItemCheckbox.getAttribute('aria-checked')).toBe('true');
    userEvent.click(checkedMenuItemCheckbox);
    expect(checkedMenuItemCheckbox.getAttribute('aria-checked')).toBe('true');
  });
});
