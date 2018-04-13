/* eslint-disable react/prop-types */
import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import imageSource from '../const/imageSource';

import { MainTab, MyTab } from '../routers/tabRouter';

const styles = {
  icon: {
    marginTop: 4,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
};

const StacksInTabs = TabNavigator(
  {
    MainTab: {
      screen: MainTab,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused }) => (
          <Image source={focused ? imageSource.icon_home_active : imageSource.icon_home} style={styles.icon} />
        ),
      },
    },
    MyTab: {
      screen: MyTab,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused }) => (
          <Image source={focused ? imageSource.icon_my_active : imageSource.icon_my} style={styles.icon} />
        ),
      },
    },
  },
  {
    animationEnabled: true,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    backBehavior: 'none',
    tabBarOptions: {
      allowFontScaling: false,
      showLabel: true,
      inactiveTintColor: '#aaa',
      activeTintColor: '#ff552e',
      showIcon: true,
      style: {
        backgroundColor: '#fff',
        borderTopColor: '#f6f6f6',
        borderTopWidth: StyleSheet.hairlineWidth,
      },
      labelStyle: {
        fontSize: 12,
        marginBottom: 0,
        ...Platform.select({
          android: { marginTop: 2 },
          ios: { marginBottom: 6 },
        }),
      },
      tabStyle: {
        height: 50,
        backgroundColor: '#fff',
      },
    },
  },
);

export default StacksInTabs;
