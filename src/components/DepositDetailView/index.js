// DepositDetailView.js
import React from 'react';
import { View, Button } from 'react-native';
import DepositDetail from './DepositDetail';
import styles from './styles';

const DepositDetailView = ({ selectedDeposit, onAcceptDeposit, onRejectDeposit, onLogout }) => {
  return (
    <View style={styles.Maincontainer}>
      <DepositDetail
        deposit={selectedDeposit}
        onAcceptDeposit={onAcceptDeposit}
        onRejectDeposit={onRejectDeposit}
      />
      <View style={styles.logoutContainer}>
        <Button title="Sair" onPress={onLogout} />
      </View>
    </View>
  );
};

export default DepositDetailView;
