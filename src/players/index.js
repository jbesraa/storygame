import React from 'react';
import {View, Button, TextField} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

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
  input: {
    paddingTop: 200,
  },
  img: {
    width: '10%',
    height: '5%',
  },
});

const Players = () => {
  // const [playersNumber, setPlayersNumber] = React.useState(0);

  const handleOnPress = () => {
    console.log('clicked');
  };

  return (
    <View style={styles.container}>
      <TextField
        style={styles.input}
        text50
        placeholder="Enter Player Name"
        dark10
      />
      <Button
        label="Add More Players"
        style={styles.btn}
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
