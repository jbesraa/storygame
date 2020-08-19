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
      <Text style={styles.title}>Tell Your Story</Text>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
    height: '100%',
  },
  btnWrapper: {
    flex: 1,
    width: '90%',
    paddingTop: 500,
  },
  title: {
    fontSize: 24,
  },
});

export default LandingPage;
