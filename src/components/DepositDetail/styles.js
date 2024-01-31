import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
  },
  text: {
    marginBottom: 8,
    color: 'black',
    fontWeight: 'bold',
  },
  comprovanteImage: {
    width: '100%',
    height: 20, // ajuste a altura conforme necessário
    marginVertical: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
})