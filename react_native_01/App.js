/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Board from './assets/images/board.png';

class App extends Component {
  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd'],
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };

  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        alphabet: [...preState.alphabet, prevState.myTextInput],
      };
    });
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100 + 1);
    this.setState(preState => {
      return {
        random: [...preState.random, randomNum],
      };
    });
  };
  onNumDelete = position => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    });
    this.setState({
      random: newArray,
    });
  };
  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput],
      };
    });
  };
  render() {
    return (
      <View style={styles.mainView}>
        <Image source={Board} style={styles.image} />
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
    // justifyContent: 'center',
  },

  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },

  anotherSubview: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
  image: {
    height: 300,
  },
});
export default App;
