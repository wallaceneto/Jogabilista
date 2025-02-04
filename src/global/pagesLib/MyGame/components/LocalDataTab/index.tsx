import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { ILocalDataTabProps } from './types';
import { deleteGame } from './lib';

import TextComponent from '../../../../../components/Text';
import StyledButton from '../../../../../components/StyledButton';
import { formatDate, getPlatformColor } from '../../../../lib';
import LoadingIndicator from '../../../../../components/LoadingIndicator';

const LocalDataTab: React.FC<ILocalDataTabProps> = ({ game }) => {
  const styles = useStyles(getPlatformColor(game.getPlatform));
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.label}>
        <TextComponent weight='medium' style={styles.lableTitle}>
          Adicionado em:
        </TextComponent>

        <TextComponent>
          {formatDate(game.getCreateDate, 'withhour')}
        </TextComponent>
      </View>

      <View style={styles.label}>
        <TextComponent weight='medium' style={styles.lableTitle}>
          Plataforma jogada:
        </TextComponent>

        <TextComponent weight='semibold' style={styles.platformText}>
          {game.getPlatform}
        </TextComponent>
      </View>

      <View style={styles.label}>
        <TextComponent weight='medium' style={styles.lableTitle}>
          Status:
        </TextComponent>

        <TextComponent>
          {game.getFinishDate
            ? `Terminado em ${formatDate(game.getFinishDate, 'default')}`
            : game.getStatus
          }
        </TextComponent>
      </View>

      <View style={styles.label}>
        <TextComponent weight='medium' style={styles.lableTitle}>
          Tempo de jogo:
        </TextComponent>

        <TextComponent>
          {game.getTotalPlaytime()}
        </TextComponent>
      </View>

      <View style={styles.label}>
        <TextComponent weight='medium' style={styles.lableTitle}>
          Nota naval:
        </TextComponent>

        <TextComponent style={styles.scoreText}>
          {`Qualidade: ${game.getQualityScore}`}
        </TextComponent>
        <TextComponent>
          {`Interessância: ${game.getInterestScore}`}
        </TextComponent>
      </View>

      {loading ? <LoadingIndicator style={styles.loading} /> 
        : 
        <StyledButton
          style={styles.deleteButton}
          onPress={() => {
            setLoading(true);
            deleteGame(game.getId, dispatch);
          }}
        >
          <Ionicons
            name='trash-outline'
            style={styles.deleteIcon}
          />
          <TextComponent light weight='bold'>
            Apagar jogo
          </TextComponent>
        </StyledButton>
      }      

    </ScrollView>
  );
}

export default LocalDataTab;