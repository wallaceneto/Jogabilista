import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { IAddGameProps } from './types';

import TextComponent from '../../components/Text';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import DropdownField from '../../components/DropdownField';

const AddGame: React.FC<IAddGameProps> = ({ onClose }) => {
  const style = useStyles();
  const [gameName, setGameName] = useState('');

  const platforms = ['Nintendo', 'Playstation', 'Xbox', 'PC', 'Outro'];
  const [platformValue, setPlatformValue] = useState('');
  const status = ['Terminado', 'Largado', 'Platinado', 'Jogando'];
  const [statusValue, setStatusValue] = useState('');
  const quality = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const [qualityScore, setQualityScore] = useState('');

  return (
    <View style={style.background}>
      <View style={style.header}>
        <TextComponent weight='bold' style={style.headerTitle}>
          Adicionar jogo
        </TextComponent>

        <Button onPress={onClose}>
          <Ionicons
            name='close'
            style={style.headerIcon}
          />
        </Button>
      </View>

      <ScrollView
        style={style.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={style.field}>
          <TextComponent weight='medium'>
            Jogo:
          </TextComponent>
          <View style={style.fieldInput}>
            <TextField
              text={gameName}
              onTextChange={setGameName}
              placeholder='Nome'
            />
          </View>
        </View>
        
        <View style={style.field}>
          <TextComponent weight='medium'>
            Onde jogou:
          </TextComponent>
          <View style={style.fieldInput}>
            <DropdownField
              placeholder='Plataforma'
              options={platforms}
              setValue={setPlatformValue}
            />
          </View>
        </View>
        
        <View style={style.field}>
          <TextComponent weight='medium'>
            Status:
          </TextComponent>
          <View style={style.fieldInput}>
            <DropdownField
              placeholder='Status'
              options={status}
              setValue={setStatusValue}
            />
          </View>
        </View>
        
        <View style={style.rowField}>
          <TextComponent weight='semibold'>
            Qualidade:
          </TextComponent>
          <View style={style.fieldInput}>
            <DropdownField
              placeholder='Qualidade'
              options={quality}
              setValue={setQualityScore}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AddGame;