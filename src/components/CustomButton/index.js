// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ onPress, text }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    width: 70,
    justifyContent: 'center',
    
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center', // Alinha o texto no centro do botão
    backgroundColor: '#F2F2F2',
  },
});
