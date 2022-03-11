import * as React from 'react';
import type { ChevronState } from './Chevron.types';

export const useChevronState = (state: ChevronState): ChevronState => {
  const { open } = state;

  const leftLineStyles = {
    transformOrigin: 'center',
    transform: open ? 'rotate(-45deg)' : 'rotate(45deg)',
    transition: 'transform .1s linear',
  };

  const rightLineStyles = {
    transformOrigin: 'center',
    transform: open ? 'rotate(45deg)' : 'rotate(-45deg)',
    transition: 'transform .1s linear',
  };

  const wrapperStyles = {
    transform: open ? 'translateY(-10%)' : 'translateY(10%)',
    transition: 'transform .1s linear',
  };

  state.root.children = (
    <g style={wrapperStyles}>
      <rect style={rightLineStyles} x="941" y="944" width="908" height="160" rx="80" />
      <rect style={leftLineStyles} x="198" y="944" width="908" height="160" rx="80" />
    </g>
  );

  return state;
};
