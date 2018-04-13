import { StackNavigator } from 'react-navigation';

import HomePage from '../pages/HomePage';
import MyPage from '../pages/MyPage';

const navigationOptions = { header: null };

const MainTab = StackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions,
  },
});

const MyTab = StackNavigator({
  Settings: {
    screen: MyPage,
    navigationOptions,
  },
});

export { MainTab, MyTab };
