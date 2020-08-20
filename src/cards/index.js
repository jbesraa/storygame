import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Button} from 'react-native-ui-lib';

import {View, Text, Image, StyleSheet} from 'react-native';
import {randomInteger} from '../utils';
import CardsData from '../data';

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
      params: {playerName},
    },
  } = props;

  const [visitedCards, setVisitedCards] = useState([]);
  const [notVisitedCards, setNotVisitedCards] = useState([...CardsData]);
  const [currentCard, setCurrentCard] = useState({name: '', imgURL: ''});

  const handleOnPress = () => {
    const cardsDataCount = notVisitedCards.length;
    if (cardsDataCount < 1) {
      return;
    }

    const randomNumber = randomInteger(0, cardsDataCount - 1);
    const {id, name, imgURL} = notVisitedCards[randomNumber];
    setCurrentCard({name, imgURL});
    setVisitedCards([...visitedCards, {id}]);
    setNotVisitedCards(notVisitedCards.filter((c, i) => i !== randomNumber));
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{playerName}</Text>

        <Text style={styles.text}>{currentCard.name || ''}</Text>
      </View>
      <View style={styles.imgContainer}>
        {currentCard.imgURL ? (
          <Image
            style={styles.img}
            source={{
              uri: `${currentCard.imgURL}`,
            }}
          />
        ) : null}
      </View>
      <View>
        <View style={styles.btnWrapper}>
          <Button
            label="Roll The Dice"
            style={styles.btn}
            body
            onPress={handleOnPress}
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
