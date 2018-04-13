/* eslint-disable import/first,no-undef,no-unused-vars */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LaunchPage from '../../src/pages/LaunchPage';

describe('LaunchPage 控件', () => {
  it('LaunchPage 默认显示，耗时：', () => {
    const tree = renderer.create(<LaunchPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

