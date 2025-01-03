import React, { useContext } from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IPlatformTagProps } from './types';
import { getPlatformColor } from './lib';
import { ThemeContext } from '../../storage/context';
import TextComponent from '../Text';

const PlatformTag: React.FC<IPlatformTagProps> = ({ platform }) => {
  const {colors} = useContext(ThemeContext);
  const style = useStyles;

  return (
    <View style={style(getPlatformColor(platform, colors)).tag}>
      <TextComponent light size={14}>
        {platform}
      </TextComponent>
    </View>
  );
}

export default PlatformTag;