import * as React from 'react';

type CheckmarkIconProps = {
  /**
   * The size of the Checkmark
   */
  size: 'medium' | 'large';
};

export const CheckmarkIcon = (props: CheckmarkIconProps) => {
  const { size } = props;
  const checkmarkSize = { width: size === 'medium' ? '20px' : '24px', height: size === 'medium' ? '20px' : '24px' };

  return (
    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" fill="white" style={checkmarkSize}>
      <path d="M4.83332 11.2941L12.3837 18.5619L10.5504 20.3265L3 13.0588L4.83332 11.2941ZM25 7.7647L11.25 21L9.41664 19.2353L23.1666 6L25 7.7647Z" />
    </svg>
  );
};
