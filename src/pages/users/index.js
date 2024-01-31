import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, Alert, Modal, Image, ScrollView } from 'react-native';
import DepositHistory from '../../components/DepositHistory';
import DeclareDeposit from '../../components/DeclareDeposit';
import OcorrenciaViewer from '../../components/OcorrenciaViewer';
import { useNavigation } from '@react-navigation/native';
import GroupMemberList from '../../components/GroupMemberList';
import styles from './styles';
import { BlurView } from 'expo-blur';
const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'
const profilePicture = require('../../assets/logo.png');
import { getFirestore, collection, onSnapshot, orderBy, query, QuerySnapshot, doc } from 'firebase/firestore';
import { auth, db } from '../../../config/fb';
import { Timestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useUserContext } from '../../components/UserContext';

export default function Users() {
  const [isHistoryVisible, setIsHistoryVisible] = useState(true);
  const [selectedOcorrencia, setSelectedOcorrencia] = useState(null);
  const [isOcorrenciaModalVisible, setIsOcorrenciaModalVisible] = useState(false);
  const [isMemberListVisible, setMemberListVisible] = useState(true);
  const [deposits, setdeposits] = React.useState([])
  const [currentUser, setCurrentUser] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const { userDocId } = useUserContext();
  const navigation = useNavigation();
  const toggleView = () => {
    setIsHistoryVisible(!isHistoryVisible);
    setSelectedOcorrencia(null);
    setIsOcorrenciaModalVisible(false);
  };


  useEffect(() => {
    // Use o userDocId aqui conforme necessário
    console.log('userDocId em Users:', userDocId);
  }, [userDocId]);
  

  const usuarioUid = userDocId;

  React.useEffect(() =>{
    const collectionRef = collection(db, 'users',  usuarioUid, 'depositos');
    const q = query(collectionRef, orderBy('createAt', 'desc'))

    const unsuscribe = onSnapshot(q, QuerySnapshot => {
      setdeposits(
        QuerySnapshot.docs.map(doc =>({
          id: doc.id,
          comprovanteUri: doc.data().comprovanteUri,
          createAt: doc.data().createAt,
          status: doc.data().status,
          valor: doc.data().valor, 
        }))
      )})
      return unsuscribe;
  },[])

  const handleLogout = () => {
    navigation.navigate('home');
  };


  React.useEffect(() => {
    const collectionRef = collection(db, 'users');
    const q = query(collectionRef);
  
    const unsuscribe = onSnapshot(q, (QuerySnapshot) => {
      const usuarios = QuerySnapshot.docs.map((usuarioDoc) => {
      
        return {
          id: usuarioDoc.id,
          nome: usuarioDoc.data().nome,    
        };
      });
  
      setUsuarios(usuarios);
    });
  
    return unsuscribe;
  }, []);

  const handleDownloadHistory = () => {
    Alert.alert('Download Histórico', 'O histórico completo foi baixado com sucesso!');
  };

  const handleViewOcorrencias = () => {
    setIsOcorrenciaModalVisible(true);
  };

  return (
    <View style={styles.container}>
      
    <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
        <View style={{width: 100, height: 100, backgroundColor: 'purple', position: 'absolute' }}></View>
        <View style={{width: 100, height: 100,backgroundColor: 'blue', top: 120, position: 'absolute', transform: [{rotate: '25deg'}] }}></View>
        <View style={{width: 100, height: 100,left: 10,  backgroundColor: 'red', bottom: 20 ,position: 'absolute', borderRadius: 50, transform: [{rotate: '50deg'}] }}></View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>

        <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton} onPress={toggleView}>
              <Text style={styles.buttonText}>{isHistoryVisible ? 'Novo Depósito' : 'Histórico'}</Text>
              
            </TouchableOpacity>

            <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadHistory}>
              <Text style={styles.buttonText}>Download Histórico</Text>
            </TouchableOpacity>
        </View>

      
            
      <TouchableOpacity style={styles.OcorrenciaButton} onPress={handleViewOcorrencias}>
        <Text style={styles.buttonText}>Ocorrências</Text>
      </TouchableOpacity>  

      
    
       <ScrollView style={styles.declareText}>
        {isHistoryVisible ? (
          <View >
            <Text style={styles.title}>Histórico de Depósitos</Text>
            {deposits.map((deposit) => (
              <DepositHistory  key={deposit.id} {...deposit} />
            ))}
          </View>
        ) : (
          <DeclareDeposit onSelectOcorrencia={setSelectedOcorrencia} />
        )}
      </ScrollView>    

      <Modal
        visible={isOcorrenciaModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsOcorrenciaModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setIsOcorrenciaModalVisible(false)}
            >
              <Text style={styles.closeModalText}>Fechar</Text>
            </TouchableOpacity>

            {/* Adicione aqui o componente OcorrenciaViewer */}
            <OcorrenciaViewer />
          </View>
        </View>
      </Modal>
     
    </View>
  );
}


