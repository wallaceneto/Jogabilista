import { useContext } from 'react';
import {StyleSheet} from 'react-native';

import { ThemeContext } from '../../storage/context';

const selectedStyle = (selected: boolean) => {
  const {colors} = useContext(ThemeContext);
  const commonColors = colors.commonColors

  return StyleSheet.create({
    buttonColor: {
      color: selected ? commonColors.baseWhite : commonColors.opacityWhite,
    },
  });
};

export default selectedStyle;