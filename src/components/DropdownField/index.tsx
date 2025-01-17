import React, { useState } from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import useStyles from './styles';
import { IDropdownFieldProps } from './types';
import { handleOptionPress } from './lib';

import Button from '../Button';
import TextComponent from '../Text';
import Divider from '../Divider';

const DropdownField: React.FC<IDropdownFieldProps> = ({ placeholder, options, setValue }) => {
  const [open, setOpen] = useState(false);
  const styles = useStyles(open);

  const [currentValue, setCurrentValue] = useState('');

  return (
    <View>
      <Button
        style={styles.field}
        onPress={() => setOpen(!open)}
      >
        <TextComponent style={styles.fieldText}>
          {currentValue || placeholder}
        </TextComponent>

        <Ionicons
          name={open ? 'caret-up-outline' : 'caret-down-outline'}
          style={styles.fieldIcon}
        />
      </Button>

      {open ?
        <View style={styles.optionsContainer}>
          {options.map((item, index) =>
            <View key={item}>
              <Button
                style={styles.optionButton}
                onPress={() =>
                  handleOptionPress(item, currentValue, setCurrentValue, setValue)
                }
              >
                <TextComponent style={styles.optionText}>
                  {item}
                </TextComponent>

                {item === currentValue ?
                  <Ionicons
                    name='checkmark-outline'
                    style={styles.optionIcon}
                  />
                  : null
                }
              </Button>
              {index !== options.length - 1 ? <Divider /> : null}
            </View>
          )}
        </View>
        : null
      }
    </View>
  );
}

export default DropdownField;