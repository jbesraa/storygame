import {Navigation} from 'react-native-navigation';
import Players from './src/players';
import Card from './src/card';

Navigation.registerComponent('Players', () => Players);
Navigation.registerComponent('Card', () => Card);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Players',
            },
          },
        ],
      },
    },
  });
});
