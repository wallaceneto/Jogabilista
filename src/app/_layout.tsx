import React, { useContext } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

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
            <Stack.Screen name='index' options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default Layout;