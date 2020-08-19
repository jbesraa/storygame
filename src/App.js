import React from 'react';
import {Provider} from 'react-redux';
import Players from './players';
import Cards from './cards';
import LandingPage from './landing';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {store} from './redux';

export const PlayersContext = React.createContext('');
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Players" component={Players} />
          <Stack.Screen name="Cards" component={Cards} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
