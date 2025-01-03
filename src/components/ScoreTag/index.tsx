import React, { useContext } from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../Text';
import { IScoreTagProps } from './types';
import { convertScore } from './lib';
import { ThemeContext } from '../../storage/context';
import { selectColor } from './lib/selectScoreColor';

const ScoreTag: React.FC<IScoreTagProps> = ({ quality, interest }) => {
  const style = useStyles;
  const { colors } = useContext(ThemeContext);

  return (
    quality === undefined || interest === undefined
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
        style={style(selectColor(quality, interest, colors)).container}
      >
        <TextComponent light weight='semibold'>
          {convertScore(quality, interest)}
        </TextComponent>
      </View>
  );
}

export default ScoreTag;