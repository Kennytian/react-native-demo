/* eslint-disable import/first,no-undef,no-unused-vars */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import LoadFailed from './LoadFailed';

describe('LoadFailed 控件', () => {
  it('LoadFailed 默认显示，耗时：', () => {
    const tree = renderer.create(<LoadFailed />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('LoadFailed text="数据加载失败，点击重试" 显示，耗时：', () => {
    const tree = renderer.create(<LoadFailed text="数据加载失败，点击重试" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('LoadFailed 点击 onPress，耗时：', () => {
    const onPressMock = jest.fn();
    const component = renderer.create(<LoadFailed text="数据加载失败，点击重试" onPress={onPressMock} />).getInstance();
    component.onPress();
    expect(onPressMock).toBeCalled();
  });
});

