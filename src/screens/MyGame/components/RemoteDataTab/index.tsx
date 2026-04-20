import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';
import { IRemoteDataTabProps } from './types';

import TextComponent from '../../../../components/Text';

const RemoteDataTab: React.FC<IRemoteDataTabProps> = ({ sync_game_id }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {
        sync_game_id === undefined ?
          <TextComponent weight='semibold' style={styles.warnText}>
            Esse jogo ainda não foi vinculado a uma página oficial
          </TextComponent>
          :
          <TextComponent>Dados remotos</TextComponent>
      }
    </View>
  );
}

export default RemoteDataTab;