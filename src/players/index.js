import PropTypes from 'prop-types';
import React from 'react';
import {View, Button} from 'react-native-ui-lib';
import {StyleSheet, Text, TextInput} from 'react-native';
import Title from '../title';

const Players = ({navigation}) => {
  const [playerName, setPlayerName] = React.useState('');
  const handleOnPress = () => {
    navigation.navigate('Cards', {playerName});
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
    padding: '10%',
    height: '100%',
  },
  inputsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    paddingTop: '20%',
  },
  btnWrapper: {
    flex: 1,
    paddingTop: '40%',
    width: '90%',
  },
  input: {
    width: '40%',
    paddingLeft: 20,
    fontSize: 30,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
  },
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
