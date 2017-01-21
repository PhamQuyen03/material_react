import React from 'react';
import Loser from '../src/Losers';
import renderer from 'react-test-renderer';

const data = require('../src/data.json');
test('test show table', () => {
  const component = renderer.create(
    <Loser TopLosers={data}></Loser>
  );
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

});