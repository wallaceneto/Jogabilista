import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useStyles from './styles';
import { IGroupCardProps } from './types';
import TextComponent from '../../../../components/Text';
import Button from '../../../../components/Button';
import Cover from './components/Cover';
import { NavigationProps } from '../../../../global/types';

const GroupCard: React.FC<IGroupCardProps> = ({ group }) => {
  const navigation = useNavigation<NavigationProps>()
  const styles = useStyles();

  return (
    <Button style={styles.container} onPress={() => navigation.push('GroupPage', { group })}>
      <View style={styles.topContent}>
        {group.games.length > 0 &&
          <View style={styles.covers}>
            {group.games.map((value, index) =>
              index < 5 &&
              <Cover key={value.id} title={value.name} platform={value.platform} />
            )}
          </View>
        }

        <TextComponent style={styles.title} weight='semibold'>
          {group.name}
        </TextComponent>
      </View>

      <View style={styles.bottomContent}>
        <TextComponent style={styles.subtitle} weight='light'>
          Criado em {group.create_date}
        </TextComponent>

        <TextComponent style={styles.subtitle} weight='light'>
          {group.games.length} jogo{group.games.length > 1 && 's'}
        </TextComponent>
      </View>
    </Button>
  );
}

export default GroupCard;