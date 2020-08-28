import PropTypes from 'prop-types';
import React from 'react';
import {Button} from 'react-native-ui-lib';
import {View, Text, Image} from 'react-native';
import {handleTurn} from '../utils';
import styles from './styles';

const Cards = (props) => {
  const {
    route: {
      params: {players},
    },
  } = props;
  const [state, setState] = React.useState({
    playerIndex: 0,
    cardIndex: 0,
    currentCard: {name: '', imgURL: ''},
    currentPlayer: {name: '', cards: []},
  });

  const getNextPlayer = () => {
    const {cardIndex, playerIndex} = state;
    const {newPlayerIndex, newCardIndex} = handleTurn({
      players,
      currentCardIndex: cardIndex,
      currentPlayerIndex: playerIndex,
    });
    setState({
      ...state,
      playerIndex: newPlayerIndex,
      cardIndex: newCardIndex,
    });
  };

  React.useEffect(() => {
    const {cards, name} = players[state.playerIndex];
    setState({
      ...state,
      currentCard: cards[state.cardIndex],
      currentPlayer: {cards, name},
    });
  }, [state.playerIndex, state.cardIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{state.currentPlayer.name}</Text>
        <Text style={styles.text}>{state.currentCard.name}</Text>
      </View>
      <View style={styles.imgContainer}>
        {state.currentCard.imgURL ? (
          <Image
            style={styles.img}
            source={{
              uri: `${state.currentCard.imgURL}`,
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
            onPress={getNextPlayer}
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
