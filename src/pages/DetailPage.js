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

export default class DetailPage extends PureComponent {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Detail Page</Text>
      </View>
    );
  }
}
