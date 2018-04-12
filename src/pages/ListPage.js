import React, { PureComponent } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});

export default class ListPage extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static defaultProps = {
    navigation: null,
  };

  componentDidMount() {}

  onPress = name => () => {
    this.props.navigation.navigate(name);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>List Page</Text>
        <Button
          title="Go to detail page"
          onPress={this.onPress('DetailPage')}
        />
      </View>
    );
  }
}
