/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';
import Header from './src/header';
class App extends Component {
  state = {
    myTextInput: 'd',
    alphabet: ['a', 'b', 'c', 'd'],
  };
  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };
  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          style={styles.mainText}
          value={this.state.myTextInput}
          onChangeText={this.onChangeInput}
          autoCapitalize={'none'}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink',
    width: '100%',
  },
});
export default App;
