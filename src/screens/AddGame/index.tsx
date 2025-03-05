import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import useStyles from './styles';
import { IAddGameProps } from './types';
import { convertPlayTime } from '../../global/pagesLib/AddGame/lib';
import { ITimeUnit } from '../../global/pagesLib/AddGame/types';
import TimeField from '../../global/pagesLib/AddGame/components/TimeField';

import { platforms, status, quality, interest, NavigationProps } from '../../global/types';
import TextComponent from '../../components/Text';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import DropdownField from '../../components/DropdownField';
import StyledButton from '../../components/StyledButton';
import { IPlatform, IStatus } from '../../global/types';
import DatePicker from '../../components/DatePicker';
import LoadingIndicator from '../../components/LoadingIndicator';
import { addGameToList, updateGame } from '../../reducers/user/userSlice';
import Game from '../../global/classes/Game';

const AddGame: React.FC<IAddGameProps> = (props) => {
  const isUpdate = props.game !== undefined;
  const styles = useStyles();
  const dispatch = useDispatch();
    const navigation = useNavigation<NavigationProps>();

  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  
  const [game, setGame] = useState<Game | undefined>(undefined);
  const [gameName, setGameName] = useState('');
  const [platformValue, setPlatformValue] = useState<IPlatform | ''>('');
  const [statusValue, setStatusValue] = useState<IStatus | ''>('');
  const [playDate, setPlayDate] = useState('');
  const [qualityScore, setQualityScore] = useState('');
  const [interestScore, setInterestScore] = useState('');
  const [playTime, setPlaytime] = useState('');
  const [timeUnit, setTimeUnit] = useState<ITimeUnit>('hr');

  const submitForm = () => {
    const name = gameName.trim();
    if (name !== '') {
      setErrorMsg('');
      setLoading(true);

      const gameQuality = qualityScore ? 10 - quality.indexOf(qualityScore) : undefined;
      const gameInterest = interestScore ? parseInt(interestScore) : undefined;

      const newGame = new Game({
        // immutable attributes
        id: game ? game.getId : undefined,
        create_date: game ? game.getCreateDate : undefined,
        cover: game ? game.getCover : undefined,
        sync_game: game ? game.getSyncGame : undefined,
        // mutable attributes
        name: name,
        platform: platformValue || undefined,
        play_time: convertPlayTime(playTime, timeUnit),
        status: statusValue || undefined,
        finish_date: playDate || undefined,
        quality_score: gameQuality,
        interest_score: gameInterest,
      });

      setTimeout(() => {
        if (props.game) {
          dispatch(updateGame(newGame.getAllAtributes()));
        } else {
          dispatch(addGameToList(newGame.getAllAtributes()));
        }
        navigation.replace('Homepage');
      }, 900);

    } else {
      setErrorMsg('O título é obrigatório!');
    }
  }

  useEffect(() => {
    if (props.game) {
      setLoading(true);

      const currentGame = new Game(props.game);
      setGame(currentGame);

      setGameName(currentGame.getName);
      setPlatformValue(currentGame.getPlatform);
      setStatusValue(currentGame.getStatus === 'Não informado' ? '' : currentGame.getStatus);
      setPlayDate(currentGame.getFinishDate || '');
      setQualityScore(currentGame.getQualityLetter() === 'N/A' ? '' : currentGame.getQualityLetter());
      setInterestScore(currentGame.getInterestScore ? currentGame.getInterestScore.toString() : '');
      setPlaytime(currentGame.getPlayTime.toString());
      setTimeUnit('min');

      setLoading(false);
    }
  }, [])

  return (
    <View style={styles.background}>

      <View style={styles.header}>
        <TextComponent weight='bold' style={styles.headerTitle}>
          {isUpdate ? 'Editar' : 'Adicionar'} jogo
        </TextComponent>

        <Button onPress={navigation.goBack}>
          <Ionicons
            name='close'
            style={styles.headerIcon}
          />
        </Button>
      </View>

      {loading ? <LoadingIndicator style={styles.loading} /> :
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <TextComponent
            weight='semibold'
            style={styles.lable}
          >
            Dados do jogo
          </TextComponent>

          <View style={styles.field}>
            <TextField
              value={gameName}
              onTextChange={setGameName}
              placeholder='Título'
              maxCharacters={50}
              errorMsg={errorMsg}
            />
          </View>

          <View style={styles.field}>
            <DropdownField
              placeholder='Onde jogou'
              options={platforms}
              setValue={setPlatformValue}
            />
          </View>

          <View style={styles.field}>
            <TimeField
              value={playTime}
              onTextChange={setPlaytime}
              timeUnit={timeUnit}
              setTimeUnit={setTimeUnit}
            />
          </View>

          <View style={styles.field}>
            <DropdownField
              placeholder='Status'
              options={status}
              setValue={setStatusValue}
            />
          </View>

          {statusValue && statusValue !== 'Jogando' ?
            <View style={styles.field}>
              <DatePicker
                label={`Dia que ${statusValue === 'Largado' ? 'largou' : 'terminou'}`}
                value={playDate}
                setValue={setPlayDate}
              />
            </View>
            : null}

          <TextComponent
            weight='semibold'
            style={styles.lable}
          >
            Nota naval
          </TextComponent>

          <View style={styles.scoreContainer}>
            <View style={styles.scoreField}>
              <DropdownField
                placeholder='Qualidade'
                options={quality}
                setValue={setQualityScore}
              />
            </View>

            <View style={styles.scoreField}>
              <DropdownField
                placeholder='Interessância'
                options={interest}
                setValue={setInterestScore}
              />
            </View>
          </View>

          <StyledButton onPress={submitForm} >
            <TextComponent light weight='bold'>
              {isUpdate ? 'Editar' : 'Adicionar'}
            </TextComponent>
          </StyledButton>
        </ScrollView>
      }
    </View>
  );
}

export default AddGame;