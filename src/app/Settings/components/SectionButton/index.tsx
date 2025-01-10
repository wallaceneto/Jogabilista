import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { ISectionButtonProps } from './types';

import Button from '../../../../components/Button';
import TextComponent from '../../../../components/Text';

const SectionButton: React.FC<ISectionButtonProps> = ({ icon, title, onPress, rightContent, warning }) => {
  const style = useStyles(warning || false);

  return (
    <Button
      style={style.container}
      onPress={onPress}
    >
      <View style={style.leftSide}>
        <Text style={style.warningContent}>
          {icon}
        </Text>

        <TextComponent style={style.text}>
          {title}
        </TextComponent>
      </View>

      { rightContent ?
        <Text style={style.warningContent}>
          { rightContent }
        </Text>
      : null}
    </Button>
  );
}

export default SectionButton;