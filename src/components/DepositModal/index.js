// DepositModal.js
import React from 'react';
import { View, Modal, Text, Button, StyleSheet } from 'react-native';
import styles from './styles';
const DepositModal = ({ isVisible, deposit, onAccept, onReject, onClose }) => {
  if (!deposit) {
    return null;
  }

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text>{`Detalhes do Depósito ${deposit.id}`}</Text>
          <Text>{`Valor: ${deposit.amount}`}</Text>
          <Text>{`Status: ${deposit.status}`}</Text>
          {/* Adicione outros detalhes do depósito conforme necessário */}
          <Button title="Aceitar" onPress={() => onAccept(deposit)} />
          <Button title="Rejeitar" onPress={() => onReject(deposit)} />
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};



export default DepositModal;
