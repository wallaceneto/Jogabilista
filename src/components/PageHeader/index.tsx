import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';

import TextComponent from '../Text';

const PageHeader: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
        <TextComponent light weight='bold' style={styles.title}>
          Jogabilista
        </TextComponent>
      </View>
  );
}

export default PageHeader;