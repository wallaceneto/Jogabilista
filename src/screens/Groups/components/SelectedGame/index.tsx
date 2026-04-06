import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import useStyles from './styles';
import { ISelectedGameProps } from './types';
import TextComponent from '../../../../components/Text';
import Button from '../../../../components/Button';

const SelectedGame: React.FC<ISelectedGameProps> = ({ game, deleteItem }) => {
  const styles = useStyles();

  return (
    <Button style={styles.container} onPress={() => deleteItem(game)}>
      <TextComponent style={styles.text} weight='semibold'>
        {game.name}
      </TextComponent>

      <Ionicons name='trash-outline' style={styles.icon} />
    </Button>
  );
}

export default SelectedGame;