import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});

export default class MyPage extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>My Page</Text>
      </View>
    );
  }
}
