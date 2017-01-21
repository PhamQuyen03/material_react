import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

const data = require('../src/data.json');
test('test show table', () => {
  const component = renderer.create(
    <App arrayTopGainer={data} arrayTopLoser={data}></App>
  );
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});