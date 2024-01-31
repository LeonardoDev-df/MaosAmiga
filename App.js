import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes/routes';
import { UserProvider } from './src/components/UserContext';
export default function App() {
  return (
    <UserProvider>
       <NavigationContainer>
          <Routes />
        </NavigationContainer>
    </UserProvider>  
  );
}
