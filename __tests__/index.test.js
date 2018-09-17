// import React from 'react';
// import Enzyme, { mount, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Demo from '../src';
// const Demo = require('../src');

// Enzyme.configure({ adapter: new Adapter() });

const sum = () => {
  return 3;
}

test('Demo should render correctly', () => {
  expect(sum()).toBe(3);
});
