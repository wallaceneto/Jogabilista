import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import useStyles from './style';

import TextComponent from '../Text';
import Button from '../Button';

const TabBar: React.FC<BottomTabBarProps> = ({ state, navigation }: BottomTabBarProps) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Button
          style={styles.tabButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons
            name='home-sharp'
            size={38}
            style={state.index === 0 ? styles.selectedTab : styles.unselectedTab}
          />
          <TextComponent 
            style={state.index === 0 ? styles.selectedTab : styles.unselectedTab}
          >
            Home
          </TextComponent>
        </Button>


        <Button
          style={styles.tabButton}
          onPress={() => navigation.navigate('Groups')}
        >
          <Ionicons
            name='grid'
            size={38}
            style={state.index === 1 ? styles.selectedTab : styles.unselectedTab}
          />
          <TextComponent 
            style={state.index === 1 ? styles.selectedTab : styles.unselectedTab}
          >
            Grupos
          </TextComponent>
        </Button>

        <Button
          style={styles.addButton}
          onPress={() => navigation.navigate('AddGame')}>
          <Ionicons name='add' style={styles.addIcon} />
        </Button>


        <Button
          style={styles.tabButton}
          onPress={() => navigation.navigate('Games')}
        >
          <Ionicons
            name='search'
            size={38}
            style={state.index === 2 ? styles.selectedTab : styles.unselectedTab}
          />
          <TextComponent 
            style={state.index === 2 ? styles.selectedTab : styles.unselectedTab}
          >
            Jogos
          </TextComponent>
        </Button>

        <Button
          style={styles.tabButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons
            name='settings-outline'
            size={38}
            style={state.index === 3 ? styles.selectedTab : styles.unselectedTab}
          />
          <TextComponent 
            style={state.index === 3 ? styles.selectedTab : styles.unselectedTab}
          >
            Ajustes
          </TextComponent>
        </Button>

      </View>
    </View>
  );
}

export default TabBar;