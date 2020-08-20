import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Tell</Text>
      <Text style={styles.title}>The</Text>
      <Text style={styles.title}>Story</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
});

export default Title;
