// DepositHistory.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity,  Modal, Linking } from 'react-native';
import { getFirestore, collection, onSnapshot, orderBy, query, QuerySnapshot, doc } from 'firebase/firestore';
import { auth, db } from '.././../../config/fb';
import styles from './styles';
import { Timestamp } from 'firebase/firestore';
import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';

export default function DepositHistory ({
  id,
  comprovanteUri,
  createAt,
  valor,
  status,
}) {

  
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  //const [Testas, setTestas] = useState('');
  let setTestas = ''
  if( status == false ){
    setTestas = 'pendente'
  }
  
console.log(comprovanteUri)
const compro = comprovanteUri
const createAtTimestamp = createAt;
const createAtDate = createAtTimestamp.toDate();

const day = createAtDate.getDate();
const month = createAtDate.getMonth() + 1; // Os meses são baseados em zero, então somamos 1.
const year = createAtDate.getFullYear();

const formattedCreateAt = `${day}/${month}/${year}`;

  
   const handleItemPress = (item) => {
     setSelectedItem(item);
     setModalVisible(true);
   };
 
   const closeModal = () => {
     setModalVisible(false);
   };




   return (
    <View style={styles.content}>
      <TouchableOpacity onPress={handleItemPress}>
        <View style={styles.color}>
          <View style={styles.historyItem}>
            <View>
              <Text style={styles.state}>{`Valor: ${valor}`}</Text>
              <Text style={styles.state}>{`Status: ${setTestas}`}</Text>
            </View>
            <View>
              <Text style={styles.state}>{`Data: ${formattedCreateAt}`}</Text>
              <Text style={styles.state}></Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeModalButton} onPress={closeModal}>
              <Text style={styles.closeModalText}>Fechar</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Detalhes do Depósito</Text>
             
          <TouchableOpacity >
            <Text style={styles.downloadText}>Baixar Comprovante</Text>
          
          </TouchableOpacity>


          </View>
        </View>
      </Modal>
    </View>
  );
};
 
 