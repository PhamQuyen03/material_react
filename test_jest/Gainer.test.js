import React from 'react';
import Gainers from '../src/Gainers';
import renderer from 'react-test-renderer';

const data = require('../src/data.json');
test('test show table', () => {
  const component = renderer.create(
    <Gainers TopGainers={data}></Gainers>
  );
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

});