import { StackNavigator } from 'react-navigation';
import AppRouteConfigs from './routeConfig';

const AppRouteOptions = {
  headerMode: 'screen',
  cardStyle: { backgroundColor: '#f6f6f6' },
  navigationOptions: {
    headerTitleAllowFontScaling: false,
  },
};
const AppNavigator = StackNavigator(AppRouteConfigs, AppRouteOptions);

export default AppNavigator;
