// import React from 'react';
import TabRouter from './tabRouter';

import ListPage from '../pages/ListPage';
import DetailPage from '../pages/DetailPage';

const AppRouteConfigs = {
  Home: {
    screen: TabRouter,
    navigationOptions: {
      header: null,
    },
  },
  ListPage: {
    screen: ListPage,
    navigationOptions: {
      title: '列表页',
    },
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      title: '详情页',
    },
  },
};

export default AppRouteConfigs;
