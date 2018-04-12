import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';

import RootRouter from './routers/rootRouter';

YellowBox.ignoreWarnings(['Warning: isMounted', 'Module RCTImageLoader']);

AppRegistry.registerComponent('JoyCastleDemo', () => () => <RootRouter />);
