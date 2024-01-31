// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360
    
  },
  color: {
    backgroundColor: '#FFe', // Cor de fundo
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
    width: 300,
    marginHorizontal: 21,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
  },
  state: {
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 1,
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
  closeModalButton: {
    alignSelf: 'flex-end',
    marginBottom: 8,
  },
  closeModalText: {
    color: 'blue',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default styles;
