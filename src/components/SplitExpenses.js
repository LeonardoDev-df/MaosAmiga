// SplitExpenses.js
import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';

const SplitExpenses = ({ expenses }) => {
  const [participants, setParticipants] = useState(1); // Inicialmente, apenas o usuário atual
  const [totalExpense, setTotalExpense] = useState(0);

  const handleSplitExpenses = () => {
    if (participants < 1 || totalExpense <= 0) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente');
      return;
    }

    const individualExpense = totalExpense / participants;
    Alert.alert('Divisão Concluída', `Cada participante deve contribuir: R$ ${individualExpense.toFixed(2)}`);
  };

  return (
    <View>
      <Text>Total de Despesas: R$ {totalExpense.toFixed(2)}</Text>
      <Text>Participantes: {participants}</Text>
      <Button title="Dividir Contas" onPress={handleSplitExpenses} />
    </View>
  );
};

export default SplitExpenses;
