import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './style';
import TextComponent from '../Text';
import Button from '../Button';
import { ITabBarProps } from './types';
import { toggleTab } from './lib';

const TabBar: React.FC<ITabBarProps> = ({ tab }) => {
  const style = useStyles();

  return (
    <View style={style.container}>
      <View style={style.bar}>

        <Button
          style={style.tabButton} 
          onPress={() => toggleTab(0, '/Home', tab)}
        >
          <Ionicons
            name='home-sharp'
            size={38}
            style={tab === 0 ? style.selectedTab : style.unselectedTab}
          />
          <TextComponent 
            style={tab === 0 ? style.selectedTab : style.unselectedTab}
          >
            Home
          </TextComponent>
        </Button>

        
        <Button
          style={style.tabButton} 
          onPress={() => toggleTab(1, '/Groups', tab)}
        >
          <Ionicons 
            name='grid'
            size={38}
            style={tab === 1 ? style.selectedTab : style.unselectedTab}
          />
          <TextComponent 
            style={tab === 1 ? style.selectedTab : style.unselectedTab}
          >
            Grupos
          </TextComponent>
        </Button>

        <Button style={style.addButton} onPress={() => {}}>
          <Ionicons name='add' style={style.addIcon} />
        </Button>
        

        <Button
          style={style.tabButton} 
          onPress={() => toggleTab(2, '/Games', tab)}
        >
          <Ionicons
            name='search'
            size={38}
            style={tab === 2 ? style.selectedTab : style.unselectedTab}
          />
          <TextComponent 
            style={tab === 2 ? style.selectedTab : style.unselectedTab}
          >
            Jogos
          </TextComponent>
        </Button>
        
        <Button
          style={style.tabButton} 
          onPress={() => toggleTab(3, '/Settings', tab)}
        >
          <Ionicons
            name='settings-outline'
            size={38}
            style={tab === 3 ? style.selectedTab : style.unselectedTab}
          />
          <TextComponent 
            style={tab === 3 ? style.selectedTab : style.unselectedTab}
          >
            Ajustes
          </TextComponent>
        </Button>
        
      </View>
    </View>
  );
}

export default TabBar;