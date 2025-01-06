import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import useStyles from './style';
import TextComponent from '../Text';
import Button from '../Button';

const TabBar: React.FC<BottomTabBarProps> = ({ state, navigation }: BottomTabBarProps) => {
  const style = useStyles();

  return (
    <View style={style.container}>
      <View style={style.bar}>

        <Button
          style={style.tabButton}
          onPress={() => navigation.navigate('index')}
        >
          <Ionicons
            name='home-sharp'
            size={38}
            style={state.index === 0 ? style.selectedTab : style.unselectedTab}
          />
          <TextComponent 
            style={state.index === 0 ? style.selectedTab : style.unselectedTab}
          >
            Home
          </TextComponent>
        </Button>


        <Button
          style={style.tabButton}
          onPress={() => navigation.navigate('Groups/index')}
        >
          <Ionicons
            name='grid'
            size={38}
            style={state.index === 1 ? style.selectedTab : style.unselectedTab}
          />
          <TextComponent 
            style={state.index === 1 ? style.selectedTab : style.unselectedTab}
          >
            Grupos
          </TextComponent>
        </Button>

        <Button style={style.addButton} onPress={() => {}}>
          <Ionicons name='add' style={style.addIcon} />
        </Button>


        <Button
          style={style.tabButton}
          onPress={() => navigation.navigate('Games/index')}
        >
          <Ionicons
            name='search'
            size={38}
            style={state.index === 2 ? style.selectedTab : style.unselectedTab}
          />
          <TextComponent 
            style={state.index === 2 ? style.selectedTab : style.unselectedTab}
          >
            Jogos
          </TextComponent>
        </Button>

        <Button
          style={style.tabButton}
          onPress={() => navigation.navigate('Settings/index')}
        >
          <Ionicons
            name='settings-outline'
            size={38}
            style={state.index === 3 ? style.selectedTab : style.unselectedTab}
          />
          <TextComponent 
            style={state.index === 3 ? style.selectedTab : style.unselectedTab}
          >
            Ajustes
          </TextComponent>
        </Button>

      </View>
    </View>
  );
}

export default TabBar;