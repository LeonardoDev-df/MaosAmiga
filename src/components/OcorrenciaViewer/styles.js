// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 17,
    height: 610,
    position: 'absolute',
    width: '90%',
    top: 126,
    borderRadius: 8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  ocorrenciaItem: {
    backgroundColor: '#eee',
    width: '50%',
    padding: 16,
    marginBottom: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  ocorrenciaItemText: {
    fontSize: 16,
  },
  noOcorrenciasText: {
    fontSize: 16,
    color: 'red',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  modalContent: {
    backgroundColor: 'yellow',
    padding: 16,
    borderRadius: 10,
    width: windowWidth - 32,
    height: windowHeight - 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeModalButton: {
    position: 'absolute',
    backgroundColor: 'pink',
    top: 26,
    right: 26,
  },
  closeModalText: {
    color: 'blue',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
  },
  modalLink: {
    color: 'blue',
    fontSize: 16,
    marginBottom: 8,
  },
  saldoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default styles;
