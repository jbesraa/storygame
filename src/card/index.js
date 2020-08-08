import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  img: {
    width: '90%',
    height: '80%',
  },
  text: {
    paddingBottom: 30,
    fontSize: 28,
  },
});

const Card = ({name, imgURL}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Image
        style={styles.img}
        source={{
          uri: `${imgURL}`,
        }}
      />
    </View>
  );
};

export default Card;
