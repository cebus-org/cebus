import * as React from 'react';
import { useControllableState, useEventCallback } from '@fluentui/react-utilities';
import { tokens } from '@pongo-ui/react-theme';
import type { CarouselState } from './Carousel.types';

const imageStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  userSelect: 'none',
};

export const useCarouselState = (state: CarouselState): CarouselState => {
  const { defaultValue, value, onChange } = state;
  const children = state.root.children;
  const [currentValue, setCurrentValue] = useControllableState({
    defaultState: defaultValue,
    state: value,
    initialState: 0,
  });

  const onImageChange = useEventCallback((ev, incomingValue: number) => {
    onChange?.(ev, { value: incomingValue });
    setCurrentValue(incomingValue);
  });

  const calculateTransform = () => currentValue * 100;

  const imageWrapperStyles = {
    width: '100%',
    height: '100%',
    flexShrink: '0',
    transform: `translateX(-${calculateTransform()}%)`,
    transitionProperty: 'transform',
    transitionDuration: tokens.transitionDuration,
    transitionTimingFunction: tokens.transitionTimingFunction,
  };

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return (
        <div style={imageWrapperStyles}>
          {React.cloneElement(child, {
            draggable: false,
            style: imageStyles,
          })}
        </div>
      );
    }
    return child;
  });

  const onKeyDown = ev => {
    if (ev.key === 'ArrowLeft') {
      onImageChange(ev, currentValue - 1);
    }
    if (ev.key === 'ArrowRight') {
      onImageChange(ev, currentValue + 1);
    }
  };

  state.root.children = childrenWithProps;

  state.tabpanel.tabIndex = 0;
  state.tabpanel.onKeyDown = onKeyDown;

  return state;
};
