import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Modal, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: 15,
    marginTop: 100,
    height: 200,
    borderRadius: 2,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 375 / 1.5,
    height: 202 / 1.5,
    borderRadius: 3,
  },
});

export default class HomePage extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static defaultProps = {
    navigation: null,
  };

  state = {
    modalVisible: false,
  };

  setModalVisible = visible => () => {
    this.setState({ modalVisible: visible });
  };

  routeTo = name => () => {
    this.setState({ modalVisible: false });
    this.props.navigation.navigate(name);
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType="fade" transparent visible={this.state.modalVisible}>
          <View style={styles.modalView}>
            <Image style={styles.image} source={{ uri: 'https://imgs.xkcd.com/comics/barrel_cropped_(1).jpg' }} />
            <TouchableOpacity onPress={this.routeTo('MyTab')}>
              <Text>Hide Picture</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TouchableOpacity onPress={this.setModalVisible(true)}>
          <Text style={styles.text}>Show Picture</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
