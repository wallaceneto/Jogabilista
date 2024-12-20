import React, { useContext } from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../Text';
import { IScoreTagProps } from './types';
import { convertScore } from './lib';
import { ThemeContext } from '../../storage/context';
import { selectColor } from './lib/selectScoreColor';

const ScoreTag: React.FC<IScoreTagProps> = ({ quality_score, interest_score }) => {
  const style = useStyles;
  const { colors } = useContext(ThemeContext);

  return (
    quality_score === undefined || interest_score === undefined
      ?
      <View
        style={style(colors.commonColors.score.empty).container}
      >
        <TextComponent light weight='semibold'>
          N/A
        </TextComponent>
      </View>
      :
      <View 
        style={style(selectColor(quality_score, interest_score, colors)).container}
      >
        <TextComponent light weight='semibold'>
          {convertScore(quality_score, interest_score)}
        </TextComponent>
      </View>
  );
}

export default ScoreTag;