import React, { useContext } from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IScoreTagProps } from './types';
import { selectColor } from './lib';

import TextComponent from '../Text';
import { ThemeContext } from '../../storage/context';

const ScoreTag: React.FC<IScoreTagProps> = ({ score, quadrant }) => {
  const { colors } = useContext(ThemeContext);
  const styles = useStyles(selectColor(colors, quadrant));

  return (
    <View
      style={styles.container}
    >
      <TextComponent light weight='semibold'>
        {score}
      </TextComponent>
    </View>
  );
}

export default ScoreTag;