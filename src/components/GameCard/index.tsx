import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import useStyles from './styles';
import { IGameCardProps } from './types';

import TextComponent from '../Text';
import Button from '../Button';
import PlatformTag from '../PlatformTag';
import ScoreTag from '../ScoreTag';
import { NavigationProps } from '../../global/types';

const GameCard: React.FC<IGameCardProps> = ({ game }) => {
  const navigation = useNavigation<NavigationProps>()
  const styles = useStyles();

  return (
    <Button
      style={styles.card}
      onPress={() => navigation.push('MyGame', { game })}
    >
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
            {'Status: '}
          </TextComponent>
          <TextComponent>
            {game.getStatus}
          </TextComponent>
        </View>

        <View style={styles.status}>
          <TextComponent weight='semibold'>
            {'Tempo: '}
          </TextComponent>
          <TextComponent>
            {game.getPlaytimeInHours()}
          </TextComponent>
        </View>
      </View>
    </Button>
  );
}

export default GameCard;