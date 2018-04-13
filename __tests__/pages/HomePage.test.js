/* eslint-disable import/first,no-undef,no-unused-vars */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from '../../src/pages/HomePage';

describe('HomePage 控件', () => {
  it('HomePage 默认显示，耗时：', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });


});

