import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import CustomButton from '../CustomButton'; // Importe o componente CustomButton
import ImagePickerButton from '../ImagePickerButton'; // Importe o componente ImagePickerButton
import styles from './styles'; // Importe seus estilos
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '.././../../config/fb';
import { launchImageLibraryAsync } from 'expo-image-picker';
import { useUserContext } from '../UserContext';


const DeclareDeposit = () => {
  const [valorDepositado, setValorDepositado] = useState(0);
  const [comprovanteUri, setComprovanteUri] = useState(null);
  const [inputValue, setInputValue] = useState('');
   // Certifique-se de adicionar useRef aqui
   const imagePickerButtonRef = useRef();
   const { userDocId } = useUserContext();

  const handleValorChange = (formattedText, extracted) => {
    setInputValue(formattedText);
    console.log('inputValue:', formattedText);
    console.log('Valor Depositado:', inputValue);
  };

  
  useEffect(() => {
    // Use o userDocId aqui conforme necessário
    console.log('userDocId em Users:', userDocId);
  }, [userDocId]);


  const usuarioUid = userDocId; // Substitua pelo UID real do usuário

  const handleSubmit = async () => {
  
    try {
      // Adiciona informações adicionais ao Firestore
      const depositoRef = collection(db, 'users',  usuarioUid, 'depositos');
      const docRef = await addDoc(depositoRef, {
        valor: inputValue,
        comprovanteUri: comprovanteUri,
        status: false,
        createAt: new Date(),
        userFk: usuarioUid,
        // Adicione mais campos conforme necessário
      });
       
      console.log('Depósito registrado com sucesso! ID:', docRef.id);
    
      alert('Depósito registrado com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar depósito:', error.message);
      alert('Erro ao registrar depósito. Verifique os detalhes e tente novamente.');
    }
  };


  const handleImageSelect = (uri) => {
    console.log('URI da imagem selecionada:', uri);
    setComprovanteUri(uri);

  };

  
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Declare seu Depósito</Text>

       <View style={styles.organi}>

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
            value={inputValue}
          />

            <CustomButton onPress={handleSubmit} text="Enviar" />
        </View>

        

        <View style={styles.selectButton}>
          <ImagePickerButton  onSelectImage={handleImageSelect} />
        </View>
          
    </View>
  );
};

export default DeclareDeposit;
