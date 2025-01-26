import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IGameCardProps } from './types';
import { displayTime } from './lib';

import TextComponent from '../Text';
import Button from '../Button';
import PlatformTag from '../PlatformTag';
import ScoreTag from '../ScoreTag';

const GameCard: React.FC<IGameCardProps> = ({ game }) => {
  const styles = useStyles();

  return (
    <Button style={styles.card} onPress={() => console.log(game)}>
      <View style={styles.cardTop}>
        <PlatformTag platform={game.getPlatform} />

        <ScoreTag
          quadrant={game.getScoreQuadrant()}
          score={game.getOverallScore()}
        />
      </View>

      <TextComponent weight='bold' style={styles.title}>
        {game.getName}
      </TextComponent>

      <View style={styles.infos}>
        <View style={styles.status}>
          <TextComponent weight='semibold'>
            Status:
          </TextComponent>
          <TextComponent>
            {game.getStatus}
          </TextComponent>
        </View>

        <View style={styles.status}>
          <TextComponent weight='semibold'>
            Tempo:
          </TextComponent>
          <TextComponent>
            {displayTime(game)}
          </TextComponent>
        </View>
      </View>
    </Button>
  );
}

export default GameCard;