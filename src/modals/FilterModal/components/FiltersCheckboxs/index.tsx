import React from 'react';
import { FlatList } from 'react-native';

import useStyles from './styles';
import CheckboxComponent from '../../../../components/Checkbox';
import { setCheckbox } from '../../lib';
import { IFiltersCheckboxsProps } from './types';

const FiltersCheckboxs: React.FC<IFiltersCheckboxsProps> = ({ 
  content,
  platformFilters,
  scoreFilters,
  statusFilters
}) => {
  const style = useStyles();

  return (
    <FlatList
      style={style.filtersContainers}
      data={content}
      keyExtractor={item => item.option}
      numColumns={3}
      renderItem={({ item }) =>
        <CheckboxComponent
          style={style.checkbox}
          text={item.option}
          check={item.addItem}
          uncheck={item.removeItem}
          checked={
            setCheckbox(item.optionType, item.option, platformFilters, scoreFilters, statusFilters)
          }
        />
      }
    />
  );
}

export default FiltersCheckboxs;