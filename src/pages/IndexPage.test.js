import React from 'react';
import {shallow} from 'enzyme';
import {IndexPage} from './IndexPage';
import TextField from 'components/TextField';
import ActionButton from 'components/ActionButton';
import {StaticRouter} from 'react-router';

const shallowWithRouter = (node) => {
  return shallow(
    <StaticRouter location="/">
      {node}
    </StaticRouter>
  );
};

describe('IndexPage', () => {
  it('renders TextField', () => {
    const wrapper = shallowWithRouter(<IndexPage/>);
    expect(wrapper.find(TextField)).toBeTruthy();
  });

  it('renders ActionButton', () => {
    const wrapper = shallowWithRouter(<IndexPage/>);
    expect(wrapper.find(ActionButton)).toBeTruthy();
  });
});
