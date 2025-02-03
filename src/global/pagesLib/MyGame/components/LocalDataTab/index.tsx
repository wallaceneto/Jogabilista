import React, { useContext } from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { ILocalDataTabProps } from './types';

import TextComponent from '../../../../../components/Text';
import { IPlatform } from '../../../../types';
import { ThemeContext } from '../../../../../storage/context';
import StyledButton from '../../../../../components/StyledButton';
import { formatDate } from '../../../../lib';

const LocalDataTab: React.FC<ILocalDataTabProps> = ({ game }) => {
  const { colors } = useContext(ThemeContext);
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
        color={colors.commonColors.score.bad}
        onPress={() => { }}
        style={styles.deleteButton}
      >
        <Ionicons
          name='trash-outline'
          style={styles.deleteIcon}
        />
        <TextComponent light weight='bold'>
          Apagar jogo
        </TextComponent>
      </StyledButton>
    </View>
  );
}

export default LocalDataTab;