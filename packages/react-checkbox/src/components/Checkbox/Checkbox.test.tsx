import React from 'react';
import { Checkbox } from './Checkbox';
import { isConformant } from '../../common/isConformant';
import { render, screen, fireEvent } from '@testing-library/react';
import { resetIdsForTests } from '@fluentui/react-utilities';

describe('Checkbox', () => {
  isConformant({
    Component: Checkbox,
    displayName: 'Checkbox',
  });

  beforeEach(() => {
    resetIdsForTests();
  });

  it('respects id prop', () => {
    render(<Checkbox id="testing-id" data-testid="checkbox" />);

    expect(screen.getByTestId('checkbox').id).toEqual('testing-id');
  });

  it('defaults to unchecked', () => {
    const checkboxRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

    render(<Checkbox input={{ ref: checkboxRef }} />);

    expect(checkboxRef.current?.checked).toBe(false);
  });

  it('respects defaultChecked prop', () => {
    const checkboxRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

    render(<Checkbox input={{ ref: checkboxRef }} defaultChecked />);

    expect(checkboxRef.current?.checked).toBe(true);
  });

  it('updates defaultChecked onClick', () => {
    const checkboxRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

    render(<Checkbox defaultChecked input={{ ref: checkboxRef }} data-testid="checkbox" />);
    const checkboxElement = screen.getByRole('checkbox');

    expect(checkboxRef.current?.checked).toBe(true);

    fireEvent.click(checkboxElement);
    expect(checkboxRef.current?.checked).toBe(false);

    fireEvent.click(checkboxElement);
    expect(checkboxRef.current?.checked).toBe(true);
  });

  it('respects checked prop', () => {
    const checkboxRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

    render(<Checkbox checked input={{ ref: checkboxRef }} />);

    expect(checkboxRef.current?.checked).toBe(true);
  });

  it('does not update when the controlled value prop is provided', () => {
    const checkboxRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>();

    render(<Checkbox checked input={{ ref: checkboxRef }} data-testid="checkbox" />);
    const checkboxElement = screen.getByRole('checkbox');

    fireEvent.click(checkboxElement);

    expect(checkboxRef.current?.checked).toBe(true);
  });

  it('calls onChange with the correct value', () => {
    const eventHandler = jest.fn();

    render(<Checkbox checked onChange={eventHandler} data-testid="checkbox" />);

    const input = screen.getByRole('checkbox');
    expect(eventHandler).toBeCalledTimes(0);

    fireEvent.click(input);
    fireEvent.click(input);
    fireEvent.click(input);

    expect(eventHandler).toBeCalledTimes(3);
    expect(eventHandler.mock.calls[2][1]).toEqual({ checked: false });
  });
});
