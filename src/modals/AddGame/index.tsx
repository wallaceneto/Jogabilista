import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { IAddGameProps } from './types';

import TextComponent from '../../components/Text';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

const AddGame: React.FC<IAddGameProps> = ({ onClose }) => {
  const style = useStyles();

  const [gameName, setGameName] = useState('');

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
            <TextField
              text={gameName}
              onTextChange={setGameName}
              placeholder='Nome'
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AddGame;