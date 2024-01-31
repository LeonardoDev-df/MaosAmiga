// Importando StyleSheet do react-native
import { StyleSheet } from 'react-native';

// Criando o objeto de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 342,
    height: 480,
    top: 0,
    borderRadius: 8,   
  },
  image: {
    
    
  },
  login: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 280,
    height: 100,
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#66707e',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
   
    backgroundColor: '#ffffff90',
    marginBottom: 20
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
  }

});

// Exportando o objeto de estilos
export default styles;
