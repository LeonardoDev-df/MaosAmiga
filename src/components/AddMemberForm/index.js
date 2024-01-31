import React, { useState, useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { BlurView } from 'expo-blur';
import { getFirestore, collection, addDoc, doc } from 'firebase/firestore';
import styles from './styles';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth, db } from '.././../../config/fb';


const profilePicture = require('./create.png');

const AddMemberForm = ({ onClose, onAddMember }) => {
  const [badge, setBadge] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const handleCreateAccount = async () => {

  try {
    // Cria a conta no Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
  
    // Adiciona informações adicionais ao Firestore
    const docRef = await addDoc(collection(db, 'users'), {
      nome: name,
      email: email,
      uid: user.uid, // Use o uid gerado pelo Firebase Authentication
    });
  
    console.log('Documento adicionado com ID:', docRef.id);
    alert('Conta criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar conta:', error.message);
    alert('Erro ao criar conta. Verifique os detalhes e tente novamente.');
  }
};
  return (
    <View style={styles.container}>
        <Image style={[styles.image, StyleSheet.absoluteFill]} />
        <View style={{width: 100, height: 100, backgroundColor: 'purple', position: 'absolute' }}></View>
        <View style={{width: 100, height: 100, backgroundColor: 'blue', top: 80, position: 'absolute', transform: [{rotate: '25deg'}] }}></View>
        <View style={{width: 100, height: 100, backgroundColor: 'red', bottom: 70 ,position: 'absolute', borderRadius: 50, transform: [{rotate: '50deg'}] }}></View>
        <ScrollView contentContainerStyle= {{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}> 
          <BlurView intensity={100}>
            <View style={styles.login}>
              <Image source={profilePicture} style={styles.profilePicture} />
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: '#66707e'}}>Nome</Text>
                <TextInput onChangeText={(text) => setName(text)} style={styles.input} placeholder="Nome" />
              </View>
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: '#66707e'}}>E-mail</Text>
                <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="user@gmail.com" />
              </View>
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: '#66707e'}}>Password</Text>
                <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="password" secureTextEntry={true}/>
              </View>
             
              <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </ScrollView>
      </View>
  );
};

export default AddMemberForm;

