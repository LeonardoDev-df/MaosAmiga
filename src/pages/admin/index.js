import React, { useState, useEffect } from 'react';
import { ImageBackground, Button, View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Modal, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DepositList from '../../components/DepositList';
import DepositDetail from '../../components/DepositDetail';
import DepositHis from '../../components/DepositHis';
import ExpenseForm from '../../components/ExpenseForm';
import DepositModal from '../../components/DepositModal';
import GroupMemberList from '../../components/GroupMemberList';
import AddMemberForm from '../../components/AddMemberForm';
import { getFirestore, collection, onSnapshot, orderBy, query, QuerySnapshot, doc } from 'firebase/firestore';
import { auth, db } from '../../../config/fb';
import { Timestamp } from 'firebase/firestore';
import { BlurView } from 'expo-blur';
const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'
const profilePicture = require('../../assets/logo.png');
// ... (outras importações)

import styles from './styles';



export default function AdminPage() {
  const [isUserListVisible, setUserListVisible] = useState(false);
  const [isAddMemberFormVisible, setAddMemberFormVisible] = useState(false);
  const [selectedDeposit, setSelectedDeposit] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isHistoryVisible, setHistoryVisible] = useState(false);
  const [isActionModalVisible, setActionModalVisible] = useState(false);
  const [isExpenseFormVisible, setExpenseFormVisible] = useState(false);
  const [isMemberListVisible, setMemberListVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [deposit, setdeposit] = React.useState([])
  const [usuarios, setUsuarios] = useState([]);
  
  const usuarioUid = "MlB6UPDj974tLhUobY46";

React.useEffect(() =>{
  const collectionRef = collection(db, 'users',  usuarioUid, 'depositos');
  const q = query(collectionRef, orderBy('createAt', 'desc'))

  const unsuscribe = onSnapshot(q, QuerySnapshot => {
    setdeposit(
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



  const handleAddMember = (memberData) => {
    
  };

  const handleShowAddMemberForm = () => {
    setAddMemberFormVisible(true);
  };
  
  const handleCloseAddMemberForm = () => {
    setAddMemberFormVisible(false);
  };

  const handleShowMemberList = () => {
    setMemberListVisible(true);
  };

  const handleCloseMemberList = () => {
    setMemberListVisible(false);
  };

  const handleSelectMember = (member) => {
    // Faça algo com o membro selecionado, se necessário
    setSelectedMember(member);
    // ... (outras lógicas)
  };
  const navigation = useNavigation();


  const handleShowUserList = () => {
    setUserListVisible(true);
  };

  const handleCloseUserList = () => {
    setUserListVisible(false);
  };

  
  const handleShowExpenseForm = () => {
    setExpenseFormVisible(true);
  };

  const handleCloseExpenseForm = () => {
    setExpenseFormVisible(false);
  };

  const handleDepositSelect = (deposit) => {
    setSelectedDeposit(deposit);
    setActionModalVisible(true);
  };

 
  const handleShowHistory = () => {
    setHistoryVisible(true);
  };

  const handleCloseHistory = () => {
    setHistoryVisible(false);
  };

  const handleLogout = () => {
    navigation.navigate('home');
  };

  return (
    <View style={styles.container}>
     
     <Image source={{ uri }} style={[styles.images, StyleSheet.absoluteFill]} />
        <View style={{width: 80, height: 100, backgroundColor: 'purple',top:60, position: 'absolute' }}></View>
        <View style={{width: 100, height: 100, backgroundColor: 'blue', top:180, left: 320, position: 'absolute', transform: [{rotate: '25deg'}] }}></View>
        <View style={{width: 100, height: 100, backgroundColor: 'red', bottom: 120 ,position: 'absolute', borderRadius: 50, transform: [{rotate: '50deg'}] }}></View>

      {/* Elemento de texto para exibir o saldo */}
      <Text style={styles.totalBalance}>Saldo do Grupo: R$  750 </Text>
      <View style={styles.buttonCo}>
          <Button title="Cadastrar Membro" onPress={handleShowAddMemberForm} />
          <Button title="Sair" onPress={handleLogout} />
      </View>
     
     
      <View style={styles.buttonContainer}>
        <Button title="Ver Histórico" onPress={handleShowMemberList} />       
        <Button title="Nova Despesa" onPress={handleShowExpenseForm} />  
      </View>

      <View style={styles.Maincontainer}>

    {/* mostrar usuários
      <View>
          <Text>Lista de Usuários e Depósitos:</Text>
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <Text>Nome do Usuário: {item.nome}</Text>
                <Text>Depósitos:</Text>
               
              </View>
            )}
          />
        </View>
            */}




          <View style={styles.declareText}>         
            {deposit.map((deposits) => (
              <DepositHis key={deposits.id} {...deposits} />
            ))}
          </View>

        {selectedDeposit && <DepositDetail deposit={selectedDeposit}>
      
        </DepositDetail> }
        <DepositModal
          isVisible={isModalVisible}
          
          onClose={() => setModalVisible(false)}
        >
         
        </DepositModal>

       
      
       
       <GroupMemberList
            isVisible={isMemberListVisible}
            members={usuarios} // Substitua 'suaListaDeMembros' pela sua variável real
            onClose={handleCloseMemberList}
            onSelectMember={handleSelectMember}
            
        />

        {isAddMemberFormVisible && (
          <AddMemberForm
            isVisible={isAddMemberFormVisible}
            onClose={handleCloseAddMemberForm}
            onAddMember={handleAddMember}
          />
        )}


      
        <Modal visible={isExpenseFormVisible} animationType="slide" transparent={true}>
            <View style={styles.modalForm} >
              <ExpenseForm isVisible={isExpenseFormVisible} onClose={handleCloseExpenseForm} />
            </View>   
          </Modal>
      </View>
    
    </View>
  );
}


