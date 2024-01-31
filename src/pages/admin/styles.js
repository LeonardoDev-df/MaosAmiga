import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  totalBalance: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 45,
    color: 'black', // Adicionei a cor do texto para melhor contraste
  },
  container: {
    flex: 1,
    padding:15,
   
  },
  declareText:{
    width: 310,
    backgroundColor: '#ccc', // Cor verde para o botão de download
    marginTop: 5,   
    borderRadius: 8,
  },
  images:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Maincontainer: {
    flex: 1,
    marginTop: 6,
    backgroundColor: '#FFF',
    borderRadius: 10, // Adicionei borda para suavizar a transição
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 15
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 1, // Reduzi a margem superior para melhorar a aparência
    paddingVertical: 10,
    backgroundColor: '#FFF',
    elevation: 1,
    marginHorizontal: 20,
    borderRadius: 8
  },
  buttonCo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 2, // Reduzi a margem superior para melhorar a aparência
    paddingVertical: 10,
   
    marginHorizontal: 20,
    borderRadius: 8
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#ccc',
    borderRadius: 20,
    padding: 20, // Reduzi o padding para melhorar a aparência
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  modal: {
    paddingRight: 10,
  },
  modalForm: {
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
    marginTop: 100,  
    height: 662,
    marginHorizontal: 20
  },
  modalHisto: {
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
    marginTop: 90,  
    height: 592,
  }
});
