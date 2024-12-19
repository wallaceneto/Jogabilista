import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './style';
import TextComponent from '../Text';
import Button from '../Button';
import { router } from 'expo-router';
import { ITabBarProps } from './types';
import selectedStyle from './selectedStyle';

const TabBar: React.FC<ITabBarProps> = ({ tab }) => {
  const style = useStyles();
  const selected = selectedStyle;

  return (
    <View style={style.container}>
      <View style={style.bar}>

        <Button
          style={style.tabButton} 
          onPress={() => router.replace(`/Home`)}
        >
          <Ionicons
            name='home-sharp'
            size={38}
            style={selected(tab === 0).buttonColor}
          />
          <TextComponent style={selected(tab === 0).buttonColor}>
            Home
          </TextComponent>
        </Button>

        
        <Button style={style.tabButton} onPress={() => {}}>
          <Ionicons 
            name='grid'
            size={38}
            style={selected(tab === 1).buttonColor}
          />
          <TextComponent style={selected(tab === 1).buttonColor}>
            Grupos
          </TextComponent>
        </Button>

        <Button style={style.addButton} onPress={() => {}}>
          <Ionicons name='add' style={style.addIcon} />
        </Button>
        

        <Button style={style.tabButton} onPress={() => {}}>
          <Ionicons
            name='search'
            size={38}
            style={selected(tab === 2).buttonColor}
          />
          <TextComponent style={selected(tab === 2).buttonColor}>
            Jogos
          </TextComponent>
        </Button>
        
        <Button
          style={style.tabButton} 
          onPress={() => router.replace(`/Settings`)}
        >
          <Ionicons
            name='settings-outline'
            size={38}
            style={selected(tab === 3).buttonColor}
          />
          <TextComponent style={selected(tab === 3).buttonColor}>
            Ajustes
          </TextComponent>
        </Button>
        
      </View>
    </View>
  );
}

export default TabBar;