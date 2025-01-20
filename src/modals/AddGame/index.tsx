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

  const [playTime, setPlaytime] = useState('0');
  const [qualityScore, setQualityScore] = useState('');
  const [interestScore, setInterestScore] = useState('');

  const submitForm = () => {
    const newGame = new Game({
      name: gameName,
      platform: platformValue || undefined,
      status: statusValue || undefined,
      finish_date: playDate ? new Date(playDate) : undefined,
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
          <DropdownField
            placeholder='Status'
            options={status}
            setValue={setStatusValue}
          />
        </View>

        <View style={styles.rowField}>
          <View style={styles.field}>
            <DatePicker
              label='Terminado'
              value={playDate}
              setValue={setPlayDate}
            />
          </View>
          
          <View style={styles.field}>
            <DatePicker
              label='Terminado'
              value={playDate}
              setValue={setPlayDate}
            />
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