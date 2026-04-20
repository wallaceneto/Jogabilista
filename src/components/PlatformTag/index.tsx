import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IPlatformTagProps } from './types';

import TextComponent from '../Text';
import { getPlatformColor } from '../../global/lib';

const PlatformTag: React.FC<IPlatformTagProps> = ({ platform }) => {
  const styles = useStyles(getPlatformColor(platform));

  return (
    <View style={styles.tag}>
      <TextComponent light size={14}>
        {platform}
      </TextComponent>
    </View>
  );
}

export default PlatformTag;