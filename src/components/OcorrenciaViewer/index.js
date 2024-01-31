// OcorrenciaViewer.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';
import styles from './styles'; // Importe os estilos necessários

const OcorrenciaViewer = ({ ocorrencias, saldoDoGrupo = 750 }) => {
  const [periodo, setPeriodo] = useState('');
  const [ocorrenciasFiltradas, setOcorrenciasFiltradas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [ocorrenciaSelecionada, setOcorrenciaSelecionada] = useState(null);

  const buscarOcorrencias = () => {
    console.log('ocorrencias:', ocorrencias); // Verifique no console
    if (ocorrencias) {
      const ocorrenciasFiltradas = ocorrencias.filter((ocorrencia) =>
        ocorrencia.periodo.includes(periodo)
      );
      setOcorrenciasFiltradas(ocorrenciasFiltradas);
    }
  };
  

  const handleOcorrenciaPress = (ocorrencia) => {
    setOcorrenciaSelecionada(ocorrencia);
    setModalVisible(true);
  };

  const closeModal = () => {
    console.log('Fechando modal'); // Verifique no console
    setModalVisible(false);
  };
  

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleOcorrenciaPress(item)}>
      <View style={styles.ocorrenciaItem}>
        <Text style={styles.ocorrenciaItemText}>{`Valor: R$ ${item.valor.toFixed(2)}`}</Text>
        <Text style={styles.ocorrenciaItemText}>{`Período: ${item.periodo}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Ocorrências do Grupo</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o período (ex: '01/2023')"
        value={periodo}
        onChangeText={setPeriodo}
      />
      <TouchableOpacity style={styles.button} onPress={buscarOcorrencias}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {ocorrenciasFiltradas.length > 0 ? (
        <FlatList
          data={ocorrenciasFiltradas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.noOcorrenciasText}>Nenhuma ocorrência neste período</Text>
      )}

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeModalButton} onPress={closeModal}>
              <Text style={styles.closeModalText}>Fechar</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Detalhes da Ocorrência</Text>
            <Text style={styles.modalText}>{`Valor: R$ ${ocorrenciaSelecionada?.valor?.toFixed(2) || 'N/A'}`}</Text>
            <Text style={styles.modalText}>{`Período: ${ocorrenciaSelecionada?.periodo || 'N/A'}`}</Text>

            <TouchableOpacity onPress={() => Linking.openURL(ocorrenciaSelecionada?.fotoUri || '')}>
              <Text style={styles.modalText}>Ver Foto</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL(ocorrenciaSelecionada?.comprovanteUri || '')}>
              <Text style={styles.modalText}>Baixar Comprovante</Text>
            </TouchableOpacity>

            {/* Adicione outros comprovantes ou informações aqui */}
          </View>
        </View>
      </Modal>

      <Text style={styles.saldoText}>{`Saldo do Grupo: R$ ${saldoDoGrupo.toFixed(2)}`}</Text>
    </View>
  );
};

export default OcorrenciaViewer;
