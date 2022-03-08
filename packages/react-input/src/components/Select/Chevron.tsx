import * as React from 'react';
import { makeStyles } from '@griffel/react';
import { tokens } from '@pongo-ui/react-theme';

const useStyles = makeStyles({
  disabled: {
    stroke: tokens.inheritDisabled,
  },
  enabled: {
    stroke: tokens.inherit,
  },
});

type ChevronState = {
  /**
   * Whether content is visible.
   */
  visible: boolean;

  /**
   * Whether the Chevron component is disabled.
   */
  disabled?: boolean;
};

export const Chevron = (props: ChevronState) => {
  const { visible, disabled } = props;

  const styles = useStyles();

  const leftLineStyles = {
    transformOrigin: 'center',
    transform: visible ? 'rotate(-45deg)' : 'rotate(45deg)',
    transition: 'transform .1s linear',
  };

  const rightLineStyles = {
    transformOrigin: 'center',
    transform: visible ? 'rotate(45deg)' : 'rotate(-45deg)',
    transition: 'transform .1s linear',
  };

  const wrapperStyles = {
    transform: visible ? 'translateY(-20%)' : 'translateY(20%)',
    transition: 'transform .1s linear',
  };

  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={disabled ? styles.disabled : styles.enabled}
    >
      <g style={wrapperStyles}>
        <line x1="1" y1="10" x2="10" y2="10" strokeWidth="2px" style={leftLineStyles} strokeLinecap="round" />
        <line x1="10" y1="10" x2="19" y2="10" style={rightLineStyles} strokeWidth="2px" strokeLinecap="round" />
      </g>
    </svg>
  );
};
