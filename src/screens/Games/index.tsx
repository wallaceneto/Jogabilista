import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import TextComponent from '../../components/Text';
import PageHeader from '../../components/PageHeader';

const Games: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <PageHeader />

      <View style={styles.content}>
        <TextComponent style={styles.title} weight='bold'>
          EM BREVE
        </TextComponent>
      </View>
    </View>
  );
}

export default Games;