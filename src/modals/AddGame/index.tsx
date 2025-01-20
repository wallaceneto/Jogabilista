import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { IAddGameProps, ITimeUnit } from './types';
import { convertPlayTime } from './lib';
import TimeField from './components/TimeField';

import TextComponent from '../../components/Text';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import DropdownField from '../../components/DropdownField';
import StyledButton from '../../components/StyledButton';
import Game from '../../global/classes/Game';
import { IPlatform, IStatus } from '../../global/types';
import DatePicker from '../../components/DatePicker';

const platforms = ['Nintendo', 'Playstation', 'Xbox', 'PC', 'Outro'];
const status = ['Terminado', 'Largado', 'Platinado', 'Jogando'];
const quality = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const interest = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

const AddGame: React.FC<IAddGameProps> = ({ onClose }) => {
  const styles = useStyles();

  const [gameName, setGameName] = useState('');
  const [platformValue, setPlatformValue] = useState<IPlatform | ''>('');
  const [statusValue, setStatusValue] = useState<IStatus | ''>('');
  const [playDate, setPlayDate] = useState('');
  const [qualityScore, setQualityScore] = useState('');
  const [interestScore, setInterestScore] = useState('');

  const [playTime, setPlaytime] = useState('0');
  const [timeUnit, setTimeUnit] = useState<ITimeUnit>('hr');

  const submitForm = () => {
    const name = gameName.trim();

    if(name !== '') {
      const newGame = new Game({
        name: name,
        platform: platformValue || undefined,
        play_time: convertPlayTime(playTime, timeUnit),
        status: statusValue || undefined,
        finish_date: playDate ? new Date(playDate) : undefined,
        quality_score: qualityScore ? 10 - quality.indexOf(qualityScore) : undefined,
        interest_score: interestScore ? parseInt(interestScore) : undefined,
      });
  
      console.log(newGame);
    }
  }

  return (
    <View style={styles.background}>

      <View style={styles.header}>
        <TextComponent weight='bold' style={styles.headerTitle}>
          Adicionar jogo
        </TextComponent>

        <Button onPress={onClose}>
          <Ionicons
            name='close'
            style={styles.headerIcon}
          />
        </Button>
      </View>

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
              label={`Dia que ${ statusValue === 'Largado' ? 'largou' : 'terminou' }`}
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
            Adicionar
          </TextComponent>
        </StyledButton>
      </ScrollView>
    </View>
  );
}

export default AddGame;