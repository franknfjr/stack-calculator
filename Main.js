import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from './Button';
import { pressNum } from './modules';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingTop: 20,
  },
  bottom: {
    flex: 1,
  },
  number: {
    color: '#fff',
    backgroundColor: '#424242',
    textAlign: 'right',
    fontSize: 30,
    padding: 10,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#fff',
    borderBottomWidth: 1,
  },
});

const App = ({ currentNumber, pressNumWithDispatch }) => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.number}>0</Text>
      <Text style={styles.number}>0</Text>
      <Text style={styles.number}>{currentNumber}</Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.row}>
        <Button text="clear" />
        <Button text="pow" />
        <Button text="swap" />
        <Button text="/" />
      </View>
      <View style={styles.row}>
        <Button text="9" onPress={pressNumWithDispatch} />
        <Button text="8" onPress={pressNumWithDispatch} />
        <Button text="7" onPress={pressNumWithDispatch} />
        <Button text="X" />
      </View>
      <View style={styles.row}>
        <Button text="6" onPress={pressNumWithDispatch} />
        <Button text="5" onPress={pressNumWithDispatch} />
        <Button text="4" onPress={pressNumWithDispatch} />
        <Button text="-" />
      </View>
      <View style={styles.row}>
        <Button text="3" onPress={pressNumWithDispatch} />
        <Button text="2" onPress={pressNumWithDispatch} />
        <Button text="1" onPress={pressNumWithDispatch} />
        <Button text="+" />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={pressNumWithDispatch} />
        <Button text="." />
        <Button text="enter" special />
      </View>
    </View>
  </View>
);

export default connect(
  state => ({ currentNumber: state }),
  dispatch =>
    bindActionCreators(
      {
        pressNumWithDispatch: pressNum,
      },
      dispatch,
    ),
)(App);