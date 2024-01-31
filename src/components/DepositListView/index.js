// DepositListView.js
import React from 'react';
import { View, Button } from 'react-native';
import DepositList from './DepositList';
import styles from './styles';

const DepositListView = ({ deposits, onDepositSelect, onLogout }) => {
  return (
    <View style={styles.Maincontainer}>
      <DepositList deposits={deposits} onDepositSelect={onDepositSelect} />
      <View style={styles.logoutContainer}>
        <Button title="Sair" onPress={onLogout} />
      </View>
    </View>
  );
};

export default DepositListView;
