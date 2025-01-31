import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { useDispatch } from 'react-redux';

import Home from './Home';
import { ThemeContext } from '../../storage/context';
import { getAllGames, getTheme } from '../../storage/asyncStorage';
import { addFullGameList } from '../../reducers/user/userSlice';
import { SplashScreen } from 'expo-router';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => { 
  const [appIsReady, setAppIsReady] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  useEffect(() => {
    const prepare = async () => {
      try {
        const theme = await getTheme();
        toggleTheme(theme || 'yellow');
    
        const games = await getAllGames();
        dispatch(addFullGameList(games));
  
        fontsLoaded;
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
    fontsLoaded;
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View 
      style={{ flex: 1 }}
      onLayout={onLayoutRootView}
    >
      <Home />
    </View>
  );
}

export default App;