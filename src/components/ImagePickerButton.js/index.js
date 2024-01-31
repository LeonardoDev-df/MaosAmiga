// ImagePickerButton.js

import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, Platform, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerButton = ({ onSelectImage }) => {
  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        console.error('Permission to access media library denied');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        onSelectImage(result.uri);
      }
    } catch (error) {
      console.error('Error picking an image', error);
    }
  };

  return (
    <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
      <Text style={styles.selectButton}>UPLOAD DO PROCESSO</Text>
    </TouchableOpacity>
  );
};

export default ImagePickerButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF', // Cor de fundo do botão
    padding: 10,
    borderRadius: 8,
    top: 150
  },
  icon: {
    width: 30,
    height: 30,
  },
  selectButton:{
    backgroundColor: '#f0f0f0', // Cor de fundo do botão
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

