import React from 'react';
import {View, Button} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import Card from './card';
import {randomInteger} from './utils';
import CardsData from './data';

const styles = StyleSheet.create({
  btnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  btn: {
    width: '50%',
  },
});

const App = () => {
  const [visitedCards, setVisitedCards] = React.useState([]);
  const [currentCard, setCurrentCard] = React.useState({name: '', imgURL: ''});
  const [notVisitedCards, setNotVisitedCards] = React.useState([...CardsData]);
  console.log('App -> notVisitedCards', notVisitedCards);

  const handleOnPress = () => {
    const cardsDataCount = notVisitedCards.length;
    if (cardsDataCount < 1) {
      console.log('done');
      return;
    }
    const randomNumber = randomInteger(0, cardsDataCount - 1);
    console.log('handleOnPress -> randomNumber', randomNumber);
    const card = notVisitedCards[randomNumber];
    console.log('handleOnPress -> card', card);
    const {id, name, imgURL} = card;
    setCurrentCard({name, imgURL});
    setVisitedCards([...visitedCards, {id}]);
    setNotVisitedCards(notVisitedCards.filter((c, i) => i !== randomNumber));
    console.log(
      'handleOnPress -> notVisitedCards.splice(randomNumber, 1)',
      notVisitedCards.splice(randomNumber, 1),
    );
  };
  console.log('App -> visitedCards', visitedCards);
  return (
    <>
      <View>
        <Card name={currentCard.name} imgURL={currentCard.imgURL} />
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
    </>
  );
};

export default App;
