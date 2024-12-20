import React, { useContext } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Stack, Tabs } from 'expo-router';

import { ThemeContext, ThemeProvider } from '../storage/context';

const Layout: React.FC = () => {
  const {colors} = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>

          <StatusBar
            backgroundColor={colors.primaryColor}
            style='light'
          />

          <Stack>
            <Stack.Screen
              name='index'
              options={{ headerShown: false, title: 'index', animation: 'none' }}
            />

            <Stack.Screen
              name='Home/index'
              options={{ headerShown: false, title: 'Home', animation: 'none' }}
            />

            <Stack.Screen
              name='Groups/index'
              options={{ headerShown: false, title: 'Groups', animation: 'none' }}
            />

            <Stack.Screen
              name='Games/index'
              options={{ headerShown: false, title: 'Games', animation: 'none' }}
            />
            
            <Stack.Screen
              name='Settings/index'
              options={{ headerShown: false, title: 'Settings', animation: 'none'  }}
            />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default Layout;