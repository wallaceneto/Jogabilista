import React from 'react';
import { Stack } from 'expo-router';

const ScreensLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen
        name="Settings/index"
        options={{
          title: 'Ajustes',
          headerShown: false
        }}
      />

      <Stack.Screen
        name="SwitchTheme/index"
        options={{
          title: 'Trocar tema',
          headerShown: false,
          animation: 'slide_from_right'
        }}
      />

      <Stack.Screen
        name='AddGame/index'
        options={{
          title: 'Novo jogo',
          headerShown: false,
          animation: 'slide_from_bottom' 
        }}
      />
    </Stack>
  );
}

export default ScreensLayout;