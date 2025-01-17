import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';
import 'moment/locale/pt-br';

import useStyles from './styles';
import { IAddGameProps } from './types';

import TextComponent from '../../components/Text';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import DropdownField from '../../components/DropdownField';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import StyledButton from '../../components/StyledButton';
import Game from '../../global/classes/Game';
import { IPlatform, IStatus } from '../../global/types';

const AddGame: React.FC<IAddGameProps> = ({ onClose }) => {
  const styles = useStyles();
  const [gameName, setGameName] = useState('');
  const [playDate, setPlayDate] = useState<Date>(new Date());
  const [playTime, setPlaytime] = useState('0');

  const platforms = ['Nintendo', 'Playstation', 'Xbox', 'PC', 'Outro'];
  const [platformValue, setPlatformValue] = useState<IPlatform | string>('');
  const status = ['Terminado', 'Largado', 'Platinado', 'Jogando'];
  const [statusValue, setStatusValue] = useState<IStatus | string>('');
  const quality = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const [qualityScore, setQualityScore] = useState('');
  const interest = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
  const [interestScore, setInterestScore] = useState('');

  const showMode = () => {
    DateTimePickerAndroid.open({
      mode: 'date',
      is24Hour: true,
      value: playDate,
      onChange: (_, selectedDate) => setPlayDate(selectedDate || new Date()),
    });
  }

  const submitForm = () => {
    const newGame = new Game({
      name: gameName,
      finish_date: playDate,
      play_time: parseInt(playTime),
      platform: typeof(platformValue) === 'string' ? undefined : platformValue,
      status: typeof(statusValue) === 'string' ? undefined : statusValue,
      interest_score: interestScore ? parseInt(interestScore) : undefined,
      quality_score: qualityScore ? 10 - quality.indexOf(qualityScore) : undefined,
    });

    console.log(newGame);
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
        <View style={styles.field}>
          <TextComponent weight='medium'>
            Jogo:
          </TextComponent>
          <View style={styles.fieldInput}>
            <TextField
              value={gameName}
              onTextChange={setGameName}
              placeholder='Nome'
              maxCharacters={50}
            />
          </View>
        </View>

        <View style={styles.field}>
          <TextComponent weight='medium'>
            Onde jogou:
          </TextComponent>
          <View style={styles.fieldInput}>
            <DropdownField
              placeholder='Plataforma'
              options={platforms}
              setValue={setPlatformValue}
            />
          </View>
        </View>

        <View style={styles.field}>
          <TextComponent weight='medium'>
            Status:
          </TextComponent>
          <View style={styles.fieldInput}>
            <DropdownField
              placeholder='Status'
              options={status}
              setValue={setStatusValue}
            />
          </View>
        </View>

        <View style={styles.field}>
          <TextComponent weight='medium'>
            Terminado em:
          </TextComponent>
          <View style={styles.fieldInput}>
            <Button onPress={showMode}>
              <TextComponent>
                {moment(playDate).format('LL')}
              </TextComponent>
            </Button>
          </View>
        </View>

        <View style={styles.rowField}>
          <TextComponent weight='medium'>
            Tempo de jogo:
          </TextComponent>
          <View style={styles.numberField}>
            <TextField
              value={playTime}
              onTextChange={setPlaytime}
              type='number-pad'
            />
          </View>
          <TextComponent weight='medium'>
            minutos
          </TextComponent>
        </View>

        <View style={styles.scores}>
          <View style={styles.rowField}>
            <TextComponent
              weight='medium'
              style={styles.scoreLabel}
            >
              Qualidade:
            </TextComponent>
            <View style={styles.fieldInput}>
              <DropdownField
                options={quality}
                setValue={setQualityScore}
              />
            </View>
          </View>

          <View style={styles.rowField}>
            <TextComponent
              weight='medium'
              style={styles.scoreLabel}
            >
              Interessancia:
            </TextComponent>
            <View style={styles.fieldInput}>
              <DropdownField
                options={interest}
                setValue={setInterestScore}
              />
            </View>
          </View>
        </View>

        <StyledButton
          onPress={submitForm}
          style={styles.button}
        >
          <TextComponent light weight='bold'>
            Adicionar
          </TextComponent>
        </StyledButton>
      </ScrollView>
    </View>
  );
}

export default AddGame;