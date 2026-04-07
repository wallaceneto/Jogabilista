import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import useStyles from './styles';
import { ILocalDataTabProps } from './types';
import { handleDelete } from './lib';

import TextComponent from '../../../../components/Text';
import StyledButton from '../../../../components/StyledButton';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import { NavigationProps } from '../../../../global/types';
import { formatDate, getPlatformColor } from '../../../../global/lib';

const LocalDataTab: React.FC<ILocalDataTabProps> = ({ game }) => {
  const navigation = useNavigation<NavigationProps>();
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
          {game.getCreateDate}
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
          {game.getStatus}
        </TextComponent>
        <TextComponent>
          {game.getFinishDate
            ? ` em ${formatDate(game.getFinishDate, 'default')}`
            : null
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

      <View>
        <TextComponent weight='medium' style={styles.scoreLabel}>
          Nota naval:
        </TextComponent>

        <View style={styles.label}>
          <TextComponent style={styles.scoreText}>
            {`Qualidade: ${game.getQualityLetter()}`}
          </TextComponent>
          <TextComponent style={styles.scoreText}>
            {`Interessância: ${game.getInterestScore || 'N/A'}`}
          </TextComponent>
        </View>
      </View>

      {loading ? <LoadingIndicator style={styles.loading} />
        :
        <StyledButton
          style={styles.deleteButton}
          onPress={() =>
            handleDelete(game.getId, dispatch, setLoading, () => navigation.replace('Homepage'))
          }
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