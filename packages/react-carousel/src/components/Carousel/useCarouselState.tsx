import * as React from 'react';
import { Radio } from '@cebus/react-radio';
import { ForwardArrowIcon, BackArrowIcon } from '@cebus/react-icon';
import { useControllableState, useEventCallback } from '@fluentui/react-utilities';
import { tokens } from '@cebus/react-theme';
import type { CarouselState, CarouselChange } from './Carousel.types';
import type { RadioGroupProps } from '@cebus/react-radio';

const imageStyles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  userSelect: 'none',
};

export const useCarouselState = (state: CarouselState): CarouselState => {
  const { content, appearance, defaultValue, value, onChange } = state;

  const [currentValue, setCurrentValue] = useControllableState({
    defaultState: defaultValue,
    state: value,
    initialState: 0,
  });

  const onImageChange = useEventCallback((ev: CarouselChange, incomingValue: number) => {
    // If we go past the first item
    const clampedValue =
      incomingValue < 0 ? content.length - 1 : incomingValue > content.length - 1 ? 0 : incomingValue;
    onChange?.(ev, { value: clampedValue });
    setCurrentValue(clampedValue);
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

  // const childrenWithProps = React.Children.map(children, child => {
  //   if (React.isValidElement(child)) {
  //     return (
  // <div style={imageWrapperStyles}>
  //   {React.cloneElement(child, {
  //     draggable: false,
  //     style: imageStyles,
  //   })}
  // </div>
  //     );
  //   }
  //   return child;
  // });

  const createImages = content.map(item => {
    return (
      <div key={content.indexOf(item)} style={imageWrapperStyles}>
        <img src={item.src} alt={item.alt} draggable={false} style={imageStyles} />
      </div>
    );
  });

  const onRadioChange: RadioGroupProps['onChange'] = (ev, data) => {
    onImageChange(ev, Number.parseInt(data.value));
  };

  const onBackButtonClick = (ev: React.MouseEvent<HTMLElement>) => {
    onImageChange(ev, currentValue - 1);
  };

  const onForwardButtonClick = (ev: React.MouseEvent<HTMLElement>) => {
    onImageChange(ev, currentValue + 1);
  };

  state.root.children = createImages;

  const createRadioButtons = () => {
    const buttons = [];

    for (let i = 0; i < content.length; i++) {
      buttons.push(
        <Radio key={i} role="carousel" value={i.toString()} aria-label={content[currentValue].alt} readOnly />,
      );
    }

    return buttons;
  };

  if (appearance === 'minimal' && state.backArrow) {
    state.backArrow.children = <BackArrowIcon />;
    state.backArrow.onClick = onBackButtonClick;
  }

  if (appearance === 'minimal' && state.forwardArrow) {
    state.forwardArrow.children = <ForwardArrowIcon />;
    state.forwardArrow.onClick = onForwardButtonClick;
  }

  if (appearance === 'minimal' && state.radioIndicator) {
    state.radioIndicator.value = currentValue.toString();
    state.radioIndicator.onChange = onRadioChange;
    state.radioIndicator.children = createRadioButtons();
  }

  return state;
};
