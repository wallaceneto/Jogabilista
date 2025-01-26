import React from 'react';
import { Text, View } from 'react-native';

import useStyles from './styles';
import { ISectionButtonProps } from './types';

import Button from '../../../../../components/Button';
import TextComponent from '../../../../../components/Text';

const SectionButton: React.FC<ISectionButtonProps> = ({ icon, title, onPress, rightContent, warning }) => {
  const styles = useStyles(warning || false);

  return (
    <Button
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.leftSide}>
        <Text style={styles.warningContent}>
          {icon}
        </Text>

        <TextComponent style={styles.text}>
          {title}
        </TextComponent>
      </View>

      { rightContent ?
        <Text style={styles.warningContent}>
          { rightContent }
        </Text>
      : null}
    </Button>
  );
}

export default SectionButton;