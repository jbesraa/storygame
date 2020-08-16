import React from 'react';
import Players from './players';
import Cards from './card';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Players" component={Players} />
        <Stack.Screen name="Cards" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
