import PropTypes from 'prop-types';
import React from 'react';
import {View, Button, TextField} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

const Players = ({navigation}) => {
  const [playerName, setPlayerName] = React.useState('');
  const handleOnPress = () => {
    navigation.navigate('Cards', {playerName});
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsWrapper}>
        <TextField
          style={styles.input}
          text50
          placeholder={'player name'}
          dark10
          onChangeText={(text) => {
            console.log('playername', playerName);
            console.log('text', text);
            setPlayerName(text);
          }}
          value={playerName}
        />
      </View>
      <View style={styles.btnWrapper}>
        <Button label="Start " onPress={handleOnPress} bg-grey square />
      </View>
    </View>
  );
};

Players.propTypes = {
  navigation: PropTypes.object,
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef767a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
    height: '100%',
  },
  inputsWrapper: {
    flex: 5,
    width: '90%',
    paddingTop: '20%',
  },
  btnWrapper: {
    flex: 1,
    width: '90%',
  },
  input: {},
});

export default Players;

/* <View style={styles.btnWrapper}>
        <Button
          label="Add More Players"
          onPress={addPlayer}
          bg-primaryColor
          square
        />
      </View> */

// const addPlayer = () => {
//   const id = uuid.v4();
//   const newInput = {
//     placeholder: 'Enter Player Name',
//     value: '',
//     id,
//   };
//   const newState = [...players, newInput];
//   editPlayers(newState);
// };

// const [players, editPlayers] = React.useState([

//   {
//     placeholder: 'Enter Player Name',
//     value: '',
//     id: uuid.v4(),
//   },
// ]);
// const updatePlayerName = (text, id) => {
//   const newState = players.map((p) => {
//     const {id: pId} = p;
//     if (pId === id) {
//       return {
//         name: text,
//         ...p,
//       };
//     }
//     return p;
//   });
//   editPlayers(newState);
// };
// import uuid from 'react-native-uuid';
