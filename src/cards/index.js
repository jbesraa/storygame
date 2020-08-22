import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Button} from 'react-native-ui-lib';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d54062',
    height: '100%',
  },
  img: {
    width: '50%',
    height: '40%',
  },
  imgContainer: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingBottom: 30,
    fontSize: 28,
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200,
  },
  btn: {
    width: '50%',
  },
});

const Cards = (props) => {
  const {
    route: {
      params: {players},
    },
  } = props;
  const numberOfPlayers = players.length - 1;
  const turns = 1;
  const [playerTurn, setPlayerTurn] = useState(numberOfPlayers);
  const [cardTurn, setCardTurn] = useState(turns);

  const {cards, name} = players[playerTurn];

  const currentCard = cards[cardTurn];

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>

        <Text style={styles.text}>{currentCard.name}</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: `${currentCard.imgURL}`,
          }}
        />
      </View>
      <View>
        <View style={styles.btnWrapper}>
          <Button
            label="Roll The Dice"
            style={styles.btn}
            body
            onPress={() => {}}
            bg-primaryColor
            square
          />
        </View>
      </View>
    </View>
  );
};

Cards.propTypes = {
  route: PropTypes.object,
};

export default Cards;
