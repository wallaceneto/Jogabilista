import React, { useContext } from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IScoreTagProps } from './types';
import { selectColor } from './lib';

import TextComponent from '../Text';
import { ThemeContext } from '../../storage/context';

const ScoreTag: React.FC<IScoreTagProps> = ({ score, quadrant }) => {
  const style = useStyles;
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={style(selectColor(colors, quadrant)).container}
    >
      <TextComponent light weight='semibold'>
        {score}
      </TextComponent>
    </View>
  );
}

export default ScoreTag;