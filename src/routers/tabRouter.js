import { StackNavigator } from 'react-navigation';

import LaunchPage from '../pages/LaunchPage';
import HomePage from '../pages/HomePage';
import MyPage from '../pages/MyPage';

const navigationOptions = { header: null };

const MainTab = StackNavigator(
  {
    Launcher: {
      screen: LaunchPage,
      navigationOptions,
    },
    Home: {
      screen: HomePage,
      navigationOptions,
    },
  },
  {
    initialRouteName: 'Launcher',
    headerMode: 'none',
  },
);

const MyTab = StackNavigator({
  Settings: {
    screen: MyPage,
    navigationOptions,
  },
});

export { MainTab, MyTab };
