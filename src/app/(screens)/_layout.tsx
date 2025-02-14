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
        name='AddGame/[id]'
        options={{
          title: 'Novo jogo',
          headerShown: false,
          animation: 'slide_from_bottom'
        }}
      />

      <Stack.Screen
        name='MyGame/[id]'
        options={{
          title: 'Meu jogo',
          headerShown: false
        }}
      />

      <Stack.Screen
        name='SearchGame/[name]'
        options={{
          title: 'Buscar jogo',
          headerShown: false
        }}
      />
    </Stack>
  );
}

export default ScreensLayout;