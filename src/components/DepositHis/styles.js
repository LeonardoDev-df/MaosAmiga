import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360
  },
 
  color: {
    backgroundColor: '#3498db', // Cor de fundo
    padding: 20,
    borderRadius: 8,
    marginBottom: 10
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalView: {
    backgroundColor: '#FFe',
    borderRadius: 20,
    padding: 34,
    alignItems: 'center',
  },
  actionModalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  actionModalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  closeModalButton: {
    position: 'absolute',
    top: 10,
    right: 10,

    borderRadius: 8,
    justifyContent: 'center',
    textAlign: 'center'
  },
  closeModalText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '72%',
   
  },
  acceptButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  rejectButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
