import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const baseConteiner = {
  alignItems: 'center',
  justifyContent: 'center',
  borderRightWidth: 1,
  borderColor: '#fff',
};

const baseText = {
  fontSize: 36,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...baseConteiner,
    backgroundColor: 'gray',
  },
  specialConteiner: {
    flex: 2,
    backgroundColor: '#9bc23c',
    ...baseConteiner,
  },
  text: baseText,
  specialText: {
    ...baseText,
    color: '#fff',
  },
});

const Button = ({ text, special, onPress }) => (
  <TouchableOpacity
    onPress={() => onPress(text)}
    style={special ? styles.specialConteiner : styles.container}
  >
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
