import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

class LoadFailed extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object,
  };

  static defaultProps = {
    onPress: null,
    text: '数据加载失败，请重试',
    style: null,
    textStyle: null,
  };

  onPress = () => {
    this.props.onPress && this.props.onPress();
  };

  render() {
    const { text, style, textStyle } = this.props;
    const btnStyle = StyleSheet.flatten([styles.container, style]);
    const txtStyle = StyleSheet.flatten([styles.text, textStyle]);
    return (
      <TouchableOpacity accessibilityLabel={text} onPress={this.onPress} style={btnStyle}>
        <Text style={txtStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default LoadFailed;
