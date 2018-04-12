import React, { PureComponent } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});

export default class HomePage extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static defaultProps = {
    navigation: null,
  };

  onPress = name => () => {
    this.props.navigation.navigate(name);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home Page</Text>
        <Button
          title="Go to list page"
          onPress={this.onPress('ListPage')}
        />
      </View>
    );
  }
}
