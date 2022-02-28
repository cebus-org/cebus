import React from 'react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';
import { isConformant } from '../../common/isConformant';
import { jest } from '@jest/globals';
import { render, RenderResult, fireEvent } from '@testing-library/react';

//credit to https://github.com/microsoft/fluentui for being the base of this set of tests
describe('Button', () => {
  let renderedComponent: RenderResult | undefined;

  isConformant({
    Component: Button as React.FunctionComponent<ButtonProps>,
    displayName: 'Button',
  });

  describe('Rendered as button', () => {
    it('respects id prop', () => {
      renderedComponent = render(
        <Button id="testing-id" data-testid="button">
          Default Button
        </Button>,
      );

      expect(renderedComponent.getByTestId('button').id).toEqual('testing-id');
    });

    it('can be focused', () => {
      const result = render(<Button>This is a button</Button>);
      const button = result.getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      button.focus();
      expect(document.activeElement).toEqual(button);
    });

    it('cannot be focused when disabled has been passed to the component', () => {
      const result = render(<Button disabled>This is a button</Button>);
      const button = result.getByRole('button');

      expect(document.activeElement).not.toEqual(button);
      button.focus();
      expect(document.activeElement).not.toEqual(button);
    });

    it('can trigger a function by being clicked', () => {
      const onClick = jest.fn();
      const result = render(<Button onClick={onClick}>This is a button</Button>);

      fireEvent.click(result.getByRole('button'));
      expect(onClick).toHaveBeenCalled();
    });

    it('does not trigger a function by being clicked when button is disabled', () => {
      const onClick = jest.fn();
      const result = render(
        <Button disabled onClick={onClick}>
          This is a button
        </Button>,
      );

      fireEvent.click(result.getByRole('button'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('Rendered as anchor', () => {
    it('renders correctly', () => {
      const result = render(
        <Button as="a" href="https://www.bing.com">
          This is a button
        </Button>,
      );

      const anchor = result.getByRole('button');
      expect(anchor.tagName).toBe('A');

      expect(result.container).toMatchSnapshot();
    });

    it('can be focused', () => {
      const result = render(
        <Button as="a" href="https://www.bing.com">
          Test Button
        </Button>,
      );
      const anchor = result.getByRole('button');

      expect(document.activeElement).not.toEqual(anchor);
      anchor.focus();
      expect(document.activeElement).toEqual(anchor);
    });

    it('cannot be focused when disabled has been passed to the component', () => {
      const result = render(
        <Button disabled as="a">
          This is a button
        </Button>,
      );
      const anchor = result.getByRole('button');

      expect(document.activeElement).not.toEqual(anchor);
      anchor.focus();
      expect(document.activeElement).not.toEqual(anchor);
    });
  });
});
