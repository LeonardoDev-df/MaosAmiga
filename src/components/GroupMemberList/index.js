import React from 'react';
import { View, Text, FlatList, Modal, Button, StyleSheet, ScrollView } from 'react-native';

// Importando os estilos específicos para o GroupMemberList
import styles from './styles';

const GroupMemberList = ({ isVisible, members, onClose, onSelectMember }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Membros</Text>
        <ScrollView>
          <FlatList
            data={members}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <>
                <View style={styles.memberItem}>
                  <Text style={styles.memberName}>{item.nome}</Text>
                  <Button style={styles.selectButton} title="Histórico" onPress={() => onSelectMember(item)} />
                </View>
                <Text></Text>
              </>
            )}
          />
        </ScrollView>
        <View  style={styles.closeButton} >
          <Button title="Fechar" onPress={onClose}  />
        </View>
      </View>
     
     
    </Modal>
  );
};

export default GroupMemberList;
