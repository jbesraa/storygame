import PropTypes from 'prop-types';
import React from 'react';
import {View, Button, Text} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

const LandingPage = ({navigation}) => {
  const handleOnPress = () => {
    navigation.navigate('Players');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tell</Text>
      </View>
      <Text style={styles.title}>The</Text>
      <Text style={styles.title}>Story</Text>
      <View style={styles.btnWrapper}>
        <Button label="Start" onPress={handleOnPress} bg-grey square />
      </View>
    </View>
  );
};

LandingPage.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffaa71',
    padding: '10%',
    height: '100%',
  },
  btnWrapper: {
    width: '90%',
    display: 'flex',
    paddingTop: 300,
  },
  titleContainer: {
    display: 'flex',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
});

export default LandingPage;
