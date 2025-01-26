import React, { useContext, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
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

const App: React.FC = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  
  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const setUser = async () => {
    const theme = await getTheme();
    toggleTheme(theme || 'yellow');

    const games = await getAllGames();
    dispatch(addFullGameList(games));
  }

  useEffect(() => {
    setUser();
  }, []);

  return (
    fontsLoaded ? <Home /> : <AppLoading />
  );
}

export default App;