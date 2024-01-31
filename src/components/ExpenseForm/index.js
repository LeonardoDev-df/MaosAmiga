import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Image, ScrollView, StyleSheet, Modal, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import ImagePickerButton from '../ImagePickerButton';
import ImagePickerButtons from '../ImagePickerButton.js';
import { Picker } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '.././../../config/fb';
import { launchImageLibraryAsync } from 'expo-image-picker';
import styles from './styles';

const mockUsers = ['João', 'Pedro']; // Simulação de usuários cadastrados

const ExpenseForm = ({ isVisible, onClose }) => {
  const navigation = useNavigation();
  const [occurrenceValue, setOccurrenceValue] = useState('');
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);
  const [photoProof, setPhotoProof] = useState(null);

  const [processPhoto, setProcessPhoto] = useState(null);
  const [confirmationModalVisible, setConfirmationModalVisible] = useState(false);

  const auth = getAuth();
  const db = getFirestore();

  const handleImageSelectPhoto = (uri) => {
    console.log('URI da imagem selecionada:', uri);
    setPhotoProof(uri);
  };

  
  const handleImageSelectProcess= (uri) => {
    console.log('URI da imagem selecionada:', uri);
    setProcessPhoto(uri);
  };

  const handleValorChange = (formattedText, extracted) => {
    setOccurrenceValue(formattedText);
    console.log('Valor da Ocorrência:', formattedText);  
  };
  



  const handleSubmitForm = async () => {
     try {

      const usuarioUid = "u37mft4wpAUidSpqU7wv"; // Substitua pelo UID real do usuário
      // Adiciona informações adicionais ao Firestore
      const ocorrenciaRef = collection(db, 'users',  usuarioUid, 'ocorrencia');
      const docRef = await addDoc(ocorrenciaRef, {
        valor: occurrenceValue,
        comprovanteUri: photoProof,
        processoUri: processPhoto,
        createAt: new Date(),
        userFk: usuarioUid,
        // Adicione mais campos conforme necessário
      });

      console.log('Ocorrência registrado com sucesso! ID:', docRef.id);

        
          alert('Ocorrência registrado com sucesso!');

    } catch (error) {
      console.error('Erro ao registrar Ocorrência:', error.message);
      alert('Erro ao registrar Ocorrência. Verifique os detalhes e tente novamente.');
    }
  };

  const handleConfirmSubmission = () => {
    // Lógica para enviar os dados do formulário para o servidor
    // Resetar os campos e fechar o modal após o envio
    setSelectedUser(mockUsers[0]); // Volta para o primeiro usuário
    setOccurrenceValue('');
    setPhotoProof(null);
    setProcessPhoto(null);
    setConfirmationModalVisible(false);
    onClose();
  };

  return (
    <ScrollView contentContainerStyle={styles.formContainer}>
      <Text style={styles.label}>Nome do Usuário</Text>
      <Picker
        selectedValue={selectedUser}
        onValueChange={(itemValue) => setSelectedUser(itemValue)}
        style={styles.picker}
      >
        {mockUsers.map((user) => (
          <Picker.Item  style={styles.pickerItem} key={user} label={user} value={user} />
        ))}
      </Picker>

      <Text style={styles.label}>Valor da Ocorrência</Text>
    
      <TextInputMask
        style={styles.input}
        placeholder="Valor R$"
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
        }}
      
        onChangeText={handleValorChange}
        value={occurrenceValue}
      />

    

      <View style={styles.selectButton}>
        <ImagePickerButton style={styles.sectionButton}title="Upload Foto Comprovante"  onSelectImage={handleImageSelectPhoto} />
       
      </View>

      <View style={styles.selectButton}>
        <ImagePickerButtons style={styles.sectionButton}title="Upload Foto Processo"  onSelectImage={handleImageSelectProcess} />   
      </View>

      <View style={styles.sectionContainer}>
        <Button style={styles.sectionButton} title="Enviar Ocorrência" onPress={handleSubmitForm} />
      </View>

      <Modal visible={confirmationModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Confirma o envio da ocorrência?</Text>
            <Button style={styles.sectionButton} title="Confirmar" onPress={handleConfirmSubmission} />
            <Button style={styles.sectionButton} title="Cancelar" onPress={() => setConfirmationModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.sectionContainer}>
        <Button style={styles.sectionButton} title="Cancelar" onPress={onClose} />
      </View>

    </ScrollView>
  );
};

export default ExpenseForm;
