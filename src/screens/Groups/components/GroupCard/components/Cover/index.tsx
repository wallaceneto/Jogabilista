import React, { useContext } from 'react';
import { View } from 'react-native';
import useStyles from './styles';
import { ICoverProps } from './types';
import { getCoverColor } from './lib';
import { ThemeContext } from '../../../../../../storage/context';
import TextComponent from '../../../../../../components/Text';

const Cover: React.FC<ICoverProps> = ({ title, platform }) => {
  const { colors } = useContext(ThemeContext);
  const styles = useStyles(getCoverColor(colors, platform));

  return (
    <View style={styles.container}>
      <TextComponent style={styles.text} weight='semibold'>
        {title}
      </TextComponent>
    </View>
  );
}

export default Cover;