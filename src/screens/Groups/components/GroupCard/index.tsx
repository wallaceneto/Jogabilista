import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';
import { IGroupCardProps } from './types';
import TextComponent from '../../../../components/Text';
import Button from '../../../../components/Button';
import Cover from './components/Cover';

const GroupCard: React.FC<IGroupCardProps> = ({ group }) => {
  const styles = useStyles();

  return (
    <Button style={styles.container}>
      <View style={styles.topContent}>
        {group.games.length > 0 &&
          <View style={styles.covers}>
            {group.games.map((value) => 
              <Cover key={value.id} title={value.name} platform='Playstation' />
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
          {group.games.length} jogos
        </TextComponent>
      </View>
    </Button>
  );
}

export default GroupCard;