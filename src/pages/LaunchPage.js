import React, { PureComponent } from 'react';
import { Platform, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  container: {
    flex: 1,
  },
  wrapper: {
    position: 'absolute',
    top: Platform.select({ android: 20, ios: 30 }),
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
  second: {
    color: '#fff',
    marginRight: 2,
    fontSize: 11,
  },
  nickNameWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  nickName: {
    fontFamily: 'System',
    fontSize: 17,
  },
};

const WAIT_COUNT = 3;

export default class LaunchPage extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static defaultProps = {
    navigation: null,
  };

  state = { cd: WAIT_COUNT };

  componentDidMount() {
    let countDown = WAIT_COUNT;
    this.timer = setInterval(() => {
      countDown -= 1;
      if (countDown >= 0) {
        this.setState({ cd: countDown });
      } else {
        this.goToHomePage();
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer() {
    this.timer && clearInterval(this.timer);
    this.timer = -1;
  }

  goToHomePage = () => {
    this.clearTimer();
    this.props.navigation.navigate('Home');
  };

  render() {
    const secText = `${Math.ceil(this.state.cd)} s`;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper} onPress={this.goToHomePage}>
          <Text allowFontScaling={false} style={styles.text}>skip</Text>
          <Text allowFontScaling={false} style={styles.second}>{secText}</Text>
        </TouchableOpacity>

        <View style={styles.nickNameWrapper}>
          <Text style={styles.nickName}>Kenny</Text>
        </View>
      </View>
    );
  }
}
