import React from 'react';
import { Tabs } from 'expo-router';
import TabBar from '../../components/TabBar';

const TabLayout: React.FC = () => {
  return (
    <Tabs tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="Groups/index"
        options={{
          title: 'Grupos',
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="Games/index"
        options={{
          title: 'Jogos',
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="Settings/index"
        options={{
          title: 'Ajustes',
          headerShown: false
        }}
      />
    </Tabs>
  );
}

export default TabLayout;