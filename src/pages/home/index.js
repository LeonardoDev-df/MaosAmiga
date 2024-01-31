import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, TextInput, TouchableOpacity, StyleSheet, Image, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'; // Importando os estilos do arquivo styles.js
import * as Notifications from 'expo-notifications';
import { BlurView } from 'expo-blur';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, isEmpty, getFirestore, getDocs, getDoc, doc, where, query } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { auth, db, storage, firebaseConfig } from '../../../config/fb';
import { useUserContext } from '../../components/UserContext';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});


const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'
const profilePicture = require('./logo-cel.png');


export function Home() {
 
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [usuarios, setUsuarios] = useState([]);
  const { setUserDocIdValue } = useUserContext(); // Adicione essa linha

  const handleSignIn = () => {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        if (email === 'adm@adm.com') {
          navigation.navigate('admin');
        } else {
          const usersCollectionRef = collection(getFirestore(), 'users');
          const userDocQuery = query(usersCollectionRef, where('uid', '==', user.uid));
          const userDocSnapshot = await getDocs(userDocQuery);

          if (userDocSnapshot.docs.length > 0) {
            const userDocId = userDocSnapshot.docs[0].id;
            console.log('Document ID do usuário autenticado:', userDocId);
            
            // Atualize o contexto com o ID do usuário
            setUserDocIdValue(userDocId);
          } else {
            console.log('Documento do usuário não encontrado.');
          }

          navigation.navigate('users');
        }
      })
      .catch(error => {
        console.log(error);
        alert('Usuário desconhecido. Por favor, insira "admin" ou "users".');
      });
  };


  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (usuario.toLowerCase() === 'admin') {
      navigation.navigate('admin');
    } else if (usuario.toLowerCase() === 'users') {
      navigation.navigate('users');
    } else {
      alert('Usuário desconhecido. Por favor, insira "admin" ou "users".');
    }
  };

  const handleTestNotification = async () => {
    try {
      // Solicitar permissões de notificação, se ainda não tiver sido concedido
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        const { status: newStatus } = await Notifications.requestPermissionsAsync();
        if (newStatus !== 'granted') {
          Alert.alert('Você não permitiu notificações.');
          return;
        }
      }

      // Agendar a notificação para daqui a 10 segundos
      const schedulingOptions = {
        content: {
          title: 'Grupo Mão Amiga',
          body: '"🌟 Olá membros do grupo! Não se esqueçam: o prazo para a contribuição mensal está chegando. Juntos, construímos um ambiente incrível. Sua colaboração faz toda a diferença! 🌈✨"',
        },
        trigger: {
          seconds: 5, // Agendar para daqui a 5 segundos
          repeats: false, // Não repetir diariamente
        },
      };

      await Notifications.scheduleNotificationAsync(schedulingOptions);

     
    } catch (error) {
      console.error('Erro ao agendar a notificação:', error.message || error);
      Alert.alert('Erro ao agendar a notificação. Verifique o console para mais detalhes.');
    }
  }


 
    const handleScheduleNotification = async () => {
      try {
        // Cancela todas as notificações existentes
        await Notifications.cancelAllScheduledNotificationsAsync();
    
        // Obtém a data atual
        const currentDate = new Date();
    
        // Define a data da próxima notificação para o dia 20 do próximo mês às 17 horas
        const nextNotificationDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 20, 17, 0, 0);
    
        // Configuração da notificação
        const schedulingOptions = {
          content: {
            title: 'Notificação Mensal',
            body: 'Esta é uma notificação mensal no dia 20 às 17 horas.',
          },
          trigger: {
            date: nextNotificationDate,
            repeats: true, // Configura a notificação para se repetir mensalmente
          },
        };
    
        // Agenda a notificação
        await Notifications.scheduleNotificationAsync(schedulingOptions);
    
        
      } catch (error) {
        console.error('Erro ao agendar notificação:', error);
      }
    };

  // Chamando a função ao montar o componente
  useEffect(() => {
    handleScheduleNotification();
  }, []);

  return (
    <View style={styles.container}>

        <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
        <View style={{width: 100, height: 100, backgroundColor: 'purple', position: 'absolute' }}></View>
        <View style={{width: 100, height: 100, backgroundColor: 'blue', top: 120, position: 'absolute', transform: [{rotate: '25deg'}] }}></View>
        <View style={{width: 100, height: 100, backgroundColor: 'red', bottom: 120 ,position: 'absolute', borderRadius: 50, transform: [{rotate: '50deg'}] }}></View>
       
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
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>E-mail</Text>
                <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="user@gmail.com" />
              </View>
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Password</Text>
                <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="password" secureTextEntry={true}/>
              </View>
              <TouchableOpacity onPress={handleSignIn} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Login</Text>
              </TouchableOpacity>

            <Button
                title='Chamar notification Teste'
                onPress={handleTestNotification}
              >

              </Button>
             
            </View>
          </BlurView>
        </ScrollView>
    </View>
  );
}



