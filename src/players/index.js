import PropTypes from 'prop-types';
import React from 'react';
import {View, Button} from 'react-native-ui-lib';
import {Text, TextInput} from 'react-native';
import Title from '../title';
import {createPlayer} from '../utils';
import styles from './styles';

const getPlayers = (num) => {
  const players = [];
  for (let i = 0; i < num; i++) {
    const p = createPlayer();
    players.push(p);
  }

  return players;
};

const Players = ({navigation}) => {
  const [playersNumber, setPlayersNumber] = React.useState('');
  const handleOnPress = () => {
    const players = getPlayers(playersNumber);
    navigation.navigate('Cards', {players});
  };

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.inputsWrapper}>
        <Text style={styles.text}>Players:</Text>
        <TextInput
          style={styles.input}
          placeholder={'number'}
          numeric
          keyboardType={'numeric'}
          onChangeText={(text) => {
            setPlayersNumber(text);
          }}
          value={playersNumber}
        />
      </View>
      <View style={styles.btnWrapper}>
        <Button
          label="Start"
          disabled={playersNumber < 1}
          onPress={handleOnPress}
          bg-grey
          square
        />
      </View>
    </View>
  );
};

Players.propTypes = {
  navigation: PropTypes.object,
};
export default Players;
