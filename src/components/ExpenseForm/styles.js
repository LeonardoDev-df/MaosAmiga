import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  formContainer: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginTop: 61, // Ajuste conforme necessário
    marginHorizontal: 20,
    backgroundColor: '#fff', // Cor de fundo
    borderRadius: 10,
    elevation: 3, // Sombra para dar destaque
    
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  pickerItem: {
    fontSize: 16,
    color: 'black',
  },
  input: {
    height: 40,
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  uploadButton: {
    marginBottom: 16,
  },
  previewImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 5,
  },
  submitButton: {
    marginBottom: 8,
  },
  cancelButton: {
    marginBottom: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 20,
    borderRadius: 8,
  },
  sectionButton:{
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  selectButton:{
    backgroundColor: '#f0f0f0', // Cor de fundo do botão
    padding: 8,
    marginBottom: 20,
    borderRadius: 8,
  },
});
