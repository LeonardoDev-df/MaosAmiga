// Importando StyleSheet do react-native
import { StyleSheet } from 'react-native';

// Criando o objeto de estilos
const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: '#ccc',
    borderRadius: 20,
    padding: 10, // Reduzi o padding para melhorar a aparência
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    marginTop: 63,  
    height: 585,
  },
  title: {
    fontSize: 20, // Aumentando o tamanho da fonte
    fontWeight: 'bold',
    marginBottom: 60,
    justifyContent: 'center',
    textAlign: 'center',
    top: 30
  },
  memberItem: {
    flexDirection: 'row', // Para alinhar o botão ao lado do nome
    justifyContent: 'space-between', // Para posicionar os itens ao lado
    alignItems: 'center', // Alinhando verticalmente
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    top: 10,
    backgroundColor: 'white',
    height: 65,
    width: 280,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  memberName: {
    fontSize: 16, // Ajustando o tamanho da fonte do nome
    fontWeight: 'bold',
  },
  selectButton: {
    fontSize: 16, // Ajustando o tamanho da fonte do botão
    padding: 5, // Reduzindo o padding do botão
    backgroundColor: 'lightgray',
  },
  closeButton: {
    marginTop: 30,
    padding: 20,

    alignItems: 'center',
    paddingTop: 10,

    borderRadius: 8,
  },
});

// Exportando o objeto de estilos
export default styles;
