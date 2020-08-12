import React from 'react';
import {View, Button, TextField} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import uuid from 'react-native-uuid';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  btnWrapper: {
    paddingTop: 400,
    width: '100%',
  },
  inputsWrapper: {
    paddingTop: 200,
  },
  img: {
    width: '10%',
    height: '5%',
  },
});

const Players = () => {
  const [players, editPlayers] = React.useState([
    {
      placeholder: 'Enter Player Name',
      value: '',
      id: uuid.v4(),
    },
  ]);
  const handleOnPress = () => {
    console.log('clicked');
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
  return (
    <View style={styles.container}>
      <View style={styles.inputsWrapper}>
        {players.map((player) => {
          const {value, placeholder, id} = player;
          return (
            <TextField
              key={id}
              text50
              placeholder={placeholder}
              dark10
              onChangeText={(text, identifier = id) => {
                const newState = players.map((p) => {
                  const {id: pId} = player;
                  if (pId === identifier) {
                    return {
                      name: text,
                      ...p,
                    };
                  }
                  return p;
                });
                editPlayers(newState);
              }}
              value={value}
            />
          );
        })}
      </View>

      <Button
        label="Add More Players"
        style={styles.btn}
        onPress={addPlayer}
        bg-primaryColor
        square
      />
      <View style={styles.btnWrapper}>
        <Button
          label="Start Storying"
          style={styles.btn}
          onPress={handleOnPress}
          bg-primaryColor
          square
        />
      </View>
    </View>
  );
};

export default Players;
