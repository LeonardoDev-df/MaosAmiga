import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../pages/home';
import Users from '../pages/users';
import Admin from '../pages/admin';
// 

const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={ Home } />
      <Stack.Screen name="users" component={Users} />
      <Stack.Screen name="admin" component={Admin} />
      
    </Stack.Navigator>
  );
}
