import React, { useContext } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './src/reducers/store';
import { ThemeContext, ThemeProvider } from './src/storage/context';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

const App: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <ThemeProvider>
          <SafeAreaProvider style={{ flex: 1 }}>
            <StatusBar
              backgroundColor={colors.primaryColor}
              style='light'
            />
            <Routes />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;