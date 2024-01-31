// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:41,

  },
  declareText:{
    width: 340,
    backgroundColor: '#ccc', // Cor verde para o botão de download
    marginTop: 155,   
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
    width: 340,
    marginTop:10
  },
  downloadButton: {
    padding: 10,
    backgroundColor: '#6BA5F2', // Cor verde para o botão de download
    borderRadius: 5,
    marginLeft: 10, // Espaço à esquerda para separar os botões
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10, // Adicione margem inferior para separar o cabeçalho do conteúdo principal
    top: 140,
    alignItems: 'center',
    position: 'absolute'
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  OcorrenciaButton:{
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    position: 'absolute',
    top: 62,
    left: 90,
    justifyContent: 'center',
    textAlign: 'center',
  },
  logoutButton: {
    padding: 10,
    backgroundColor: '#5079F2',
    borderRadius: 5,
    position: 'absolute',
    top: 62,
    right: 70
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    
  },
  closeModalText: {
    display: 'flex',
    padding: '2%', // Usando porcentagem
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    top: 90, // Usando porcentagem
    width: '90%',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    marginHorizontal: 17, // Usando porcentagem
  },
  images:{
    flex: 1
  }
});
