/* eslint-disable import/first,no-undef,no-unused-vars */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import MyPage from '../../src/pages/MyPage';

describe('MyPage 控件', () => {
  it('MyPage 默认显示，耗时：', () => {
    const tree = renderer.create(<MyPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

