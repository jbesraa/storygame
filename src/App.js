import React from 'react';
import {View} from 'react-native-ui-lib';
import Players from './players';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Players} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
