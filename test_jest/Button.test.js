import React from 'react';
import Button from '../src/Button.react';
import renderer from 'react-test-renderer';

test('Test show table', () => {
  const component = renderer.create(
    <Button >Search</Button>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});