import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Button, TextField} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ef767a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
    paddingTop: '40%',
    height: '100%',
  },
  inputsWrapper: {
    flex: 5,
    width: '90%',
  },
  btnWrapper: {
    flex: 1,
    width: '90%',
  },
  input: {},
});

const Players = (props) => {
  const [players, editPlayers] = React.useState([
    {
      placeholder: 'Enter Player Name',
      value: '',
      id: uuid.v4(),
    },
  ]);

  const handleOnPress = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'Card', // Push the screen registered with the 'Settings' key
      },
    });
  };

  const addPlayer = () => {
    const id = uuid.v4();
    const newInput = {
      placeholder: 'Enter Player Name',
      value: '',
      id,
    };
    const newState = [...players, newInput];
    editPlayers(newState);
  };

  const updatePlayerName = (text, id) => {
    const newState = players.map((p) => {
      const {id: pId} = p;
      if (pId === id) {
        return {
          name: text,
          ...p,
        };
      }
      return p;
    });
    editPlayers(newState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsWrapper}>
        {players.map((player) => {
          const {value, placeholder, id} = player;
          return (
            <TextField
              key={id}
              style={styles.input}
              text50
              placeholder={placeholder}
              dark10
              onChangeText={(text, identifier = id) =>
                updatePlayerName(text, identifier)
              }
              value={value}
            />
          );
        })}
      </View>
      {/* <View style={styles.btnWrapper}>
        <Button
          label="Add More Players"
          onPress={addPlayer}
          bg-primaryColor
          square
        />
      </View> */}
      <View style={styles.btnWrapper}>
        <Button label="Start " onPress={handleOnPress} bg-grey square />
      </View>
    </View>
  );
};

export default Players;
