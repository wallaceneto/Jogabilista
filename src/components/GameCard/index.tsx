import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IGameCardProps } from './types';
import { convertTime } from './lib';
import TextComponent from '../Text';
import Button from '../Button';
import PlatformTag from '../PlatformTag';
import ScoreTag from '../ScoreTag';

const GameCard: React.FC<IGameCardProps> = ({ game }) => {
  const style = useStyles();

  return (
    <Button style={style.card}>
      <View style={style.cardTop}>
        <PlatformTag platform={game.plataform || 'Outro'} />

        <ScoreTag
          quality_score={game.quality_score}
          interest_score={game.interest_score}
        />
      </View>

      <TextComponent weight='bold' style={style.title}>
        {game.name}
      </TextComponent>

      <View style={style.infos}>
        <View style={style.status}>
          <TextComponent weight='semibold'>
            Status:
          </TextComponent>
          <TextComponent>
            {game.status}
          </TextComponent>
        </View>

        <View style={style.status}>
          <TextComponent weight='semibold'>
            Tempo:
          </TextComponent>
          <TextComponent>
            {game.play_time ? convertTime(game.play_time) + ' horas' : 'N/A'}
          </TextComponent>
        </View>
      </View>
    </Button>
  );
}

export default GameCard;