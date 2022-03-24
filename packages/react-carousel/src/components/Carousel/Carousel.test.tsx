import * as React from 'react';
import { Carousel } from './Carousel';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Carousel', () => {
  isConformant({
    Component: Carousel,
    displayName: 'Carousel',
    requiredProps: {
      content: [
        {
          src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tshirts-1613587154.jpg',
          alt: 'A white t shirt',
        },
      ],
    },
  });

  describe('Snapshot tests', () => {
    it('renders a basic Avatar', () => {
      const result = render(
        <Carousel
          content={[
            {
              src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tshirts-1613587154.jpg',
              alt: 'A white t shirt',
            },
            {
              src: 'https://imgprd19.hobbylobby.com/2/4f/57/24f57e245a879cb2543edd1df4e090bfebf24a45/700Wx700H-1013689-0320.jpg',
              alt: 'A green t shirt',
            },
          ]}
        />,
      );

      expect(result.baseElement).toMatchSnapshot();
    });
  });
});
