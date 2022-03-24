import * as React from 'react';
import { Carousel } from '../index';

export const BasicCarouselExample = () => {
  return (
    <Carousel
      defaultValue={0}
      style={{ maxWidth: '600px' }}
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
    />
  );
};

export default {
  title: 'Components/Carousel',
  component: Carousel,
};
