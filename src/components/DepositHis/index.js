import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Modal, Linking } from 'react-native';
import { Timestamp, updateDoc } from 'firebase/firestore';
import { getFirestore, deleteDoc, collection, onSnapshot, orderBy, query, QuerySnapshot, doc } from 'firebase/firestore';
import { auth, db } from '../../../config/fb';
import styles from './styles'
export default function DepositHistory({
  id,
  comprovanteUri,
  createAt,
  valor,
  status,
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAcceptModalVisible, setAcceptModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Adicionando isLoading

  let setTestas = '';
  if (status === false) {
    setTestas = 'pendente';
  }

  const createAtTimestamp = createAt;
  const createAtDate = createAtTimestamp.toDate();
  const day = createAtDate.getDate();
  const month = createAtDate.getMonth() + 1;
  const year = createAtDate.getFullYear();
  const formattedCreateAt = `${day}/${month}/${year}`;

  const handleItemPress = () => {
  
    setIsLoading(true); // Definindo isLoading para true

    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

 
  
  const depositoUid = "FhRRfQoCU6ASTCUbROQA";
  const userUid = "MlB6UPDj974tLhUobY46";
  const handleAcceptDeposit = () => {
     /* const doRef = doc(db, 'users', userUid , 'depositos', depositoUid );
      updateDoc(doRef,{
        status: true,
      })
      */
  };

  const handleRejectDeposit = () => {
    const doRef = doc(db, 'users', userUid , 'depositos' );
      deleteDoc(doRef);
  };


  // Renderizar somente se o status for false
  if (status === false) {
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                      <TouchableOpacity
                        style={styles.closeModalButton}
                        onPress={closeModal}
                      >
                        <Text style={styles.closeModalText}>Fechar</Text>
                      </TouchableOpacity>
                  <Text style={styles.modalText}>
                    Deseja aceitar o depósito?
                  </Text>

                  <View style={styles.buttonContainer}>
               
                      <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptDeposit}>                  
                        <Text style={styles.buttonText} >Aceitar</Text>                     
                      </TouchableOpacity>   
                      <TouchableOpacity style={styles.rejectButton} onPress={handleRejectDeposit}>
                        <Text style={styles.buttonText}> Rejeitar</Text>
                      </TouchableOpacity>
                  </View>
                                 
            </View>
          </View>
          
        </Modal>
      </View>
    );
  } else {
    // Se o status for true, não renderizar nada
    return null;
  }
}
