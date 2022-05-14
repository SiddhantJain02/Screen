import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigaton from './src/BottomNavigator/BottomNavigaton'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomNavigaton" component={BottomNavigaton}  options={{headerShown: false}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;