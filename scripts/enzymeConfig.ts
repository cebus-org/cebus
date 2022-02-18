const { configure } = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

// Configure enzyme.
export const enzymeConfig = () => {
  configure({ adapter: new Adapter() });
};
