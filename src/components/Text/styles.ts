import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ITextComponentStyle } from './types';
import { setFamily } from './lib';

import { ThemeContext } from '../../storage/context';

const useStyles = ({ size, light, weight }: ITextComponentStyle) => {
  const {colors} = useContext(ThemeContext);

  return StyleSheet.create({
    text: {
      color: light ? colors.commonColors.baseWhite : colors.commonColors.textColor,
      fontSize: size || 16,
      fontFamily: setFamily(weight || 'regular'),
      margin: 0,
    },
  });
};

export default useStyles;