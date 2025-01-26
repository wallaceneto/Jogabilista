import React, { useContext } from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IPlatformTagProps } from './types';
import { getPlatformColor } from './lib';

import { ThemeContext } from '../../storage/context';
import TextComponent from '../Text';

const PlatformTag: React.FC<IPlatformTagProps> = ({ platform }) => {
  const {colors} = useContext(ThemeContext);
  const styles = useStyles(getPlatformColor(platform, colors));

  return (
    <View style={styles.tag}>
      <TextComponent light size={14}>
        {platform}
      </TextComponent>
    </View>
  );
}

export default PlatformTag;