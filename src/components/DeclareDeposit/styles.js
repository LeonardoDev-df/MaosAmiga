// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F2F2F2',
    height: 450,
    borderRadius: 16,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    top: 80,
    textAlign: 'center',
    width: 230,
    color: 'black'
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 28,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    width: 120,
    marginRight: 40
  },
  logoutCon: {
    backgroundColor: '#F2F2F2',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 126,
    width: 110,
  },
  organi:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 150, 
  },
  orga:{
    top: 80
  },
    // Adicione ao seu arquivo de estilos (styles.js ou equivalente)
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  closeModalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db',
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  downloadText: {
    fontSize: 18,
    color: '#3498db',
    marginBottom: 20,
  },
  oh:{
    backgroundColor: 'red',
    position: 'absolute',
    width: 100
  },
  selectButton:{
    backgroundColor: '#f0f0f0', // Cor de fundo do botão
    padding: 10,
    borderRadius: 8,
    top: 150, 
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default styles;
