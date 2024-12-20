import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';
import { ITextComponentStyle } from './types';
import { setFamily } from './lib';

const useStyles = ({ size, light, weight }: ITextComponentStyle) => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    text: {
      color: light ? colors.commonColors.baseWhite : colors.commonColors.textColor,
      fontSize: size || 16,
      fontFamily: setFamily(weight || 'regular'),
      margin: 1,
    },
  });
};

export default useStyles;