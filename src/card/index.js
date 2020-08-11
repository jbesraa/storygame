import React from 'react';
import {Button} from 'react-native-ui-lib';

import {View, Text, Image, StyleSheet} from 'react-native';
import {randomInteger} from '../utils';
import CardsData from '../data';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  img: {
    width: '50%',
    height: '40%',
  },
  text: {
    paddingBottom: 30,
    fontSize: 28,
  },
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  btn: {
    width: '50%',
  },
});

const Card = () => {
  const [visitedCards, setVisitedCards] = React.useState([]);
  const [currentCard, setCurrentCard] = React.useState({name: '', imgURL: ''});
  const [notVisitedCards, setNotVisitedCards] = React.useState([...CardsData]);

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
    <View>
      {currentCard.name ? (
        <Text style={styles.text}>{currentCard.name}</Text>
      ) : null}
      {currentCard.imgURL ? (
        <Image
          style={styles.img}
          source={{
            uri: `${currentCard.imgURL}`,
          }}
        />
      ) : null}

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

export default Card;
