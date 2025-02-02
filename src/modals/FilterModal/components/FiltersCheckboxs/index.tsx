import React from 'react';
import { FlatList } from 'react-native';

import useStyles from './styles';
import { setCheckbox } from '../../lib';
import { IFiltersCheckboxsProps } from './types';

import CheckboxComponent from '../../../../components/Checkbox';

const FiltersCheckboxs: React.FC<IFiltersCheckboxsProps> = ({ 
  content,
  platformFilters,
  scoreFilters,
  statusFilters
}) => {
  const styles = useStyles();

  return (
    <FlatList
      style={styles.filtersContainers}
      data={content}
      keyExtractor={item => item.option}
      numColumns={3}
      renderItem={({ item }) =>
        <CheckboxComponent
          style={styles.checkbox}
          text={item.option}
          checkAction={item.addItem}
          uncheckAction={item.removeItem}
          checked={
            setCheckbox(item.optionType, item.option, platformFilters, scoreFilters, statusFilters)
          }
        />
      }
    />
  );
}

export default FiltersCheckboxs;