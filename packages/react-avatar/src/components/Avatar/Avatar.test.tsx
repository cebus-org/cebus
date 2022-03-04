import * as React from 'react';
import { Avatar } from './Avatar';
import { isConformant } from '../../common/isConformant';
import { render } from '@testing-library/react';

describe('Avatar', () => {
  isConformant({
    Component: Avatar,
    displayName: 'Avatar',
  });

  describe('Snapshot tests', () => {
    it('renders a basic Avatar', () => {
      const result = render(<Avatar name="test" />);

      expect(result.baseElement).toMatchSnapshot();
    });

    it('renders an Avatar with an image', () => {
      const result = render(
        <Avatar
          name="test"
          image={{ src: 'https://th.bing.com/th/id/OIP.R3IAG0Z7SAzTV56Xuvs1LwHaFj?pid=ImgDet&rs=1' }}
        />,
      );

      expect(result.baseElement).toMatchSnapshot();
    });
  });
});
