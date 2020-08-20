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
          <Stack.Screen
            name="Landing"
            component={LandingPage}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ffaa71',
                borderBottomColor: '#ffaa71',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Players"
            component={Players}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#ef767a',
                borderBottomColor: '#ef767a',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Cards"
            component={Cards}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#d54062',
                borderBottomColor: '#d54062',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
