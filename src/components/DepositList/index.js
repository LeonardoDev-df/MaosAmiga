// DepositList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const DepositList = ({ deposits, onDepositSelect }) => {
  return (
    <View>
      <FlatList
        data={deposits}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onDepositSelect(item)}>
            <View style={styles.depositItem}>
              <Text>{`Valor: ${item.amount}`}</Text>
              <Text>{`Status: ${item.status}`}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  depositItem: {
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default DepositList;
