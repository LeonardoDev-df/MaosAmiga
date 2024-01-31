// ImagePickerButton.js

import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, Platform, StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
        <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
            <Text style={styles.selectButton}>UPLOAD DO COMPROVANTE</Text>
          </TouchableOpacity>
    </View>
  
  );
};

export default ImagePickerButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc', // Cor de fundo do botão
    padding: 10,
    borderRadius: 8,
    top: 20
  },
  selectButton:{
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

