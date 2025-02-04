import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { ILocalDataTabProps } from './types';
import { deleteGame } from './lib';

import TextComponent from '../../../../../components/Text';
import { IPlatform } from '../../../../types';
import { ThemeContext } from '../../../../../storage/context';
import StyledButton from '../../../../../components/StyledButton';
import { formatDate } from '../../../../lib';
import LoadingIndicator from '../../../../../components/LoadingIndicator';

const LocalDataTab: React.FC<ILocalDataTabProps> = ({ game }) => {
  const { colors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const getPlatformColor = (platform: IPlatform) => {
    switch (platform) {
      case 'Nintendo':
        return colors.commonColors.tag.nintendo;
      case 'Xbox':
        return colors.commonColors.tag.xbox;
      case 'Playstation':
        return colors.commonColors.tag.playstation;
      case 'PC':
        return colors.commonColors.tag.pc;
      default:
        return colors.commonColors.darkGrey;
    }
  }
  const styles = useStyles(getPlatformColor(game.getPlatform));

  return (
    <View style={styles.container}>
      {loading ? <LoadingIndicator />
        :
        <>
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

          <StyledButton
            style={styles.deleteButton}
            color={colors.commonColors.score.bad}
            onPress={() => deleteGame(game.getId, setLoading, dispatch)}
          >
            <Ionicons
              name='trash-outline'
              style={styles.deleteIcon}
            />
            <TextComponent light weight='bold'>
              Apagar jogo
            </TextComponent>
          </StyledButton>
        </>
      }
    </View>
  );
}

export default LocalDataTab;