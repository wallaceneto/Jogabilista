import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';

import { primaryColor } from '../../global/pagesLib/SwitchTheme/types';
import TextComponent from '../../components/Text';
import Button from '../../components/Button';
import ThemeButton from '../../global/pagesLib/SwitchTheme/components/ThemeButton';
import StyledButton from '../../components/StyledButton';
import { ThemeContext } from '../../storage/context';
import LoadingIndicator from '../../components/LoadingIndicator';
import { handleToggleTheme } from '../../global/pagesLib/SwitchTheme/lib/handleToggleTheme';

const SwitchTheme: React.FC = () => {
  const style = useStyles();
  const {toggleTheme, currentTheme} = useContext(ThemeContext);
  const [current, setCurrent] = useState(currentTheme);
  const [loading, setLoading] = useState(false);

  const yellow: primaryColor = { colorName: 'yellow', colorHex: '#FFCD0E' };
  const purple: primaryColor = { colorName: 'purple', colorHex: '#9E4FC4' };
  const red: primaryColor = { colorName: 'red', colorHex: '#FE3942' };
  const black: primaryColor = { colorName: 'black', colorHex: '#252525' };

  return (
    <View style={style.background}>
      <View>
        <Button
          style={style.header}
          onPress={() => router.back()}
        >
          <Ionicons
            name='arrow-back-outline'
            size={24}
          />

          <TextComponent weight='medium' style={style.headerText}>
            Trocar tema
          </TextComponent>
        </Button>

        <View style={style.content}>
          <ThemeButton
            text='Jogabiliamarelo'
            color={yellow}
            current={current}
            setCurrent={setCurrent}
          />

          <ThemeButton
            text='Jogabiliroxo'
            color={purple}
            current={current}
            setCurrent={setCurrent}
          />

          <ThemeButton
            text='Jogabilivermelho'
            color={red}
            current={current}
            setCurrent={setCurrent}
          />

          <ThemeButton
            text='Jogabilipreto'
            color={black}
            current={current}
            setCurrent={setCurrent}
          />
        </View>
      </View>

      { loading ? 
        <LoadingIndicator style={style.button} /> 
      : 
        <StyledButton
          onPress={() => handleToggleTheme(current, setLoading, toggleTheme)}
          style={style.button}
        >
          <TextComponent light weight='semibold' size={20}>
            Aplicar
          </TextComponent>
        </StyledButton>
      }
    </View>
  );
}

export default SwitchTheme;