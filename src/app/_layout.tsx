import React, { useContext } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

import { ThemeContext, ThemeProvider } from '../storage/context';
import { store } from '../reducers/store';

const Layout: React.FC = () => {
  const {colors} = useContext(ThemeContext);
  
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>

            <StatusBar
              backgroundColor={colors.primaryColor}
              style='light'
            />

            <Stack>
              <Stack.Screen
                name='(tabs)'
                options={{ headerShown: false, animation: 'none' }}
              />

              <Stack.Screen
                name='(screens)'
                options={{ headerShown: false }}
              />
            </Stack>
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default Layout;