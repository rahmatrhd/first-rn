/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  add = () => this.setState(state => ({ value: state.value + 1 }))
  substract = () => this.setState({ value: this.state.value - 1 })

  render() {
    console.log('App render', Platform)

    // const keyboardType = Platform.OS === 'android' ? 'number-pad' : 'numbers-and-punctuation'
    const keyboardType = Platform.select({
      ios: 'numbers-and-punctuation',
      android: 'number-pad'
    })

    return (
      <View style={styles.appContainer}>
        <Text >{this.props.title}</Text>
        <Button
          title="-"
          onPress={this.substract}
          style={styles.button}
        />
        <TextInput
          value={`${this.state.value}`}
          keyboardType={keyboardType}
          style={styles.textInput}
        />
        <Button
          title="+"
          onPress={this.add}
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row'
  },
  textInput: {
    flex: 1
  },
  button: {
    flex: 1,
  }
});
