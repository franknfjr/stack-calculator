import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

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

const Button = ({ text, special }) => (
  <View style={special ? styles.specialConteiner : styles.container}>
    <Text style={special ? styles.specialText : styles.text}>{text}</Text>
  </View>
);

export default Button;
